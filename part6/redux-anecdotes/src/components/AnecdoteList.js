import React from 'react'
import { connect } from 'react-redux'
import { voteForAnecdote } from '../reducers/anecdoteReducer'
import { setNotification, clearNotification } from '../reducers/notificationReducer'


const AnecdoteList = (props) => {
    const anecdotesToShow = () => {
        const filter = props.filter.toLowerCase()
        return props.anecdotes.filter(a => a.content.toLowerCase().includes(filter))
    }

    const vote = (anecdote) => {
        props.voteForAnecdote(anecdote)
        props.setNotification(`You voted for "${anecdote.content}"`, 5)
        setTimeout(() => {
            props.clearNotification()
        }, 5000)
    }

    return(
        <div>
            {anecdotesToShow().sort((a,b) => b.votes - a.votes).map(anecdote =>
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

const mapStateToProps = (state) => {
    return {
        anecdotes: state.anecdotes,
        filter: state.filter,
    }
}

const mapDispatchToProps = {
    voteForAnecdote,
    setNotification,
    clearNotification,
}

const ConnectedAnecdotesList = connect(
    mapStateToProps,
    mapDispatchToProps
)(AnecdoteList)

export default ConnectedAnecdotesList