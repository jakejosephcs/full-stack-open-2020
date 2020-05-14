import React from 'react'

const PersonForm = ({ onSubmit, nameValue, nameOnChange, numberValue, numberOnChange }) => {
    return (
        <form onSubmit={onSubmit}>
            <div>
                Name: <input value={nameValue} onChange={nameOnChange} />
            </div>
            <div>
                Number: <input value={numberValue} onChange={numberOnChange} />
            </div>
            <div>
                <button type="submit">ADD</button>
            </div>
        </form>
    )
}

export default PersonForm