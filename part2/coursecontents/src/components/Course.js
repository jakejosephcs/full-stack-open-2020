import React from 'react';
import Header from './Header'
import Content from './Content'
import Sum from './Sum'

const Course = ({ course }) => {
    return (
        <div>
        <Header course={course} />
        <Content course={course} />
        <Sum parts={course.parts} />
        </div>
    )
}

export default Course