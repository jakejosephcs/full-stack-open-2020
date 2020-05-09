import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercise: 10
      },
      {
        name: 'Using props to pass data',
        exercise: 7
      },
      {
        name: 'State of a component',
        exercise: 14
      }
    ]
  }

  return (
    <div>
      <Header course={course} />
      <Content course={course}/>
      <Total course={course}/>
    </div>
  )
}

const Header = (props) => {
  return (
    <>
      <h1>
        {props.course.name}
      </h1>
    </>
  )
}

const Content = (props) => {
  // console.log(props)
  return (
    <>
      <Part parts={props.course.parts[0].name} exercise={props.course.parts[0].exercise} />
      <Part parts={props.course.parts[1].name} exercise={props.course.parts[1].exercise} />
      <Part parts={props.course.parts[2].name} exercise={props.course.parts[2].exercise} />
    </>
  )
}

const Total = (props) => {
  // console.log(props)
  return (
    <p>Number of exercises {props.course.parts[0].exercise + props.course.parts[1].exercise + props.course.parts[2].exercise }</p>
  )
}


const Part = (props) => {
  // console.log(props)
  return (
    <>
      <p>
        {props.parts} {props.exercise}
      </p>
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))