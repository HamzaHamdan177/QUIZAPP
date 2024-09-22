import { useRef } from 'react';

export default function Answers({ answers, onSelectAnswer, selctedAnswer, answerState }) {
  const shuffledAnswers = useRef();
  if (!shuffledAnswers.current) {
    shuffledAnswers.current = [...answers];
    shuffledAnswers.current.sort(() => Math.random() - 0.5);
  }
  return (
    <ul id='answers'>
      {shuffledAnswers.current.map((answer) => {
        const isSelected = selctedAnswer === answer;
        let cssClass = '';
        if (answerState === 'answered' && isSelected) {
          cssClass = 'selected';
        }
        if ((answerState === 'correct' || answerState === 'wrong') && isSelected) {
          cssClass = answerState;
        }
        return (
          <li key={answer} className='answer'>
            <button onClick={() => onSelectAnswer(answer)} className={cssClass}>
              {answer}
            </button>
          </li>
        );
      })}
    </ul>
  );
}
