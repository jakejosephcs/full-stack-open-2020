import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationVote, clearNotification } from '../reducers/notificationReducer'


const AnecdoteList = () => {
    const anecdotesList = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const vote = (anecdote) => {
        dispatch(voteForAnecdote(anecdote.id))
        dispatch(setNotificationVote(anecdote.content))
        setTimeout(() => {
            dispatch(clearNotification(''))
        }, 5000)
    }


    return(
        <div>
            {anecdotesList.sort((a,b) => b.votes - a.votes).map(anecdote =>
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