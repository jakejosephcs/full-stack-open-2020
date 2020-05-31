const supertest = require('supertest')
const mongoose = require('mongoose')
const helper = require('./test_helper')
const app = require('../app')
const api = supertest(app)

const Blog = require('../models/blog')
const User = require('../models/user')

describe('when there is initally some blogs saved', () => {
    beforeEach(async () => {
        await Blog.deleteMany({})

        const blogObjects = helper.initialBlogs
            .map(blog => new Blog(blog))
        const promiseArray = blogObjects.map(blog => blog.save())
        await Promise.all(promiseArray)
    })

    test('blogs are returned as json', async () => {
        await api
            .get('/api/blogs')
            .expect(200)
            .expect('Content-Type', /application\/json/)
    })

    test('all blogs are returned', async () => {
        const response = await api.get('/api/blogs')

        expect(response.body.length).toBe(helper.initialBlogs.length)
    })
    
    test('a specific blog is within the returned blogs', async () => {
        const response = await api.get('/api/blogs')

        const titles = response.body.map(r => r.title)
        expect(titles).toContain(
            'Go To Statement Considered Harmful'
        )

    })

    describe('viewing a specific blog', () => {
        test('succeeds with a valid id', async () => {
            const blogsAtStart = await helper.blogsinDb()

            const blogToView = blogsAtStart[0]

            const resultBlog = await api
                .get(`/api/blogs/${blogToView.id}`)
                .expect(200)
                .expect('Content-Type', /application\/json/)

            expect(resultBlog.body).toEqual(blogToView)
        })

        test('blog id is named id and not _id', async () => {
            const response = await api.get('/api/blogs')
        
            expect(response.body[0].id).toBeDefined()
        })
        
        test('fails with statuscode 404 if blog does not exist', async () => {
            const validNonexistingId = await helper.nonExisitingId()

            await api
                .get(`/api/blogs/${validNonexistingId}`)
                .expect(404)
        })

        test('fails with statuscode 404 id is invalid', async () => {
            const invalidId = '5ed3ee9a5dcf990a3eb3bba4'

            await api
                .get(`/api/blogs/${invalidId}`)
                .expect(404)
        })
    })

    describe('addition of a new blog', () => {
        test('success with valid data', async () => {
            const newBlog = {
                title: "Testing w valid data",
                author: "Valid data",
                url: "https://validData.com/",
                likes: 7,
                
            }

            await api
                .post('/api/blogs')
                .send(newBlog)
                .expect(200)
                .expect('Content-Type', /application\/json/)

            const blogsAtEnd = await helper.blogsinDb()
            expect(blogsAtEnd.length).toBe(helper.initialBlogs.length + 1)

            const titles = blogsAtEnd.map(r => r.title)
            expect(titles).toContain(
                'Testing w valid data'
            )
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

        test('fails with status code 400 if data is invalid', async () => {
            const newBlog = {
                title: 'Invalid data'
            }

            await api
                .post('/api/blogs')
                .send(newBlog)
                .expect(400)

            const blogsAtEnd = await helper.blogsinDb()
            expect(blogsAtEnd.length).toBe(helper.initialBlogs.length)
        })
    })

    describe('deletion of a blog', () => {
        test('succeeds with status code 204 if id is valid', async () => {
            const blogsAtStart = await helper.blogsinDb()
            const blogToDelete = blogsAtStart[0]

            await api
                .delete(`/api/blogs/${blogToDelete.id}`)
                .expect(204)

            const blogsAtEnd = await helper.blogsinDb()
            expect(blogsAtEnd.length).toBe(helper.initialBlogs.length - 1)

            const titles = blogsAtEnd.map(r => r.title)
            expect(titles).not.toContain(blogToDelete.title)
        })
    })

    describe('updating blog information', () => {
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
        
            expect(blogsAtEnd[0].likes).toBe(blogToUpdate.likes + 1)
        })
    })
})






// USER TESTS:
describe('when there is initially one user in the db', () => {
    beforeEach(async () => {
        await User.deleteMany({})
        const userObjects = helper.initialUsers
            .map(user => new User(user))
        const promiseArray = userObjects.map(user => user.save())
        await Promise.all(promiseArray)
    })

    test('creation succeeds with a fresh username', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'jjoseph',
            name: 'Jake Joseph',
            password: 'salainen',
        }

        await api
            .post('/api/users')
            .send(newUser)
            .expect(200)
            .expect('Content-Type', /application\/json/)

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length + 1)

        const usernames = usersAtEnd.map(u => u.username)
        expect(usernames).toContain(newUser.username)
    })

    test('creation fails with proper statuscode and message if username already taken', async () => {
        const usersAtStart = await helper.usersInDb()

        const newUser = {
            username: 'mluukkai',
            name: 'Matti Luukkainen',
            passwordHash: 'salainen'
        }

        const result = await api
            .post('/api/users')
            .send(newUser)
            .expect(400)
            .expect('Content-Type', /application\/json/)

        expect(result.body.error).toContain('`username` to be unique')

        const usersAtEnd = await helper.usersInDb()
        expect(usersAtEnd.length).toBe(usersAtStart.length)
    })
})

afterAll(() => {
    mongoose.connection.close()
})