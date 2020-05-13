# Exercises 2.1-2.5 [LINK to exercises](https://fullstackopen.com/en/part2/rendering_a_collection_modules#exercises-2-1-2-5)

## 2.1: course contents step6
Define a component responsible for formatting a single course called Course.

The component structure of the application can be, for example, the following:

```javascript
App
  Course
    Header
    Content
      Part
      Part
      ...
```
The rendered page can, for example, look as follows:

> ![Half stack app](https://fullstackopen.com/static/6e12df59c1c9e28c39ebdbe1b41ccf97/14be6/8e.png)

The application must work regardless of the number of parts a course has, so make sure the application works if you add or remove parts of a course.

## 2.2: Course contents step7
Show also the sum of the exercises of the course.

> ![Half stack app](https://fullstackopen.com/static/2d8aa950189db6cf2eeb794181429ae9/14be6/9e.png)

## 2.3*: Course contents step8
If you haven't done so already, calculate the sum of exercises with the array method reduce.

## 2.4: Course contents step9
Let's extend our application to allow for an arbitrary number of courses:

```javascript
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
    <div>
      // ...
    </div>
  )
}
```

The application can, for example, look like this:

> ![Half stack app](https://fullstackopen.com/static/8c1ce3363ec056cd15c5edacbeec3370/14be6/10e.png)

