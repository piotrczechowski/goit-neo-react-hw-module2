import "./Options.css"


export default function Options({ onGood, onNeutral, onBad, onReset, total }) {
  
  
  return (
      <>
        <button onClick={onGood}>Good</button>
        <button onClick={onNeutral}>Neutral</button>
        <button onClick={onBad}>Bad</button>
        {total >0 ? <button onClick={onReset}>Reset</button> : null}
      </>
    );
  }
  