import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import quizIsCompleteLogo from '../assets/quiz-complete.png';
import Questions from './Questions';

export default function Quiz() {
  const [userAnswers, setUsersAnswers] = useState([]);
  const activeQuestionIndex = userAnswers.length;
  const quizIsComplete = QUESTIONS.length === activeQuestionIndex;

  const handleSelectAnswer = useCallback(function handleSelectAnswer(selectedAnswer) {
    setUsersAnswers((prevState) => {
      return [...prevState, selectedAnswer];
    });
  }, []);
  const handleSkipAnswer = useCallback(() => handleSelectAnswer(null));

  if (quizIsComplete) {
    return (
      <div id='summary'>
        <img src={quizIsCompleteLogo} />
        <h2>QUIZ COMPLETED!</h2>
      </div>
    );
  }

  return (
    <div id='quiz'>
      <Questions
        key={activeQuestionIndex}
        index={activeQuestionIndex}
        onSelectAnswer={handleSelectAnswer}
        onTimeOut={() => handleSelectAnswer(null)}
      />
    </div>
  );
}
