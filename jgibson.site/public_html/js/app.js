// Lightweight production wrapper: only log warnings in debug mode
(function(){
    const DEBUG = false; // set true for local debugging
    const _warn = console.warn.bind(console);
    console.warn = function(...args){ if (DEBUG) _warn(...args); };

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
                    const path = currentCategory === 'wiley' ? '/wiley_questions.json' : '/questions.json';
                    const res = await fetch(path, { cache: 'no-store' });
                    if (!res.ok) throw new Error('HTTP ' + res.status);
                    const data = await res.json();
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
                    console.warn('Could not fetch /questions.json:', e);
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


    // --- SCRIPT LOGIC (No changes needed below to connect a DB) ---
        const quizContainer = document.getElementById('quiz-container');
        const resultsContainer = document.getElementById('results-container');
    const setupContainer = document.getElementById('setup-container');
        const loadingContainer = document.getElementById('loading-container');
        const questionArea = document.getElementById('question-area');
        const feedbackArea = document.getElementById('feedback-area');
        const scoreEl = document.getElementById('score');
        const finalScoreEl = document.getElementById('final-score');
        const progressBar = document.getElementById('progress-bar');
        const nextBtn = document.getElementById('next-btn');
    const restartBtn = document.getElementById('restart-btn');
    const homeBtn = document.getElementById('home-btn');

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
        const per = bests.perSize[String(currentSize)];
        const overall = bests.overall;
        el.innerHTML = '';
        if (per) el.innerHTML += `<div>Best for this size: ${per.score}/${per.total} (${per.pct}%) — ${new Date(per.date).toLocaleDateString()}</div>`;
        if (overall) el.innerHTML += `<div>All-time best: ${overall.score}/${overall.total} (${overall.pct}%) — ${new Date(overall.date).toLocaleDateString()} (size: ${overall.size})</div>`;
        if (!per && !overall) el.innerHTML = '<div class="text-gray-500">No high scores yet. Take a quiz!</div>';
    }

        async function startQuiz() {
            loadingContainer.classList.remove('hidden');
            quizContainer.classList.add('hidden');
            resultsContainer.classList.add('hidden');
            setupContainer.classList.add('hidden');
            
            const all = await loadQuizData();
            loadingContainer.classList.add('hidden');

            if (!all || all.length === 0) {
                setupContainer.innerHTML = `<p class="text-center text-red-500">Failed to load quiz questions. Please try again later.</p>`;
                setupContainer.classList.remove('hidden');
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
            quizContainer.classList.remove('hidden');
            updateScore();
            loadQuestion();
            // show bests for this selected size on setup -> quiz start
            renderBestUI(quizData.length);
         }

        function loadQuestion() {
            selectedAnswers = [];
            feedbackArea.classList.add('hidden');
            nextBtn.disabled = true;

            const currentQuestion = quizData[currentQuestionIndex];

            // Render image if present
            let imageHtml = '';
            if (currentQuestion.image) {
                const imgPath = currentQuestion.image;
                const onErr = "if(this.dataset.altAttempt==='1'){this.onerror=null;this.replaceWith(document.createElement('div'));}else{this.dataset.altAttempt='1';if(this.src.endsWith('.png')){this.src=this.src.replace('.png','.svg');}else if(this.src.endsWith('.svg')){this.src=this.src.replace('.svg','.png');} }";
                imageHtml = `<div class="mb-4"><img src="${imgPath}" alt="Question Image" class="max-w-full rounded shadow" onerror="${onErr}"></div>`;
            }

            const optionsHtml = currentQuestion.options.map((option, index) => {
                const optionLetter = String.fromCharCode(65 + index);
                return `
                    <button class="option-btn w-full text-center p-4 mb-3 bg-white border-2 border-gray-300 rounded-lg hover:bg-gray-100 hover:border-blue-500 transition duration-200" data-answer="${optionLetter}">
                        <span class="font-bold mr-3">${optionLetter}.</span> ${option}
                    </button>
                `;
            }).join('');

            questionArea.innerHTML = `
                <p class="text-lg text-gray-600 mb-2">Question ${currentQuestionIndex + 1} of ${quizData.length}${currentQuestion.number ? ` (ID: ${currentQuestion.number})` : ''}</p>
                ${imageHtml}
                <h2 class="text-xl font-semibold text-gray-800 mb-5">${currentQuestion.question}</h2>
                <div id="options-container">
                    ${optionsHtml}
                </div>
            `;

            updateProgressBar();

            document.querySelectorAll('.option-btn').forEach(button => {
                button.addEventListener('click', handleOptionSelect);
            });
        }

        // Resume saved quiz flow
        async function resumeQuiz() {
            const saved = loadSavedProgressRaw();
            if (!saved) return;
            loadingContainer.classList.remove('hidden');
            quizContainer.classList.add('hidden');
            resultsContainer.classList.add('hidden');
            setupContainer.classList.add('hidden');

            const all = await loadQuizData();
            loadingContainer.classList.add('hidden');

            // map numbers to question objects
            const lookup = new Map();
            all.forEach(q => { if (q.number != null) lookup.set(q.number, q); });
            quizData = (saved.quizQuestionNumbers || []).map(n => lookup.get(n)).filter(Boolean);
            if (!quizData || quizData.length === 0) {
                setupContainer.innerHTML = `<p class="text-center text-red-500">Saved quiz could not be restored. Questions missing.</p>`;
                setupContainer.classList.remove('hidden');
                return;
            }

            currentQuestionIndex = saved.currentQuestionIndex || 0;
            score = saved.score || 0;
            questionsAnswered = saved.questionsAnswered || 0;
            answersMap = saved.answersMap || {};

            quizContainer.classList.remove('hidden');
            updateScore();
            loadQuestion();
            renderBestUI(quizData.length);
        }
        
        function handleOptionSelect(e) {
            const selectedBtn = e.currentTarget;
            const answer = selectedBtn.dataset.answer;
            const currentQuestion = quizData[currentQuestionIndex];
            const requiredAnswers = currentQuestion.answer.length;

            if (requiredAnswers > 1) {
                selectedBtn.classList.toggle('bg-blue-100');
                selectedBtn.classList.toggle('border-blue-500');
                if (selectedAnswers.includes(answer)) {
                    selectedAnswers = selectedAnswers.filter(a => a !== answer);
                } else {
                    selectedAnswers.push(answer);
                }
                
                if (document.getElementById('submit-multi-btn')) {
                    if (selectedAnswers.length === 0) {
                        document.getElementById('submit-multi-btn').remove();
                    }
                } else {
                    if (selectedAnswers.length > 0) {
                        const submitBtn = document.createElement('button');
                        submitBtn.id = 'submit-multi-btn';
                        submitBtn.textContent = 'Submit Answer';
                        submitBtn.className = 'bg-green-500 text-white font-bold py-2 px-4 rounded-lg mt-4 shadow hover:bg-green-600 transition';
                        document.getElementById('options-container').appendChild(submitBtn);
                        submitBtn.addEventListener('click', checkMultiAnswer);
                    }
                }
            } else {
                selectedAnswers = [answer];
                checkAnswer();
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
            
            let heading = isCorrect ? 'Correct!' : 'Incorrect.';
            if (!isCorrect && correctAnswers.length > 1 && fractional > 0) {
                const pct = Math.round(fractional * 100);
                heading = `Partially Correct (${pct}% credit)`;
            }
            feedbackArea.innerHTML = `
                <h3 class="font-bold text-lg mb-2">${heading}</h3>
                <p><span class="font-semibold">Explanation:</span> ${currentQuestion.explanation}</p>
            `;
            feedbackArea.classList.remove('hidden');
            feedbackArea.classList.toggle('bg-green-100', isCorrect);
            feedbackArea.classList.toggle('border-green-300', isCorrect);
            feedbackArea.classList.toggle('text-green-800', isCorrect);
            feedbackArea.classList.toggle('bg-red-100', !isCorrect);
            feedbackArea.classList.toggle('border-red-300', !isCorrect);
            feedbackArea.classList.toggle('text-red-800', !isCorrect);

            document.querySelectorAll('.option-btn').forEach(btn => {
                const btnAnswer = btn.dataset.answer;
                if (correctAnswers.includes(btnAnswer)) {
                    btn.classList.add('correct');
                } else if (userAnswers.includes(btnAnswer)) {
                    btn.classList.add('incorrect');
                }
                btn.disabled = true;
            });
            
            updateScore();
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
             quizContainer.classList.add('hidden');
             resultsContainer.classList.remove('hidden');
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
        
        restartBtn.addEventListener('click', startQuiz);
        if (homeBtn) {
            homeBtn.addEventListener('click', () => {
                resultsContainer.classList.add('hidden');
                quizContainer.classList.add('hidden');
                setupContainer.classList.add('hidden');
                document.getElementById('enter-container').classList.remove('hidden');
            });
        }
        // Setup screen wiring
        document.querySelectorAll('.size-btn').forEach(b => b.addEventListener('click', (e) => {
            document.querySelectorAll('.size-btn').forEach(x => x.classList.remove('bg-blue-50','border-blue-400'));
            e.currentTarget.classList.add('bg-blue-50','border-blue-400');
            const ds = e.currentTarget.dataset.size;
            if (ds === 'all') {
                targetSize = Infinity; // will be clamped to available questions
            } else {
                targetSize = parseInt(ds, 10);
            }
            // show best for the selected size (we pass Infinity or number but renderBestUI expects length)
            renderBestUI(ds === 'all' ? 'all' : targetSize);
        }));
        document.getElementById('begin-btn').addEventListener('click', startQuiz);
    document.getElementById('resume-btn').addEventListener('click', resumeQuiz);
    // TestGroup buttons removed — merged into main question bank. No handlers required.

    // Entry buttons: choose category and show setup
    document.getElementById('cisco-entry-btn').addEventListener('click', () => {
        currentCategory = 'cisco';
        // show setup, hide entry
        document.getElementById('enter-container').classList.add('hidden');
        document.getElementById('setup-container').classList.remove('hidden');
        // show resume if saved progress exists for this category
        if (hasSavedProgress()) document.getElementById('resume-btn').classList.remove('hidden'); else document.getElementById('resume-btn').classList.add('hidden');
        renderBestUI(targetSize);
        renderHistory();
    });

    document.getElementById('wiley-entry-btn').addEventListener('click', () => {
        currentCategory = 'wiley';
        document.getElementById('enter-container').classList.add('hidden');
        document.getElementById('setup-container').classList.remove('hidden');
        // hide resume if no saved for Wiley
        if (hasSavedProgress()) document.getElementById('resume-btn').classList.remove('hidden'); else document.getElementById('resume-btn').classList.add('hidden');
        renderBestUI(targetSize);
        renderHistory();
    });

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
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && !nextBtn.disabled) {
                nextBtn.click();
            }
        });

    // Initial view: show entry screen
    loadingContainer.classList.add('hidden');
    // show entry container already visible by default
    // don't render history or bests until a category is chosen
})();
