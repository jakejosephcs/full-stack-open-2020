import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const App = () => {

  // useSelector receives a function as a paramter. The function either searches for or selects data from the 
  // redux-store. Here we need all of the anecdotes, so our selector function returns the whole state:
  // state => state is the same as:
  // (state) => {
  //   return state
  // }
  const anecdotes = useSelector(state => state)

  // The useDispatch-hook provides any React component access to the dispatch-function of the redux-store 
  // defined in index.js. This allows all components to make changes to the state of the redux-store.
  const dispatch = useDispatch()

  // Previously the code dispatched actions by calling the dispatch method of the redux-store: "store.dispatch"
  // Now it does it with the dispatch-function from the useDispatch -hook.
  // Note: { id : id } same as just doing { id }
  const vote = (id) => {
    dispatch({
      type: 'VOTE',
      data: { id }
    })
  }

  const addAnecdote = (event) => {
    event.preventDefault()
    const anecdote = event.target.anecdote.value
    event.target.anecdote.value = ''
    dispatch({
      type: 'NEW_ANECDOTE',
      data: {
        content: anecdote
      }
    })
  }


  return (
    <div>
      <h2>Anecdotes</h2>
      {anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
    </div>
  )
}

export default App