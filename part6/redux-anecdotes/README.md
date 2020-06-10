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

