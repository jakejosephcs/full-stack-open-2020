import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'

const Anecdote = () => {
    const dispatch = useDispatch()

    const addAnecdote = (event) => {
        event.preventDefault()
        const content = event.target.anecdoteContent.value
        event.target.anecdoteContent.value = ''
        dispatch(createAnecdote(content))
    }

    return(
        <form onSubmit={addAnecdote}>
            <div>
                <input name="anecdoteContent"/>
            </div>
            <button type='submit'>Create</button>
        </form>
    )
}

export default Anecdote