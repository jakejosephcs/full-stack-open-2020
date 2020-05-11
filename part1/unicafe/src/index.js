import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = (props) => {
  if (props.all === 0) {
    return(
      <p>No Feedback Given</p>
    )
  }

  return (
    <>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>All: {props.all}</p>
      <p>Average: {props.average}</p>
      <p>Positive: {props.positive} {props.sign}</p>
    </>
  )
} 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad)/all

  const positive = (good/all)*100


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <h1>Statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} sign="%"/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)