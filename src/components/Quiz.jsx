import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import Questions from './Questions';
import Summary from './Summary';

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
    return <Summary />;
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
