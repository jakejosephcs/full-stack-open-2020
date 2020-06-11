import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationVote, clearNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const anecdotes = useSelector(state => {
        const filter = state.filter.toLowerCase()
        return state.anecdotes.filter(a => a.content.toLowerCase().includes(filter))
    })
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteForAnecdote(anecdote))
        dispatch(setNotificationVote(anecdote.content))
        setTimeout(() => {
            dispatch(clearNotification(''))
        }, 5000)
    }


    return(
        <div>
            {anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                        {anecdote.content}
                    </div>
                    <div>
                        has {anecdote.votes}
                        <button onClick={() => vote(anecdote)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList