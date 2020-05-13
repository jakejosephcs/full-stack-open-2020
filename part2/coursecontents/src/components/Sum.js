import React from 'react'

const Sum = ({ parts }) => {
    return (
        <> 
        <strong>
            Total of (
            {parts.reduce((sum, part) => sum + part.exercises, 0)}
            ) exercises
        </strong>
        </>
    )
}

export default Sum