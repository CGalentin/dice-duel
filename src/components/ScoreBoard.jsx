export default function ScoreBoard ({ state }) {
    return (
        <div className="scoreboard">
            <div className="card">
                <div>Score</div>
                <strong>{state.score}</strong>
            </div>
            <div className="card">
                <div>Pot</div>
                <strong>{state.pot}</strong>
            </div>
            <div className="card">
                <div>Round</div>
                <strong>{state.round}</strong>
            </div>
            <div className="card">
                <div>Lives</div>
                <strong>{state.lives}</strong>
            </div>
            <div className="card">
                <div>Time</div>
                <strong>{state.timeLeft}</strong>
            </div>
            <div className="card">
                <div>Target</div>
                <strong>{state.target}</strong>
            </div>
        </div> 
    );
}