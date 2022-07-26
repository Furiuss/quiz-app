import { useState } from "react";
import { Questions } from "../helpers/QuestionBank";

export const Quiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [correctAnswer, setCorrectAnswer] = useState(currentQuestion.answer);

  const handleAnswer = () => {
    
  }

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button onClick={handleAnswer}>{Questions[currentQuestion].optionA}</button>
        <button onClick={handleAnswer}>{Questions[currentQuestion].optionB}</button>
        <button onClick={handleAnswer}>{Questions[currentQuestion].optionC}</button>
        <button onClick={handleAnswer}>{Questions[currentQuestion].optionD}</button>
      </div>

      <button className="nextQuestion-btn">Next Question</button>
    </div>
  );
};
