import QUESTIONS from '../questions';
import quizIsCompleteLogo from '../assets/quiz-complete.png';
export default function Summary({ userAnswers }) {
  const skippedAnswers = userAnswers.filter((answer) => answer === null);
  const correctAnswers = userAnswers.filter((answer, index) => answer === QUESTIONS[index].answers[0]);
  const inCorrectAnswers = userAnswers.filter((answer, index) => answer !== QUESTIONS[index].answers[0] && answer !== null);
  function handleMath(number) {
    return Math.round((number * 100) / QUESTIONS.length);
  }
  return (
    <div id='summary'>
      <img src={quizIsCompleteLogo} alt='cup logo' />
      <h2>Quiz Completed</h2>
      <div id='summary-stats'>
        <p>
          <span className='number'>{handleMath(skippedAnswers.length)}%</span>
          <span className='text'>skipped</span>
        </p>
        <p>
          <span className='number'>{handleMath(correctAnswers.length)}%</span>
          <span className='text'>answered Correctly</span>
        </p>
        <p>
          <span className='number'>{handleMath(inCorrectAnswers.length)}%</span>
          <span className='text'>answered inCorrectly</span>
        </p>
      </div>
      <ol>
        {userAnswers.map((answer, index) => {
          let cssStyle = '';
          if (answer === QUESTIONS[index].answers[0]) cssStyle = 'user-answer correct';
          else if (answer === null) cssStyle = 'user-answer skipped';
          else cssStyle = 'user-answer wrong';
          return (
            <li key={answer + 1}>
              <h3>{index + 1}</h3>
              <p className='question'>{QUESTIONS[index].text}</p>
              <p className={cssStyle}>{answer ? answer : 'skipped'}</p>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
