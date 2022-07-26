import {useContext} from 'react'
import {QuizContext} from '../helpers/Contexts'

export const EndScreen = () => {
  const {score, setScore, setGameState, Questions} = useContext(QuizContext)

  const resetGame = (e) => {
    e.preventDefault()

    setScore(0)
    setGameState("menu")
  }

  return (
    <div className="End">
      <h1>Quiz finished</h1>
      <h1>{score}/{Questions.length}</h1>
      <button onClick={resetGame}>Restart Quiz</button>
    </div>
  )
}