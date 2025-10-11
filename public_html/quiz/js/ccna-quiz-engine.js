// Lightweight production wrapper: only log warnings in debug mode
(function(){
    const DEBUG = false; // set true for local debugging
    const _warn = console.warn.bind(console);
    console.warn = function(...args){ if (DEBUG) _warn(...args); };

    // Configuration validation - ensure CCNAConfig is properly loaded
    function validateConfig() {
        if (typeof CCNAConfig === 'undefined') {
            console.error('CCNA Quiz Error: CCNAConfig is not loaded. Make sure ccna-study-guide-config.js is loaded before this script.');
            return false;
        }
        
        const requiredPaths = [
            'CCNAConfig.quiz',
            'CCNAConfig.quiz.cssClasses',
            'CCNAConfig.quiz.cssClasses.states',
            'CCNAConfig.quiz.cssClasses.states.hidden',
            'CCNAConfig.quiz.cssClasses.buttons',
            'CCNAConfig.quiz.cssClasses.buttons.option',
            'CCNAConfig.quiz.cssClasses.buttons.optionLabel',
            'CCNAConfig.quiz.cssClasses.buttons.submit',
            'CCNAConfig.quiz.cssClasses.buttons.submitDisabled',
            'CCNAConfig.quiz.cssClasses.buttons.submitReady',
            'CCNAConfig.quiz.cssClasses.buttons.sizeSelected',
            'CCNAConfig.quiz.cssClasses.buttons.selectedMultiple',
            'CCNAConfig.quiz.textContent',
            'CCNAConfig.quiz.textContent.feedback',
            'CCNAConfig.quiz.elementIds'
        ];
        
        for (const path of requiredPaths) {
            try {
                const value = path.split('.').reduce((obj, key) => obj && obj[key], window);
                if (value === undefined) {
                    console.error(`CCNA Quiz Error: Missing configuration path: ${path}`);
                    return false;
                }
            } catch (e) {
                console.error(`CCNA Quiz Error: Error accessing ${path}:`, e);
                return false;
            }
        }
        
        return true;
    }

    // --- DATA LOADING ---
    // This section loads questions from a static JSON file on the server.
    // To integrate a DB or API, replace `getQuestionsFromServer()` with your API fetch logic.
    // currentCategory: 'cisco' or 'wiley'
    let currentCategory = null;

    function storageKey(name) {
        // name: 'history' | 'best' | 'save'
        return `${name}_quiz_${currentCategory || 'cisco'}_v1`;
    }

    async function loadQuizData() {
            async function getQuestionsFromServer() {
                try {
                    // Use centralized endpoint configuration  
                    const path = currentCategory === 'wiley' 
                        ? CCNAConfig.quiz.behavior.endpoints.wileyQuestions 
                        : CCNAConfig.quiz.behavior.endpoints.ciscoQuestions;
                    const res = await fetch(path, { cache: 'no-store' });
                    if (!res.ok) throw new Error('HTTP ' + res.status);
                    const response = await res.json();
                    
                    // Handle new API response format
                    const data = response.success ? response.questions : response;
                    
                    // New schema: number, question, options, answer, explanation, image
                    return data.map(q => ({
                        number: q.number,
                        question: q.question,
                        options: Array.isArray(q.options) ? q.options : [],
                        answer: Array.isArray(q.answer) ? q.answer : (q.answer ? [q.answer] : []),
                        explanation: q.explanation || null,
                        image: q.image || null
                    }));
                } catch (e) {
                    console.warn('Could not fetch questions:', e);
                    return null;
                }
            }

            // Fetch questions from server and simulate a short network delay
            const serverData = await getQuestionsFromServer();
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve(serverData || []);
                }, 250);
            });
        }

    // Render quiz history
    function renderHistory() {
        try {
            const raw = localStorage.getItem(storageKey('history'));
            const history = raw ? JSON.parse(raw) : [];
            const el = document.getElementById('history');
            if (!el) return;
            if (history.length === 0) {
                el.innerHTML = '<p class="text-gray-500">No past attempts recorded.</p>';
                return;
            }
            el.innerHTML = '<h4 class="font-semibold">Past Attempts</h4>' + history.slice(0,10).map(h => {
                const d = new Date(h.date);
                return `<div class="mt-1">${d.toLocaleString()}: ${h.score}/${h.total} (${h.pct}%)</div>`;
            }).join('');
        } catch (e) { console.warn(e); }
    }

    // Setup all event handlers after DOM and configuration are ready
    function setupEventHandlers() {
        // Entry buttons: choose category and show setup
        document.getElementById('cisco-entry-btn').addEventListener('click', () => {
            currentCategory = 'cisco';
            // show setup, hide entry
            document.getElementById('enter-container').classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
            document.getElementById('setup-container').classList.remove(CCNAConfig.quiz.cssClasses.states.hidden);
            // show resume if saved progress exists for this category
            if (hasSavedProgress()) document.getElementById('resume-btn').classList.remove(CCNAConfig.quiz.cssClasses.states.hidden); else document.getElementById('resume-btn').classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
            renderBestUI(targetSize);
            renderHistory();
        });

        document.getElementById('wiley-entry-btn').addEventListener('click', () => {
            currentCategory = 'wiley';
            document.getElementById('enter-container').classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
            document.getElementById('setup-container').classList.remove(CCNAConfig.quiz.cssClasses.states.hidden);
            // hide resume if no saved for Wiley
            if (hasSavedProgress()) document.getElementById('resume-btn').classList.remove(CCNAConfig.quiz.cssClasses.states.hidden); else document.getElementById('resume-btn').classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
            renderBestUI(targetSize);
            renderHistory();
        });

        // Setup screen wiring
        document.querySelectorAll('.size-btn').forEach(b => b.addEventListener('click', (e) => {
            document.querySelectorAll('.size-btn').forEach(x => x.className = x.className.replace(CCNAConfig.quiz.cssClasses.buttons.sizeSelected, '').trim());
            e.currentTarget.className += ` ${CCNAConfig.quiz.cssClasses.buttons.sizeSelected}`;
            const ds = e.currentTarget.dataset.size;
            if (ds === 'all') {
                targetSize = Infinity; // will be clamped to available questions
            } else {
                targetSize = parseInt(ds, 10);
            }
            // show best for the selected size (normalize data type for consistent handling)
            const sizeForBestUI = ds === 'all' ? 'all' : targetSize;
            renderBestUI(sizeForBestUI);
        }));
        
        document.getElementById('begin-btn').addEventListener('click', startQuiz);
        document.getElementById('resume-btn').addEventListener('click', resumeQuiz);
        
        // Restart and home button handlers
        restartBtn.addEventListener('click', startQuiz);
        if (homeBtn) {
            homeBtn.addEventListener('click', () => {
                resultsContainer.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
                quizContainer.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
                setupContainer.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
                document.getElementById('enter-container').classList.remove(CCNAConfig.quiz.cssClasses.states.hidden);
            });
        }
        
        // Next button handler
        nextBtn.addEventListener('click', () => {
            currentQuestionIndex++;
            updateProgressBar();
            if (currentQuestionIndex < quizData.length) {
                loadQuestion();
                saveProgress();
            } else {
                clearSavedProgress();
                setTimeout(showResults, 500);
            }
        });
        
        // Keydown handler for Enter key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !nextBtn.disabled) {
                nextBtn.click();
            }
        });
        
        // Initial view: show entry screen
        loadingContainer.classList.add('hidden');
        // show entry container already visible by default
        // don't render history or bests until a category is chosen
    }

    // --- SCRIPT LOGIC - Using Centralized Configuration ---
    
    // Validate configuration before proceeding
    document.addEventListener('DOMContentLoaded', function() {
        if (!validateConfig()) {
            console.error('CCNA Quiz: Configuration validation failed. Quiz cannot start.');
            return;
        }
        
        // Initialize all DOM elements from CCNAConfig after validation
        Object.entries(CCNAConfig.quiz.elementIds).forEach(([key, id]) => {
            elements[key] = document.getElementById(id);
        });
        
        // Setup element aliases after validation
        setupElementAliases();
        
        // Setup event handlers after validation
        setupEventHandlers();
    });
    
    // Get DOM elements using centralized configuration
    const elements = {};
    
    // Backward compatibility - create aliases for existing code
    let quizContainer, resultsContainer, setupContainer, loadingContainer;
    let questionArea, feedbackArea, scoreEl, finalScoreEl, progressBar;
    let nextBtn, restartBtn, homeBtn;
    
    function setupElementAliases() {
        quizContainer = elements.quizContainer;
        resultsContainer = elements.resultsContainer;
        setupContainer = elements.setupContainer;
        loadingContainer = elements.loadingContainer;
        questionArea = elements.questionArea;
        feedbackArea = elements.feedbackArea;
        scoreEl = elements.scoreEl;
        finalScoreEl = elements.finalScoreEl;
        progressBar = elements.progressBar;
        nextBtn = elements.nextBtn;
        restartBtn = elements.restartBtn;
        homeBtn = elements.homeBtn;
    }

        let quizData = [];
        let currentQuestionIndex = 0;
        let score = 0;
        let questionsAnswered = 0;
        let selectedAnswers = [];
    let targetSize = 20; // default

    // storage keys are computed with storageKey(name)

    // In-memory answers map: questionNumber -> ["A"]
    let answersMap = {};

    // Truncate (not round) to 2 decimals per requirement
    function formatScore(val) {
        return (Math.trunc(val * 100) / 100).toFixed(2).replace(/\.00$/,'0').replace(/(\.\d[1-9])0$/,'$1');
    }

    // Basic HTML sanitization to prevent XSS attacks
    function sanitizeHtml(input) {
        if (!input || typeof input !== 'string') return input;
        
        // Create a temporary element to safely parse HTML
        const temp = document.createElement('div');
        temp.textContent = input;
        let sanitized = temp.innerHTML;
        
        // Allow safe HTML tags for educational content
        const allowedTags = ['b', 'strong', 'i', 'em', 'u', 'br', 'p', 'code', 'pre'];
        const allowedPattern = new RegExp(`<(/?(?:${allowedTags.join('|')}))>`, 'gi');
        
        // First escape all HTML, then selectively allow safe tags
        sanitized = sanitized.replace(/<[^>]*>/g, match => {
            return allowedPattern.test(match) ? match : '';
        });
        
        return sanitized;
    }

    function getBestScores() {
        try {
            const raw = localStorage.getItem(storageKey('best'));
            return raw ? JSON.parse(raw) : { perSize: {}, overall: null };
        } catch (e) {
            return { perSize: {}, overall: null };
        }
    }

    function setBestScores(bests) {
        try { localStorage.setItem(storageKey('best'), JSON.stringify(bests)); } catch (e) { /* ignore */ }
    }

    function updateBestForRun(size, score, total) {
        const pct = total > 0 ? Math.round((score/total)*100) : 0;
        const bests = getBestScores();
        const sizeKey = String(size);
        // update per-size best if better
        if (!bests.perSize[sizeKey] || pct > bests.perSize[sizeKey].pct) {
            bests.perSize[sizeKey] = { pct, score, total, date: new Date().toISOString() };
        }
        // update overall best
        if (!bests.overall || pct > bests.overall.pct) {
            bests.overall = { pct, score, total, size: sizeKey, date: new Date().toISOString() };
        }
        setBestScores(bests);
        return bests;
    }

    function saveProgress() {
        try {
            if (!quizData || quizData.length === 0) return;
            const payload = {
                quizQuestionNumbers: quizData.map(q => q.number || null),
                currentQuestionIndex,
                score,
                questionsAnswered,
                answersMap,
                savedAt: new Date().toISOString()
            };
            localStorage.setItem(storageKey('save'), JSON.stringify(payload));
        } catch (e) { console.warn('Could not save progress', e); }
    }
    function loadSavedProgressRaw() {
        try { const raw = localStorage.getItem(storageKey('save')); return raw ? JSON.parse(raw) : null; } catch (e) { return null; }
    }

    function hasSavedProgress() { return !!loadSavedProgressRaw(); }

    // fix clearSavedProgress to use storageKey
    function clearSavedProgress() { try { localStorage.removeItem(storageKey('save')); } catch (e) {} }

    function renderBestUI(currentSize) {
        const el = document.getElementById('best-score');
        if (!el) return;
        const bests = getBestScores();
        
        // Normalize currentSize to string for consistent lookup
        const sizeKey = String(currentSize);
        const per = bests.perSize[sizeKey];
        const overall = bests.overall;
        
        el.innerHTML = '';
        if (per) el.innerHTML += `<div>Best for this size: ${per.score}/${per.total} (${per.pct}%) — ${new Date(per.date).toLocaleDateString()}</div>`;
        if (overall) el.innerHTML += `<div>All-time best: ${overall.score}/${overall.total} (${overall.pct}%) — ${new Date(overall.date).toLocaleDateString()} (size: ${overall.size})</div>`;
        if (!per && !overall) el.innerHTML = '<div class="text-gray-500">No high scores yet. Take a quiz!</div>';
    }

        async function startQuiz() {
            loadingContainer.classList.remove(CCNAConfig.quiz.cssClasses.states.hidden);
            quizContainer.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
            resultsContainer.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
            setupContainer.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
            
            const all = await loadQuizData();
            loadingContainer.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);

            if (!all || all.length === 0) {
                setupContainer.innerHTML = `<p class="text-center text-red-500">Failed to load quiz questions. Please try again later.</p>`;
                setupContainer.classList.remove(CCNAConfig.quiz.cssClasses.states.hidden);
                return;
            }

            // Shuffle and select subset according to targetSize
            all.sort(() => Math.random() - 0.5);
            quizData = all.slice(0, Math.min(targetSize, all.length));
            // reset answers map for a new run
            answersMap = {};
            clearSavedProgress();

            currentQuestionIndex = 0;
            score = 0;
            questionsAnswered = 0;
            quizContainer.classList.remove(CCNAConfig.quiz.cssClasses.states.hidden);
            // Hide score during quiz - only show at the end
            scoreEl.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
            loadQuestion();
            // show bests for this selected size on setup -> quiz start
            renderBestUI(quizData.length);
         }

        function loadQuestion() {
            selectedAnswers = [];
            feedbackArea.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
            nextBtn.disabled = true;

            const currentQuestion = quizData[currentQuestionIndex];

            // Render image if present
            let imageHtml = '';
            if (currentQuestion.image) {
                const imgPath = currentQuestion.image;
                imageHtml = `<div class="mb-4 text-center"><img src="${imgPath}" alt="Question Image" class="max-w-full h-auto mx-auto rounded shadow inline-block" data-question-image="true"></div>`;
            }

            const optionsHtml = currentQuestion.options.map((option, index) => {
                const optionLetter = String.fromCharCode(65 + index);
                const sanitizedOption = sanitizeHtml(option);
                return `
                    <button class="option-btn ${CCNAConfig.quiz.cssClasses.buttons.option}" data-answer="${optionLetter}">
                        <span class="${CCNAConfig.quiz.cssClasses.buttons.optionLabel}">${optionLetter}.</span> ${sanitizedOption}
                    </button>
                `;
            }).join('');

            const sanitizedQuestion = sanitizeHtml(currentQuestion.question);
            
            questionArea.innerHTML = `
                <p class="${CCNAConfig.quiz.cssClasses.text.questionNumber}">Question ${currentQuestionIndex + 1} of ${quizData.length}${currentQuestion.number ? ` (ID: ${currentQuestion.number})` : ''}</p>
                ${imageHtml}
                <h2 class="${CCNAConfig.quiz.cssClasses.text.questionTitle}">${sanitizedQuestion}</h2>
                <div id="options-container">
                    ${optionsHtml}
                </div>
            `;

            // Set up image error handling with proper event listeners
            const questionImage = questionArea.querySelector('img[data-question-image]');
            if (questionImage) {
                questionImage.addEventListener('error', function() {
                    if (!this.dataset.altAttempt) {
                        // First attempt: try switching file extension
                        this.dataset.altAttempt = '1';
                        if (this.src.endsWith('.png')) {
                            this.src = this.src.replace('.png', '.svg');
                        } else if (this.src.endsWith('.svg')) {
                            this.src = this.src.replace('.svg', '.png');
                        }
                    } else {
                        // Second attempt failed: show fallback
                        const fallback = document.createElement('div');
                        fallback.className = 'text-center p-4 bg-gray-100 rounded border-2 border-dashed border-gray-300 text-gray-600';
                        fallback.innerHTML = '<i class="fas fa-image text-2xl mb-2"></i><br>Image not available';
                        this.parentElement.replaceChild(fallback, this);
                    }
                });
            }

            updateProgressBar();

            document.querySelectorAll('.option-btn').forEach(button => {
                button.addEventListener('click', handleOptionSelect);
            });
        }

        // Resume saved quiz flow
        async function resumeQuiz() {
            const saved = loadSavedProgressRaw();
            if (!saved) return;
            loadingContainer.classList.remove(CCNAConfig.quiz.cssClasses.states.hidden);
            quizContainer.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
            resultsContainer.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
            setupContainer.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);

            const all = await loadQuizData();
            loadingContainer.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);

            // map numbers to question objects
            const lookup = new Map();
            all.forEach(q => { if (q.number != null) lookup.set(q.number, q); });
            quizData = (saved.quizQuestionNumbers || []).map(n => lookup.get(n)).filter(Boolean);
            if (!quizData || quizData.length === 0) {
                setupContainer.innerHTML = `<p class="text-center text-red-500">Saved quiz could not be restored. Questions missing.</p>`;
                setupContainer.classList.remove(CCNAConfig.quiz.cssClasses.states.hidden);
                return;
            }

            currentQuestionIndex = saved.currentQuestionIndex || 0;
            score = saved.score || 0;
            questionsAnswered = saved.questionsAnswered || 0;
            answersMap = saved.answersMap || {};

            quizContainer.classList.remove(CCNAConfig.quiz.cssClasses.states.hidden);
            // Hide score during quiz - only show at the end
            scoreEl.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
            loadQuestion();
            renderBestUI(quizData.length);
        }
        
        function handleOptionSelect(e) {
            const selectedBtn = e.currentTarget;
            const answer = selectedBtn.dataset.answer;
            const currentQuestion = quizData[currentQuestionIndex];
            const requiredAnswers = currentQuestion.answer.length;

            if (requiredAnswers > 1) {
                // Handle multi-select question
                if (selectedAnswers.includes(answer)) {
                    // Remove answer and remove highlighting
                    selectedAnswers = selectedAnswers.filter(a => a !== answer);
                    // Reset to original option button style
                    selectedBtn.className = CCNAConfig.quiz.cssClasses.buttons.option;
                } else {
                    // Add answer and add highlighting  
                    selectedAnswers.push(answer);
                    // Apply selected styling by combining base and selected classes
                    selectedBtn.className = 'w-full text-center p-4 mb-3 bg-blue-100 border-2 border-blue-500 text-blue-900 rounded-lg hover:bg-blue-200 transition duration-200';
                }
                
                // Update or create submit button
                updateMultiSelectSubmitButton(requiredAnswers);
            } else {
                // Handle single-select question
                selectedAnswers = [answer];
                checkAnswer();
            }
        }
        
        function updateMultiSelectSubmitButton(requiredAnswers) {
            let submitBtn = document.getElementById('submit-multi-btn');
            
            if (selectedAnswers.length === 0) {
                // No selections - remove submit button
                if (submitBtn) {
                    submitBtn.remove();
                }
            } else if (selectedAnswers.length < requiredAnswers) {
                // Not enough selections - show disabled button
                if (!submitBtn) {
                    submitBtn = document.createElement('button');
                    submitBtn.id = 'submit-multi-btn';
                    submitBtn.disabled = true;
                    document.getElementById('options-container').appendChild(submitBtn);
                    submitBtn.addEventListener('click', checkMultiAnswer);
                }
                submitBtn.textContent = `Select ${requiredAnswers - selectedAnswers.length} more option${requiredAnswers - selectedAnswers.length > 1 ? 's' : ''}`;
                submitBtn.className = CCNAConfig.quiz.cssClasses.buttons.submitDisabled;
                submitBtn.disabled = true;
            } else if (selectedAnswers.length === requiredAnswers) {
                // Exact number selected - show ready button
                if (!submitBtn) {
                    submitBtn = document.createElement('button');
                    submitBtn.id = 'submit-multi-btn';
                    document.getElementById('options-container').appendChild(submitBtn);
                    submitBtn.addEventListener('click', checkMultiAnswer);
                }
                submitBtn.textContent = CCNAConfig.quiz.textContent.buttons.submitAnswer;
                submitBtn.className = CCNAConfig.quiz.cssClasses.buttons.submitReady;
                submitBtn.disabled = false;
            } else {
                // Too many selected - show warning button
                if (!submitBtn) {
                    submitBtn = document.createElement('button');
                    submitBtn.id = 'submit-multi-btn';
                    document.getElementById('options-container').appendChild(submitBtn);
                    submitBtn.addEventListener('click', checkMultiAnswer);
                }
                submitBtn.textContent = `Too many selected! Choose exactly ${requiredAnswers}`;
                submitBtn.className = CCNAConfig.quiz.cssClasses.buttons.submitDisabled;
                submitBtn.disabled = true;
            }
        }
        
        function checkMultiAnswer() {
             const submitBtn = document.getElementById('submit-multi-btn');
             if(submitBtn) submitBtn.remove();
             checkAnswer();
        }

        function checkAnswer() {
            questionsAnswered++;
            const currentQuestion = quizData[currentQuestionIndex];
            const correctAnswers = [...currentQuestion.answer].sort();
            const userAnswers = [...selectedAnswers].sort();

            let isCorrect = JSON.stringify(correctAnswers) === JSON.stringify(userAnswers);
            let fractional = 0;
            if (correctAnswers.length > 1) {
                const correctSet = new Set(correctAnswers);
                let chosenCorrect = 0;
                let chosenIncorrect = 0;
                userAnswers.forEach(a => { if (correctSet.has(a)) chosenCorrect++; else chosenIncorrect++; });
                const totalNeeded = correctAnswers.length;
                // New specification: score = correct selected / total correct (ignore incorrect selections except they don't add credit)
                fractional = chosenCorrect / totalNeeded;
                if (fractional > 1) fractional = 1;
                isCorrect = fractional === 1 && chosenIncorrect === 0;
                score += fractional;
            } else {
                if (isCorrect) score += 1;
            }

            // persist user's answer in answersMap using question number
            if (currentQuestion && currentQuestion.number != null) {
                answersMap[String(currentQuestion.number)] = userAnswers;
                saveProgress();
            }
            
            let heading = isCorrect ? CCNAConfig.quiz.textContent.feedback.correct : CCNAConfig.quiz.textContent.feedback.incorrect;
            if (!isCorrect && correctAnswers.length > 1 && fractional > 0) {
                const pct = Math.round(fractional * 100);
                heading = `Partially Correct (${pct}% credit)`;
            }
            
            const sanitizedExplanation = sanitizeHtml(currentQuestion.explanation);
            
            feedbackArea.innerHTML = `
                <h3 class="font-bold text-lg mb-2">${heading}</h3>
                <p><span class="font-semibold">Explanation:</span> ${sanitizedExplanation}</p>
            `;
            feedbackArea.classList.remove(CCNAConfig.quiz.cssClasses.states.hidden);
            feedbackArea.classList.toggle(CCNAConfig.quiz.cssClasses.feedback.correct.background, isCorrect);
            feedbackArea.classList.toggle(CCNAConfig.quiz.cssClasses.feedback.correct.border, isCorrect);
            feedbackArea.classList.toggle(CCNAConfig.quiz.cssClasses.feedback.correct.text, isCorrect);
            feedbackArea.classList.toggle(CCNAConfig.quiz.cssClasses.feedback.incorrect.background, !isCorrect);
            feedbackArea.classList.toggle(CCNAConfig.quiz.cssClasses.feedback.incorrect.border, !isCorrect);
            feedbackArea.classList.toggle(CCNAConfig.quiz.cssClasses.feedback.incorrect.text, !isCorrect);

            document.querySelectorAll('.option-btn').forEach(btn => {
                const btnAnswer = btn.dataset.answer;
                if (correctAnswers.includes(btnAnswer)) {
                    btn.classList.add(CCNAConfig.quiz.cssClasses.correct);
                } else if (userAnswers.includes(btnAnswer)) {
                    btn.classList.add(CCNAConfig.quiz.cssClasses.incorrect);
                }
                btn.disabled = true;
            });
            
            nextBtn.disabled = false;
            nextBtn.focus();
        }

        function updateScore() {
                const displayScore = formatScore(score);
                // Show total possible points as the number of questions in the current quiz
                const total = (quizData && quizData.length) ? quizData.length : 0;
                scoreEl.textContent = `Score: ${displayScore} / ${total}`;
        }
        
        function updateProgressBar() {
            const total = (quizData && quizData.length) ? quizData.length : 0;
            const progress = total > 0 ? ((currentQuestionIndex) / total) * 100 : 0;
            progressBar.style.width = `${Math.max(0, Math.min(100, progress))}%`;
        }
        
        function showResults() {
             quizContainer.classList.add(CCNAConfig.quiz.cssClasses.states.hidden);
             resultsContainer.classList.remove(CCNAConfig.quiz.cssClasses.states.hidden);
            const percentage = quizData.length > 0 ? Math.round((score / quizData.length) * 100) : 0;
            const displayFinal = formatScore(score);
            finalScoreEl.innerHTML = `${displayFinal} / ${quizData.length} <span class="block text-3xl text-gray-500 mt-2">(${percentage}%)</span>`;
            // update bests and show result-level bests
            const updatedBests = updateBestForRun(quizData.length, score, quizData.length);
            const per = updatedBests.perSize[String(quizData.length)];
            const overall = updatedBests.overall;
            const resultBestEl = document.getElementById('result-best');
            if (resultBestEl) {
                resultBestEl.innerHTML = '';
                if (per) resultBestEl.innerHTML += `<div>Best for this size: ${per.score}/${per.total} (${per.pct}%) — ${new Date(per.date).toLocaleDateString()}</div>`;
                if (overall) resultBestEl.innerHTML += `<div>All-time best: ${overall.score}/${overall.total} (${overall.pct}%) — ${new Date(overall.date).toLocaleDateString()} (size: ${overall.size})</div>`;
            }
            // Persist attempt in localStorage
            try {
                const raw = localStorage.getItem(storageKey('history'));
                const history = raw ? JSON.parse(raw) : [];
                history.unshift({ date: new Date().toISOString(), score: parseFloat(formatScore(score)), total: quizData.length, pct: percentage, size: quizData.length });
                // keep last 50
                localStorage.setItem(storageKey('history'), JSON.stringify(history.slice(0,50)));
            } catch (e) {
                console.warn('Could not save quiz history', e);
            }
            renderHistory();
        }
})();
