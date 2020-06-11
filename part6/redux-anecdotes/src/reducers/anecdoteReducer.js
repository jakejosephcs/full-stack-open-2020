// const getId = () => (100000 * Math.random()).toFixed(0)

// import anecdotes from "../../services/anecdotes"

// const asObject = (anecdote) => {
//   return {
//     content: anecdote,
//     id: getId(),
//     votes: 0
//   }
// }

// const initialState = anecdotesAtStart.map(asObject)

import anecdoteServices from '../services/anecdotes'
import { useDispatch } from 'react-redux'

const anecdoteReducer = (state = [], action) => {
  switch (action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdoteToVoteFor = state.find(a => a.id === id)
      const updatedAnecdote = {
        ...anecdoteToVoteFor,
        votes: anecdoteToVoteFor.votes + 1 
      }
      return state.map(a => a.id !== id ? a : updatedAnecdote)
    case 'NEW_ANECDOTE':
      return state.concat({
        content: action.data.content,
        // id: getId(),
        votes: 0
      })
    case 'INIT_ANECDOTES':
      return action.data
    default:
      return state
  }
}

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteServices.getAll()
    dispatch({
      type: 'INIT_ANECDOTES',
      data: anecdotes
    })
  }
}


// It is actually not necessary for React-components to know the Redux action types and forms. 
// Let's separate creating actions into their own functions:
export const createAnecdote = (data) => {
  return async dispatch => {
    const newAnecdote = await anecdoteServices.createNew(data)
    dispatch({
      type: 'NEW_ANECDOTE',
      data: newAnecdote
    })
    }
}

export const voteForAnecdote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export default anecdoteReducer