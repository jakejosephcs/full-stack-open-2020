import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteForAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

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
    dispatch(voteForAnecdote(id))
  }

  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList />
      <AnecdoteForm />
    </div>
  )
}

export default App