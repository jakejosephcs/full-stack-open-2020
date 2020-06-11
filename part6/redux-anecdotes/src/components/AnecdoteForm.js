import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationCreate, clearNotification } from '../reducers/notificationReducer'
import anecdoteServices from '../services/anecdotes'

const AnecdoteForm = () => {
    const dispatch = useDispatch()

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdoteContent.value
        event.target.anecdoteContent.value = ''
        const newAnecdote = await anecdoteServices.createNew(content)
        dispatch(createAnecdote(newAnecdote))
        dispatch(setNotificationCreate(newAnecdote.content))
        setTimeout(() => {
            dispatch(clearNotification(''))
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