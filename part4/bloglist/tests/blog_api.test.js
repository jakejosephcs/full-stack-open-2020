const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')


beforeEach(async () => {
    await Blog.deleteMany({})
        
    const blogObjects = helper.initialBlogs.map(blog => new Blog(blog))

    const promiseArray = blogObjects.map(blog => blog.save())

    await Promise.all(promiseArray)
})

test('blogs are returned as json', async () => {
    await api
        .get('/api/blogs')
        .expect(200)
        .expect('Content-Type', /application\/json/)
})

test('able to post a blog', async () => {
    const newBlog = {
        title: "Test",
        author: "Test Joseph",
        url: "Test@test.com",
        likes: 1
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const title = response.body.map(r => r.title)

    expect(title).toContain('Test')
    expect(response.body).toHaveLength(helper.initialBlogs.length + 1)
})

test('there are five blogs', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(5)
})

test('blog id is named id and not _id', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body[0].id).toBeDefined()
})

test('missing likes defaults to 0', async () => {
    const newBlog = {
        title: "Test",
        author: "Test Joseph",
        url: "Test@test.com",
        // likes: 1
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(200)
        .expect('Content-Type', /application\/json/)

    const response = await api.get('/api/blogs')

    const likes = response.body.map(r => r.likes)

    expect(likes.includes(undefined)).toBe(false)
})

test('title and url properties are missing', async () => {
    const newBlog = {
        // title: "Test",
        author: "Test Joseph",
        // url: "Test@test.com",
        likes: 12
    }

    await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(400)
    
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(helper.initialBlogs.length)

})

test('delete a blog post', async() => {
    const blogsAtStart = await helper.blogsinDb()
    const blogToDelete = blogsAtStart[0]

    await api
        .delete(`/api/blogs/${blogToDelete.id}`)
        .expect(204)

    const blogsAtEnd = await helper.blogsinDb()

    expect(blogsAtEnd.length).toBe(helper.initialBlogs.length - 1)

    const blogIds = blogsAtEnd.map(r => r.id)

    expect(blogIds.includes(blogToDelete.id)).toBe(false)
})

test('Updating info of an individual blog', async () => {
    const blogsAtStart = await helper.blogsinDb()
    const blogToUpdate = blogsAtStart[0]

    const newContent = {
        title: `${blogToUpdate.title}`,
        author: `${blogToUpdate.author}`,
        url: `${blogToUpdate.url}`,
        likes: `${blogToUpdate.likes + 1}`
    }

    await api
        .put(`/api/blogs/${blogToUpdate.id}`)
        .send(newContent)
        .expect(201)

    const blogsAtEnd = await helper.blogsinDb()

    expect(blogsAtEnd.length).toBe(helper.initialBlogs.length)

    expect(blogsAtEnd[0].likes).toBe(blogsAtStart[0].likes + 1)
})

afterAll(() => {
    mongoose.connection.close()
})