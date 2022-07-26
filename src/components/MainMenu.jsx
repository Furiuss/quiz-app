import { useContext } from "react";
import { QuizContext } from "../helpers/Contexts";

export const MainMenu = () => {
  const { gameState, setGameState } = useContext(QuizContext);

  return (
    <div className="Menu">
      <form  onSubmit={() => setGameState("quiz")}>
        <label>Enter your name</label>
        <input type="text" placeholder="Ex. John Wick"/>
        <button type="submit">Start Quiz</button>
      </form>
    </div>
  );
};
