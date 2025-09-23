import { useReducer } from "react";
import GameBoard from "./components/GameBoard";
import ScoreBoard from "./components/ScoreBoard";
import Controls from "./components/Controls";
import { gameReducer } from "./game/gameReducer";
import { initialState } from "./game/initialState";
import { ACTIONS } from "./game/actions";

export default function App() {
  const [state, dispatch] = useReducer(gameReducer, initialState)

  console.log("[App render", state);// keeps the console active so we can see if it renders

  return (
    <div className="app">
      <h1>Dice Duel - useReducer</h1>
      <p className="subtitle">Beat the target before time runs out. A roll of 1 costs a life!</p>

      <ScoreBoard state={state} />
      <GameBoard state={state} dispatch={dispatch} />
      <Controls state={state} dispatch={dispatch} />

      <div className="footer">
        <button className="secondary" onClick={() => dispatch({type: ACTIONS.RESET})}>Reset Game</button>
      </div>
    </div>
  )
}

