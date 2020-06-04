# Exercises 4.1.-4.2. [LINK to exercises](https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing#exercises-4-1-4-2)
In the exercises for this part we will be building a blog list application, that allows users to save information about interesting blogs they have stumbled across on the internet. For each listed blog we will save the author, title, url, and amount of upvotes from users of the application.

## 4.1 Blog list, step1
Let's imagine a situation, where you receive an email that contains the following application body:

```javascript
const http = require('http')
const express = require('express')
const app = express()
const cors = require('cors')
const mongoose = require('mongoose')

const blogSchema = mongoose.Schema({
  title: String,
  author: String,
  url: String,
  likes: Number
})

const Blog = mongoose.model('Blog', blogSchema)

const mongoUrl = 'mongodb://localhost/bloglist'
mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(express.json())

app.get('/api/blogs', (request, response) => {
  Blog
    .find({})
    .then(blogs => {
      response.json(blogs)
    })
})

app.post('/api/blogs', (request, response) => {
  const blog = new Blog(request.body)

  blog
    .save()
    .then(result => {
      response.status(201).json(result)
    })
})

const PORT = 3003
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
```

Turn the application into a functioning npm project.

## 4.2 Blog list, step2
Refactor the application into separate modules as shown earlier in this part of the course material.

# Exercises 4.3.-4.7. [LINK to exercises](https://fullstackopen.com/en/part4/structure_of_backend_application_introduction_to_testing#exercises-4-3-4-7)
Let's create a collection of helper functions that are meant to assist dealing with the blog list. Create the functions into a file called utils/list_helper.js. Write your tests into an appropriately named test file under the tests directory.

## 4.3: helper functions and unit tests, step1
First define a dummy function that receives an array of blog posts as a parameter and always returns the value 1. The contents of the list_helper.js file at this point should be the following:

```javascript
const dummy = (blogs) => {
  // ...
}

module.exports = {
  dummy
}
```

Verify that your test configuration works with the following test:

```javascript
const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})
```

## 4.4: helper functions and unit tests, step2
Define a new totalLikes function that receives a list of blog posts as a parameter. The function returns the total sum of likes in all of the blog posts. Write appropriate tests for the function

## 4.5*: helper functions and unit tests, step3
Define a new favoriteBlog function that receives a list of blogs as a parameter. The function finds out which blog has most likes. If there are many top favorites, it is enough to return one of them.

The value returned by the function could be in the following format:

```javascript
{
  title: "Canonical string reduction",
  author: "Edsger W. Dijkstra",
  likes: 12
}
```

Write the tests for this exercise inside of a new describe block. Do the same for the remaining exercises as well.

## 4.6*: helper functions and unit tests, step4
Define a function called mostBlogs that receives an array of blogs as a parameter. The function returns the author who has the largest amount of blogs. The return value also contains the number of blogs the top author has:

```javascript
{
  author: "Robert C. Martin",
  blogs: 3
}
```

If there are many top bloggers, then it is enough to return any one of them.

## 4.7*: helper functions and unit tests, step5
Define a function called mostLikes that receives an array of blogs as its parameter. The function returns the author, whose blog posts have the largest amount of likes. The return value also contains the total number of likes that the author has received:

```javascript
{
  author: "Edsger W. Dijkstra",
  likes: 17
}
```

If there are many top bloggers, then it is enough to show any one of them.

# Exercises 4.8.-4.12. [LINK to exercises](https://fullstackopen.com/en/part4/testing_the_backend#exercises-4-8-4-12)
Warning: If you find yourself using async/await and then methods in the same code, it is almost guaranteed that you are doing something wrong. Use one or the other and don't mix the two.

## 4.8: Blog list tests, step1
Use the supertest package for writing a test that makes an HTTP GET request to the /api/blogs url. Verify that the blog list application returns the correct amount of blog posts in the JSON format.

Once the test is finished, refactor the route handler to use the async/await syntax instead of promises.

## 4.9*: Blog list tests, step2
Write a test that verifies that the unique identifier property of the blog posts is named id, by default the database names the property _id.

Make the required changes to the code so that it passes the test.

## 4.10: Blog list tests, step3
Write a test that verifies that making an HTTP POST request to the /api/blogs url successfully creates a new blog post. At the very least, verify that the total number of blogs in the system is increased by one. You can also verify that the content of the blog post is saved correctly to the database.

Once the test is finished, refactor the operation to use async/await instead of promises.

## 4.11*: Blog list tests, step4
Write a test that verifies that if the likes property is missing from the request, it will default to the value 0. Do not test the other properties of the created blogs yet.

Make the required changes to the code so that it passes the test.

## 4.12*: Blog list tests, step5
Write a test related to creating new blogs via the /api/blogs endpoint, that verifies that if the title and url properties are missing from the request data, the backend responds to the request with the status code 400 Bad Request.

Make the required changes to the code so that it passes the test.

# Exercises 4.13.-4.14. [LINK to exercises](https://fullstackopen.com/en/part4/testing_the_backend#exercises-4-13-4-14)

## 4.13 Blog list expansions, step1
Implement functionality for deleting a single blog post resource.

Use the async/await syntax. Follow RESTful conventions when defining the HTTP API.

Feel free to implement tests for the functionality if you want to. Otherwise verify that the functionality works with Postman or some other tool.

## 4.14 Blog list expansions, step2
Implement functionality for updating the information of an individual blog post.

Use async/await. Feel free to implement tests for the functionality if you want to. Otherwise verify that the functionality works with Postman or some other tool.

## 4.15: bloglist expansion, step3
Implement a way to create new users by doing a HTTP POST-request to address api/users. Users have username , password and name.

Do not save passwords to the database as clear text, but use the bcrypt.

Implement a way to see the details of all users by doing a suitable HTTP request.

List of users can for example, look as follows:

![4.15 complete](https://fullstackopen.com/static/b59bda1bd7e5987a5c805332d509e516/14be6/22.png)

## 4.16*: bloglist expansion, step4
Add a feature which adds the following restrictions to creating new users: Both username and password must be given. Both username and password must be at least 3 characters long. The username must be unique.

The operation must respond with a suitable status code and some kind of an error message if invalid user is created.

Also, implement tests which check that invalid users are not created and invalid add user operation returns a suitable status code and error message.

## 4.17: bloglist expansion, step5
Expand blogs so that each blog contains information on the creator of the blog.

Modify adding new blogs so that when a new blog is created, any user from the database is designated as its creator (for example the one found first). 

Modify listing all blogs so that the creator's user information is displayed with the blog:

![4.17 complete](https://fullstackopen.com/static/199682ad74f50747c90997a967856ffa/14be6/23e.png)

and listing all users also displays the blogs created by each user:

![4.17 complete](https://fullstackopen.com/static/ac9967c89785b33440e9b1b4e87c17e5/14be6/24e.png)
