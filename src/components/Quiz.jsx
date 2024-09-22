import { useState, useCallback } from 'react';
import QUESTIONS from '../questions';
import quizIsCompleteLogo from '../assets/quiz-complete.png';
import Questions from './Questions';

export default function Quiz() {
  const [answerState, setAnswerState] = useState('');
  const [userAnswers, setUsersAnswers] = useState([]);
  const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1;
  const quizIsComplete = QUESTIONS.length === activeQuestionIndex;

  const handleSelectAnswer = useCallback(
    function handleSelectAnswer(selectedAnswer) {
      setAnswerState('answered');
      setUsersAnswers((prevState) => {
        return [...prevState, selectedAnswer];
      });
      setTimeout(() => {
        if (selectedAnswer === QUESTIONS[activeQuestionIndex].answers[0]) setAnswerState('correct');
        else setAnswerState('wrong');
        setTimeout(() => {
          setAnswerState('');
        }, 2000);
      }, 1000);
    },
    [activeQuestionIndex]
  );
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
      <Questions key={activeQuestionIndex} />
    </div>
  );
}
