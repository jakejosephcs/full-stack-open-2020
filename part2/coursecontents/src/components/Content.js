import React from 'react'
import Part from './Part'

const Content = ({ course }) => {
    return(
        <>
            <Part parts={course.parts} />
        </>
    )
}

export default Content