# Exercises 1.12.-1.14 [LINK to exercises](https://fullstackopen.com/en/part1/a_more_complex_state_debugging_react_apps#exercises-1-6-1-14)

## 1.12*: anecdotes step1
The world of software engineering is filled with anecdotes that distill timeless truths from our field into short one-liners.

Expand the following application by adding a button that can be clicked to display a random anecdote from the field of software engineering:

```javascript
import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const App = (props) => {
  const [selected, setSelected] = useState(0)

  return (
    <div>
      {props.anecdotes[selected]}
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)
```

Your finished application could look something like this:

> ![Give feedback UI](https://fullstackopen.com/static/8577fa00fc4d946e2322de9b2707c89c/14be6/18a.png)

## 1.13*: anecdotes step2
Expand your application so that you can vote for the displayed anecdote.

> ![Give feedback UI](https://fullstackopen.com/static/06f95cb43a18bd6429174200a8d17cff/14be6/19a.png)

## 1.14*: anecdotes step3
Now implement the final version of the application that displays the anecdote with the largest number of votes:

> ![Give feedback UI](https://fullstackopen.com/static/3e8638efbbbbcabac7bb79466ab3a5f6/14be6/20a.png)

If multiple anecdotes are tied for first place it is sufficient to just show one of them.