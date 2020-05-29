const mongoose = require('mongoose')
const supertest = require('supertest')
const app = require('../app')
const api = supertest(app)
const Blog = require('../models/blog')

const initialBlogs = [
    {
        title: "Canonical string reduction",
        author: "Jake Joseph",
        url: "http://www,jakejoseph.com",
        likes: 12
    }
]

beforeEach(async () => {
    await Blog.deleteMany({})
        
    let blogObject = new Blog(initialBlogs[0])
    await blogObject.save()
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
    expect(response.body).toHaveLength(initialBlogs.length + 1)
})

test('there are zero notes', async () => {
    const response = await api.get('/api/blogs')

    expect(response.body).toHaveLength(0)
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

afterAll(() => {
    mongoose.connection.close()
})