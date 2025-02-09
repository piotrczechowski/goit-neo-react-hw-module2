export default function Feedback({ good, neutral, bad, total }) {
    if (total === 0) {
        return <p>No feedback given</p>
    }
    
    return (
      <>
      
        <p>Good: {good}</p>
        <p>Neutral: {neutral}</p>
        <p>Bad: {bad}</p>
        <p>Total: {good + neutral + bad}</p>
      </>
    );
  }
  