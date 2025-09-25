import Die from "./Die";
import useInterval from "../hooks";
import { ACTIONS } from "../game/actions";

export default function GameBoard({ state, dispatch }) {
  useInterval(() => {
    if (state.phase === "playing") {
      dispatch({ type: ACTIONS.TICK });
    }
  }, 1000);
 
  return (
    <div className="board">
      <Die
        value={state.roll}
        disabled={state.phase !== "playing"}
        onRoll={() => dispatch({ type: ACTIONS.ROLL })}
      />
      <p className="message">{state.message}</p>
      <div className="pot">
        Current Pot: <strong>{state.pot}</strong>
      </div>
    </div>
  );
}
