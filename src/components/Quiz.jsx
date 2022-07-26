import { useState, useContext } from "react";
import { QuizContext } from "../helpers/Contexts";

export const Quiz = () => {
  const { score, setScore, setGameState, Questions } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");
  const [errorMessage, setErrorMessage] = useState(false)

  const nextQuestion = () => {
    if (!optionChosen) {
      setErrorMessage(true);
      return;
    };

    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
    setOptionChosen("")
    setErrorMessage(false)
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer == optionChosen) {
      setScore(score + 1);
    }

    setGameState("endScreen");
  };

  const Alert = () => {
    if (errorMessage) {
      return (
        <span style={{ color: "#e74c3c", fontWeight: "bold" }}>
          Choose some option!
        </span>
      );
    }
    return ""
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <br />
      <Alert />
      <br />
      <div className="options">
        <button onClick={() => setOptionChosen("A")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("B")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("C")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("D")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion == Questions.length - 1 ? (
        <button onClick={finishQuiz} className="finish-btn">
          Finish Quiz
        </button>
      ) : (
        <button onClick={nextQuestion} className="nextQuestion-btn">
          Next Question
        </button>
      )}
    </div>
  );
};
