import { useState, useContext } from "react";
import "./App.css";
import { EndScreen } from "./components/EndScreen";
import { MainMenu } from "./components/MainMenu";
import { Quiz } from "./components/Quiz";

import { Questions } from "./helpers/QuestionBank";
import { QuizContext } from "./helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");
  const [score, setScore] = useState(0);

  return (
    <div className="App">
      <h1>QuizApp</h1>
      <QuizContext.Provider value={{gameState, setGameState, score, setScore, Questions}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
