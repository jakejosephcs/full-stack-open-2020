import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistic = (props) => {
  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value} {props.sign}</td>
    </tr>
  )
}

const Statistics = (props) => {
  if (props.all === 0) {
    return(
      <tbody>
        <tr>
          <td>
            No Feedback Given
          </td>
        </tr>
      </tbody>
    )
  }

  return (
    <tbody>
      <Statistic text="Good" value={props.good} />
      <Statistic text="Neutral" value={props.neutral} />
      <Statistic text="Bad" value={props.bad} />
      <Statistic text="All" value={props.all} />
      <Statistic text="Average" value={props.average} />
      <Statistic text="Positive" value={props.positive} sign="%" />
    </tbody>
  )
} 

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const all = good + neutral + bad
  const average = (good - bad)/all

  const positive = ((good/all)*100).toFixed(1)


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <table>
        <thead>
          <tr>
            <th>Statistics</th>
          </tr>
        </thead>
        <Statistics good={good} neutral={neutral} bad={bad} all={all} average={average} positive={positive} sign="%"/>
      </table>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)