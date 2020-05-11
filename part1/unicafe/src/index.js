import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({onClick, text}) => <button onClick={onClick}>{text}</button>

const Statistics = ({text, value, sign}) =>  <p>{text}: {value} {sign}</p>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const total = good + neutral + bad
  const average = (good - bad)/total

  const positiveFeedback = (good/total)*100


  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text="good" onClick={() => setGood(good + 1)} />
      <Button text="neutral" onClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" onClick={() => setBad(bad + 1)} />
      <h1>Statistics</h1>
      <Statistics text="good" value={good}/>
      <Statistics text="neutral" value={neutral}/>
      <Statistics text="bad" value={bad}/>
      <Statistics text="all" value={total}/>
      <Statistics text="average" value={average}/>
      <Statistics text="positive" value={positiveFeedback} sign="%"/>
    </div>
  )
}

ReactDOM.render(<App />,
  document.getElementById('root')
)