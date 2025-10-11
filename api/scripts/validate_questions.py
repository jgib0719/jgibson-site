#!/usr/bin/env python3
"""
CCNA Quiz Question Validation Framework
Validates question data for consistency, accuracy, and format compliance.
"""

import json
import sys
import re
from typing import List, Dict, Any, Tuple

class QuestionValidator:
    def __init__(self):
        self.errors = []
        self.warnings = []
        
    def validate_file(self, filepath: str) -> bool:
        """Validate a question JSON file."""
        try:
            with open(filepath, 'r', encoding='utf-8') as f:
                questions = json.load(f)
        except json.JSONDecodeError as e:
            self.errors.append(f"JSON parsing error in {filepath}: {e}")
            return False
        except FileNotFoundError:
            self.errors.append(f"File not found: {filepath}")
            return False
            
        if not isinstance(questions, list):
            self.errors.append(f"Root element must be an array in {filepath}")
            return False
            
        success = True
        for i, question in enumerate(questions):
            if not self.validate_question(question, filepath, i):
                success = False
                
        return success
        
    def validate_question(self, question: Dict[str, Any], filepath: str, index: int) -> bool:
        """Validate a single question object."""
        success = True
        question_id = f"{filepath}[{index}]"
        
        # Required fields validation
        required_fields = ['number', 'question', 'options', 'answer', 'explanation']
        for field in required_fields:
            if field not in question:
                self.errors.append(f"{question_id}: Missing required field '{field}'")
                success = False
                
        if not success:
            return False
            
        # Specific field validations
        success &= self.validate_question_number(question, question_id)
        success &= self.validate_question_text(question, question_id)
        success &= self.validate_options(question, question_id)
        success &= self.validate_answer(question, question_id)
        success &= self.validate_explanation(question, question_id)
        success &= self.validate_image(question, question_id)
        
        # Cross-field validations
        success &= self.validate_answer_consistency(question, question_id)
        
        return success
        
    def validate_question_number(self, question: Dict[str, Any], question_id: str) -> bool:
        """Validate question number field."""
        number = question.get('number')
        if not isinstance(number, int) or number <= 0:
            self.errors.append(f"{question_id}: Question number must be positive integer")
            return False
        return True
        
    def validate_question_text(self, question: Dict[str, Any], question_id: str) -> bool:
        """Validate question text field."""
        text = question.get('question')
        if not isinstance(text, str) or len(text.strip()) < 10:
            self.errors.append(f"{question_id}: Question text must be string with at least 10 characters")
            return False
        return True
        
    def validate_options(self, question: Dict[str, Any], question_id: str) -> bool:
        """Validate options array."""
        options = question.get('options')
        if not isinstance(options, list):
            self.errors.append(f"{question_id}: Options must be an array")
            return False
            
        if len(options) < 2:
            self.errors.append(f"{question_id}: Must have at least 2 options")
            return False
            
        if len(options) > 6:
            self.warnings.append(f"{question_id}: More than 6 options may be confusing")
            
        for i, option in enumerate(options):
            if not isinstance(option, str) or len(option.strip()) < 2:
                self.errors.append(f"{question_id}: Option {i+1} must be non-empty string")
                return False
                
        return True
        
    def validate_answer(self, question: Dict[str, Any], question_id: str) -> bool:
        """Validate answer array."""
        answer = question.get('answer')
        if not isinstance(answer, list):
            self.errors.append(f"{question_id}: Answer must be an array")
            return False
            
        if len(answer) == 0:
            self.errors.append(f"{question_id}: Must have at least one correct answer")
            return False
            
        options_count = len(question.get('options', []))
        valid_letters = [chr(65 + i) for i in range(options_count)]  # A, B, C, etc.
        
        for ans in answer:
            if not isinstance(ans, str) or ans not in valid_letters:
                self.errors.append(f"{question_id}: Answer '{ans}' is not valid (must be {valid_letters})")
                return False
                
        # Check for duplicates
        if len(answer) != len(set(answer)):
            self.errors.append(f"{question_id}: Duplicate answers found")
            return False
            
        return True
        
    def validate_explanation(self, question: Dict[str, Any], question_id: str) -> bool:
        """Validate explanation field."""
        explanation = question.get('explanation')
        if explanation is not None:
            if not isinstance(explanation, str) or len(explanation.strip()) < 10:
                self.warnings.append(f"{question_id}: Explanation should be at least 10 characters")
                return False
        return True
        
    def validate_image(self, question: Dict[str, Any], question_id: str) -> bool:
        """Validate image field."""
        image = question.get('image')
        if image is not None:
            if not isinstance(image, str):
                self.errors.append(f"{question_id}: Image field must be string or null")
                return False
            if image and not re.match(r'^[^/]+\.(png|jpg|jpeg|gif|svg)$', image.lower()):
                self.warnings.append(f"{question_id}: Image filename should have valid extension")
        return True
        
    def validate_answer_consistency(self, question: Dict[str, Any], question_id: str) -> bool:
        """Validate that answers are logically consistent."""
        success = True
        
        # Check for conflicting keywords in explanation vs answers
        explanation = question.get('explanation', '').lower()
        answer_letters = question.get('answer', [])
        options = question.get('options', [])
        
        # Flag potential issues in explanations
        warning_phrases = [
            'incorrect', 'wrong', 'error', 'mistake', 'should be', 'actually',
            'based on the provided answer key', 'seems to have an error'
        ]
        
        for phrase in warning_phrases:
            if phrase in explanation:
                self.warnings.append(f"{question_id}: Explanation contains '{phrase}' - review for accuracy")
                
        # Check for suspiciously long explanations (might indicate uncertainty)
        if len(explanation) > 500:
            self.warnings.append(f"{question_id}: Very long explanation - consider simplifying")
            
        return success
        
    def print_results(self):
        """Print validation results."""
        if self.errors:
            print("ERRORS:")
            for error in self.errors:
                print(f"  ❌ {error}")
            print()
            
        if self.warnings:
            print("WARNINGS:")
            for warning in self.warnings:
                print(f"  ⚠️  {warning}")
            print()
            
        if not self.errors and not self.warnings:
            print("✅ All validations passed!")
        elif not self.errors:
            print(f"✅ No errors found ({len(self.warnings)} warnings)")
        else:
            print(f"❌ {len(self.errors)} errors found")
            
        return len(self.errors) == 0

def main():
    """Main validation function."""
    if len(sys.argv) < 2:
        print("Usage: python3 validate_questions.py <question_file1> [question_file2] ...")
        sys.exit(1)
        
    validator = QuestionValidator()
    overall_success = True
    
    for filepath in sys.argv[1:]:
        print(f"Validating {filepath}...")
        success = validator.validate_file(filepath)
        overall_success &= success
        
    print("\n" + "="*60)
    success = validator.print_results()
    
    sys.exit(0 if success else 1)

if __name__ == "__main__":
    main()