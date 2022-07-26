import { useState, useContext } from "react";
import "./App.css";
import { EndScreen } from "./components/EndScreen";
import { MainMenu } from "./components/MainMenu";
import { Quiz } from "./components/Quiz";

import { QuizContext } from "./helpers/Contexts";

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>QuizApp</h1>
      <QuizContext.Provider value={{gameState, setGameState}}>
        {gameState === "menu" && <MainMenu />}
        {gameState === "quiz" && <Quiz />}
        {gameState === "endScreen" && <EndScreen />}
      </QuizContext.Provider>
    </div>
  );
}

export default App;
