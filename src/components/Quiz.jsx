import { useState, useContext, useEffect } from "react";
import { Questions } from "../helpers/QuestionBank";
import {QuizContext} from '../helpers/Contexts'

export const Quiz = () => {
  const {score, setScore} = useContext(QuizContext)

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  
  

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>{Questions[currentQuestion].optionA}</button>
        <button onClick={() => setOptionChosen("B")}>{Questions[currentQuestion].optionB}</button>
        <button onClick={() => setOptionChosen("C")}>{Questions[currentQuestion].optionC}</button>
        <button onClick={() => setOptionChosen("D")}>{Questions[currentQuestion].optionD}</button>
      </div>

      <button className="nextQuestion-btn">Next Question</button>
    </div>
  );
};
