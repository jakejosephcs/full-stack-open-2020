import React from 'react'

const Notification = ({ message }) => {
    const notficationStyle = {
        color: 'black',
        fontStyle: 'bold',
        fontSize: 25,
        display: 'flex',
        justifyContent: 'center',
        background:'lightgreen',
        border: "1px solid black",
        marginBottom: 10,
        borderRadius: 20,
    }

    if (message === null) {
        return null
    }

    return (
        <div style={notficationStyle}>
            {message}
        </div>
    )
}

export default Notification