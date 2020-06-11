# Exercises 6.3.-6.8. [LINK to exercises](https://fullstackopen.com/en/part6/flux_architecture_and_redux#exercises-6-3-6-8)
Let's make a new version of the anecdote voting application from part 1. Take the project from this repository https://github.com/fullstack-hy2020/redux-anecdotes to base your solution on.

## 6.3: anecdotes, step1
Implement the functionality for voting anecdotes. The amount of votes must be saved to a Redux-store.

## 6.4: anecdotes, step2
Implement the functionality for adding new anecdotes.

## 6.5*: anecdotes, step3
Make sure that the anecdotes are ordered by the number of votes.

## 6.6: anecdotes, step4
If you haven't done so already, separate the creation of action-objects to action creator-functions and place them in the ```src/reducers/anecdoteReducer.js``` file.

## 6.7: anecdotes, step5
Separate the creation of new anecdotes into its own component called AnecdoteForm. Move all logic for creating a new anecdote into this new component.

## 6.8: anecdotes, step6
Separate the rendering of the anecdote list into its own component called AnecdoteList. Move all logic related to voting for an anecdote to this new component.

# Exercises 6.9.-6.12. [LINK to exercises](https://fullstackopen.com/en/part6/many_reducers#exercises-6-9-6-12)
Let's continue working on the anecdote application using redux that we started in exercise 6.3.

## 6.9 Better anecdotes, step7
Start using React dev tools. Move defining the Redux-store into its own file store.js.

## 6.10 Better anecdotes, step8
The application has a ready-made body for the Notification component:

```javascript
import React from 'react'

const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      render here notification...
    </div>
  )
}

export default Notification
```

Extend the component so that it renders the message stored in the redux store, making the component to take the form:

```javascript
import React from 'react'
import { useSelector } from 'react-redux'

const Notification = () => {
  const notification = useSelector(/* something here */)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}
```

## 6.11 Better anecdotes, step9
Extend the application so that it uses the Notification component to display a message for the duration of five seconds when the user votes for an anecdote or creates a new anecdote:

![6.11](https://fullstackopen.com/static/c82fb74270b3ca5ce1edef02e2cf82bd/14be6/8ea.png)

## 6.12* Better anecdotes, step10
Implement filtering for the anecdotes that are displayed to the user.

![6.12](https://fullstackopen.com/static/e64e260dbd3b22669115b6eb9dcce7a5/14be6/9ea.png)

Store the state of the filter in the redux store. It is recommended to create a new reducer and action creators for this purpose.

Create a new Filter component for displaying the filter.

# Exercises 6.13.-6.14. [LINK to exercises](https://fullstackopen.com/en/part6/communicating_with_server_in_a_redux_application#exercises-6-13-6-14)

## 6.13 Anecdotes and the backend, step1

When the application launches, fetch the anecdotes from the backend implemented using json-server.

## 6.14 Anecdotes and the backend, step2

Modify the creation of new anecdotes, such that the anecdotes are stored in the backend.

# Exercises 6.15.-6.18. [LINK to exercises](https://fullstackopen.com/en/part6/communicating_with_server_in_a_redux_application#exercises-6-15-6-18)

## 6.15 Anecdotes and the backend, step3
Modify the initialization of redux-store to happen using asynchronous action creators, which are made possible by the redux-thunk-library.

## 6.16 Anecdotes and the backend, step4
Also modify the creation of a new anecdote to happen using asynchronous action creators, made possible by the redux-thunk-library.

## 6.17 Anecdotes and the backend, step5
Voting does not yet save changes to the backend. Fix the situation with the help of the redux-thunk-library.

## 6.18 Anecdotes and the backend, step6

The creation of notifications is still a bit tedious, since one has to do two actions and use the ```setTimeout``` function.

Make an asynchronous action creator, which enables one to provide the notification as follows:

```javascript
dispatch(setNotification(`you voted '${anecdote.content}'`, 10))
```

The first parameter is the text to be rendered and the second parameter is the time to display the notification given in seconds.

Implement the use of this improved notification in your application.