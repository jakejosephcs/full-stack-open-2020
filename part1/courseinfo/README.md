# Exercises 1.1.-1.2. [LINK to exercises](https://fullstackopen.com/en/part1/introduction_to_react#exercises-1-1-1-2)

## 1.1: course information, step1
Modift the App component's body will approximately be as follows:
```javascript
const App = () => {
  // const-definitions

  return (
    <div>
      <Header course={course} />
      <Content ... />
      <Total ... />
    </div>
  )
}
```

## 1.2: course information, step2
Refactor the Content component so that it does not render any names of parts or their number of exercises by itself. Instead it only renders three Part components of which each renders the name and number of exercises of one part.
```javascript
const Content = ... {
  return (
    <div>
      <Part .../>
      <Part .../>
      <Part .../>
    </div>
  )
}
```

# Exercises 1.3.-1.5. [LINK to exercises](https://fullstackopen.com/en/part1/java_script#exercises-1-3-1-5)

## 1.3: course information step3
Modify the variable definitions of the App component as follows and also refactor the application so that it still works:
```javascript
const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <div>
      ...
    </div>
  )
}
```

## 1.4: course information step4
Modify the variable definitions of App into the following form and modify the other parts of the application accordingly:
```javascript
const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      ...
    </div>
  )
}
```

## 1.5: course information step5
Change the course and its parts into a single JavaScript object. Fix everything that breaks.
```javascript
const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      ...
    </div>
  )
}
```