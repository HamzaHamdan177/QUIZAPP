import img from '../assets/quiz-logo.png';
export default function Header() {
  return (
    <header>
      <img src={img} alt='quiz logo' />
      <h1>ReactQuiz</h1>
    </header>
  );
}
