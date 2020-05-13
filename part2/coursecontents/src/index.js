import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    courses.map(course => <Course key={course.id} course={course} />)
    
  )
}

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Sum parts={course.parts} />
    </div>
  )
}

const Header = ({ course }) => {
  return(
      <h1>{course.name}</h1>
  )
}

const Content = ({ course }) => {
  return(
    <>
      <Part parts={course.parts} />
    </>
  )
}

const Part = ({ parts }) => {
  return(
    <>
      {parts.map(part => <p key={part.id}>{part.name} {part.exercises}</p>)}
    </>
  )
}

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


ReactDOM.render(<App />, document.getElementById('root'))