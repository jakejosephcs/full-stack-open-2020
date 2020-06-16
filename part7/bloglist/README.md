# Exercises 7.9.-7.21. [LINK to exercises](https://fullstackopen.com/en/part7/exercises_extending_the_bloglist#exercises-7-9-7-21)
In addition to the eight exercises in the React router and custom hooks sections of this seventh part of the course material, there are 13 exercises that continue our work on the Bloglist application that we worked on in parts four and five of the course material.

## 7.9: redux, step1
Refactor the application from using internal React component state to using Redux for the application's state management.

Additionally, change the application's notifications to use Redux at this point of the exercise set.

## 7.10: redux, step2
Store the information about blog posts in the Redux store. In this exercise it is enough that you can see the blogs in backend and create a new blog.

You are free to manage the state for logging in and creating new blog posts by using the internal state of React components.

## 7.11: redux, step3
Expand your solution so that it is again possible to like and delete a blog.

## 7.12: redux, step4
Store the information about the signed in user in the Redux store.

## 7.13: Users view
Implement a view to the application that displays all of the basic information related to users:

> ![7.13](https://fullstackopen.com/static/84f414833029834ab295d900b4506288/14be6/41.png)

## 7.14: Individual user view
Implement a view for individual users, that displays all of the blog posts added by that user:

> ![7.14](https://fullstackopen.com/static/734b72fb3dbef4f7aea9d59792deefbb/14be6/44.png)

You can access the view by clicking the name of the user in the view that lists all users:

> ![7.14](https://fullstackopen.com/static/5b65931c400b7b6ffb12f98292443ca7/14be6/43.png)

## 7.15: Blog view
Implement a separate view for blog posts. You can model the layout of your view after the following example:

> ![7.15](https://fullstackopen.com/static/905fa91b8e113f0ad6d27208ee323b48/14be6/45.png)

Users should be able to access the view by clicking the name of the blog post in the view that lists of all of the blog posts.

> ![7.15](https://fullstackopen.com/static/c09f5edd6f34e77cd390864bd7156790/14be6/46.png)

After you're done with this exercise, the functionality that was implemented in exercise 5.6 is no longer necessary. Clicking a blog post no longer needs to expand the item in the list and display the details of the blog post.

## 7.16: Navigation
Implement a navigation menu for the application:

> ![7.16](https://fullstackopen.com/static/2d374d8414645cb6f50293298e00d189/14be6/47.png)

## 7.17: comments, step1
Implement the functionality for commenting on blog posts:

> ![7.17](https://fullstackopen.com/static/8021a34f357d8764c0b01c8549b43d40/14be6/48.png)

Comments should be anonymous, meaning that they are not associated to the user who left the comment.

In this exercise it is enough for the frontend to only display the comments that the application receives from the backend.

An appropriate mechanism for adding comments to a blog post would be an HTTP POST request to the ```api/blogs/:id/comments``` endpoint.

## 7.18: comments, step2
Extend your application so that users can add comments to blog posts from the frontend:

> ![7.18](https://fullstackopen.com/static/caed74a4c6e3833de7cd7bb6b224c67c/14be6/49.png)
