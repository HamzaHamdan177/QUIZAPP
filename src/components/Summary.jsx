import quizIsCompleteLogo from '../assets/quiz-complete.png';
export default function Summary() {
  return (
    <div id='summary'>
      <img src={quizIsCompleteLogo} />
      <h2>QUIZ COMPLETED!</h2>
    </div>
  );
}
