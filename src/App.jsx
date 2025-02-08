import { useState } from 'react'
import Descriptions from './Descriptions'
import Options from './Options'
import './App.css'
import Feedback from './Feedback'

function App() {

const [good, setGood] = useState(0);
const [neutral, setNeutral] = useState(0);
const [bad, setBad] = useState(0);
const [total, setTotal] = useState(0);

const handleGood = () => {setGood(good + 1)};
const handleNeutral = () => {setNeutral(neutral + 1)};
const handleBad = () => {setBad(bad + 1)};
const handleReset = () => {setGood(0); setNeutral(0); setBad(0)};
const handleTotal = () => {setTotal(good + neutral + bad)};
  
return (
    <>
      <Descriptions />
      <Options 
      onGood={handleGood}
      onNeutral={handleNeutral}
      onBad={handleBad}
      onReset={handleReset}
      />
      <Feedback 
      good={good}
      neutral={neutral}
      bad={bad}
      total={total}/>      
    </>
  )
}

export default App
