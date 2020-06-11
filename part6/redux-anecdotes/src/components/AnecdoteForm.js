import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdoteContent.value
        event.target.anecdoteContent.value = ''
        dispatch(createAnecdote(content))
        dispatch(setNotification(`Anecdote "${content}" has been created`, 5))
        setTimeout(() => {
            dispatch(clearNotification())
        }, 5000)
    }

    return(
        <div>
            <h2>Create New</h2>
            <form onSubmit={addAnecdote}>
                <div>
                    <input name="anecdoteContent"/>
                </div>
                <button type='submit'>Create</button>
            </form>
        </div>
    )
}

export default AnecdoteForm