import {useContext} from 'react'
import {QuizContext} from '../helpers/Contexts'

export const MainMenu = () => {
  const {gameState, setGameState} = useContext(QuizContext)

  return (
    <div className="Menu">
      <button onClick={() => setGameState("quiz")}>Start Quiz</button>
    </div>
  )
}
