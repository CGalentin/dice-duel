import { ACTIONS } from "../game/actions";

export default function Controla ({ state, dispatch}) {
    return (
        <div className="controls">
            {state.phase === "idle" && (
                <button className="primary" onClick={() => dispatch({type: ACTIONS.START})}>
                    Start
                </button>
            )}

            {state.phase === "playing" && (
                <>
                    <button onClick={() => dispatch({ type: ACTIONS.ROLL})}>Roll</button>
                    <button onClick={() => dispatch({ type: ACTIONS.HOLD})}>Hold</button>
                    <button
                        className="danger"
                        onClick={() => dispatch({ type: ACTIONS.LOSE_LIFE})}
                        >
                            Lose Life (demo)
                        </button>
                </>
            )}

            {state.phase === "gameover" && (
                <button
                className="primary"
                onClick={() => dispatch({ type: ACTIONS.START})}
                >
                    Play Again
                </button>
            )}
        </div>
    )
}