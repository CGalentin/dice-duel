export default function Die ({value, onRoll, disabled}) {
    return ( 
    <button classNamwe="die" onClick={onRoll} disabled={disabled}>
        <span className="pips">{value ?? "-"}</span>
        <span className="label">{disabled ? "(start first)" : "roll"}</span>
    </button>
    );
}