import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState({
    text: 0, votes: 0
  })

  const newAnecdote = () => {
    const newText = {
      text: Math.floor(Math.random() * Math.floor(anecdotes.length)),
      votes: selected.votes
    }
    setSelected(newText)
  }

  const voteForAnecdote = () => {
    const newVotes = {
      votes: selected.votes + 1,
      text: selected.text
    }
    incrementVote(newVotes.text)
    setSelected(newVotes)
  }

  const incrementVote = (text) => voteArray[anecdotes.indexOf(anecdotes[text])] += 1

  const displayVote = (text) =>  voteArray[anecdotes.indexOf(anecdotes[selected.text])]

  const maxVotes = () => Math.max(...voteArray);

  const anecdoteWithMostVotes = () => anecdotes[voteArray.indexOf(maxVotes())]
  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <DisplayAnecdoteOfTheDay text={anecdotes[selected.text]} votes={displayVote()} />
        <div>
          <Button text="next anecdote" onclick={newAnecdote} />
          <Button text="vote" onclick={voteForAnecdote} />
        </div>
      </div>
      <div>
        <h1>Anecdote with the most votes</h1>
        <DisplayAnecdoteWithMostVotes text={anecdoteWithMostVotes()} votes={maxVotes()} />
      </div>
    </div>
  )
}

const DisplayAnecdoteOfTheDay = (props) => {
  return (
    <>
      <div>
        {props.text} 
      </div>
      <div>
        has {props.votes} votes
      </div>
    </>
  )
}

const DisplayAnecdoteWithMostVotes = (props) => {
  if (props.votes === 0) {
    return (
      <div>
        None yet
      </div>
    )
  }

  return(
    <>
      <div>
        {props.text} 
      </div>
      <div>
        has {props.votes} votes
      </div>
    </>
  )
}

const Button = (props) => <button onClick={props.onclick}>{props.text}</button>

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

const voteArray = new Array(anecdotes.length+1).join('0').split('').map(parseFloat)

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)