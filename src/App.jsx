import { useState } from 'react'
import './App.css'
import { EndScreen } from './components/EndScreen';
import { MainMenu } from './components/MainMenu';
import { Quiz } from './components/Quiz';

function App() {
  const [gameState, setGameState] = useState("menu");

  return (
    <div className="App">
      <h1>QuizApp</h1>
      {gameState === "menu" && <MainMenu />}
      {gameState === "quiz" && <Quiz />}
      {gameState === "endScreen" && <EndScreen />}
    </div>
  )
}

export default App
