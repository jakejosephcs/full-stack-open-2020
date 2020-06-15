# Exercises 7.1.7.3. [LINK to exercises](https://fullstackopen.com/en/part7/react_router#exercises-7-1-7-3)
Let's return to working with anecdotes. Use the redux-free anecdote app found in the repository https://github.com/fullstack-hy2020/routed-anecdotes as the starting point for the exercises.

## 7.1: routed anecdotes, step1
Add React Router to the application so that by clicking links in the Menu-component the view can be changed.

At the root of the application, meaning the path ```/```, show the list of anecdotes:

![7.1](https://fullstackopen.com/static/57c61f000e5eddce42c3a345c2819b77/14be6/40.png)

The Footer-component should always be visible at the bottom.

The creation of a new anecdote should happen e.g. in the path create:

![7.1](https://fullstackopen.com/static/c393db40b64e8eadd1220bdfccc8eede/14be6/41.png)

## 7.2: routed anecdotes, step2
Implement a view for showing a single anecdote:

![7.2](https://fullstackopen.com/static/3287ad77ebb90dfac2d734d9801b20b0/14be6/42.png)

Navigating to the page showing the single anecdote is done by clicking the name of that anecdote

![7.2](https://fullstackopen.com/static/116f966d64a03287b86a6e6a03f6ba81/14be6/43.png)

## 7.3: routed anecdotes, step3
The default functionality of the creation form is quite confusing, because nothing seems to be happening after creating a new anecdote using the form.

Improve the functionality such that after creating a new anecdote the application transitions automatically to showing the view for all anecdotes and the user is shown a notification informing them of this successful creation for the next 10 seconds:

![7.3](https://fullstackopen.com/static/7640caca8b2a611c4f6203f343b996f9/14be6/44.png)

# Exercises 7.4.-7.8. [LINK to exercises](https://fullstackopen.com/en/part7/custom_hooks#exercises-7-4-7-8)

## 7.4: anecdotes and hooks step1
Simplify the anecdote creation form of your application with the ```useField``` custom hook we defined earlier.

## 7.5: anecdotes and hooks step2
Add a button to the form that you can use to clear all the input fields:

![7.5](https://fullstackopen.com/static/1bce1cdac08279ba132f61a614900b94/14be6/61ea.png)

Expand the functionality of the useField hook so that it offers a new reset operation for clearing the field.

Depending on your solution you may see the following warning in your console:

![7.5](https://fullstackopen.com/static/c4f6d266117f4d881d1df60a4ca3b9f5/14be6/62ea.png)

We will return to this warning in the next exercise.

## 7.6: anecdotes and hooks step3
If you see the warning in the console, make the necessary changes to get rid of the ```Invalid value for prop reset' on <input> tag``` console warning

## 7.7: country hook
Continued in ```country-hook``` folder

## 7.8: ultimate hooks
Complete in ```ultimate-hooks``` folder