import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
    const anecdotesList = useSelector(state => state)
    const dispatch = useDispatch()

    const vote = (id) => {
        dispatch(voteForAnecdote(id))
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
                        <button onClick={() => vote(anecdote.id)}>vote</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default AnecdoteList