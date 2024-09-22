export default function Questions() {
  return (
    <div id='question'>
      <Timer onTimeOut={() => handleSelectAnswer(null)} time={15000} />
      <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
      <Answers
        onSelectAnswer={handleSelectAnswer}
        answers={QUESTIONS[activeQuestionIndex].answers}
        selctedAnswer={userAnswers[userAnswers.length - 1]}
        answerState={answerState}
      />
    </div>
  );
}
