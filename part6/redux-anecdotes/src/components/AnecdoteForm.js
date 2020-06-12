import React from 'react'
import { connect } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/notificationReducer'

const AnecdoteForm = (props) => {

    const addAnecdote = async (event) => {
        event.preventDefault()
        const content = event.target.anecdoteContent.value
        event.target.anecdoteContent.value = ''
        props.createAnecdote(content)
        props.setNotification(`Anecdote "${content}" has been created`, 5)
        setTimeout(() => {
            props.setNotification()
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

const mapDispatchToProps = {
    createAnecdote,
    setNotification,
}

const ConnectedAnecdoteForm = connect(
    null,
    mapDispatchToProps
)(AnecdoteForm)

export default ConnectedAnecdoteForm