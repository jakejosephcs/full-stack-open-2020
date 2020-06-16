const blogRouter = require('express').Router()
const Blog = require('../models/blog')
const User = require('../models/user')
const jwt = require('jsonwebtoken')

blogRouter.get('/', async (request, response) => {
    const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
    response.json(blogs)
})

blogRouter.delete('/:id', async (request, response) => {
    const decodedToken = jwt.verify(request.token, process.env.SECRET)
    
    if (!request.token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid' })
    }

    const user = await User.findById(decodedToken.id)
    const blog = await Blog.findById(request.params.id)
    

    console.log("blog.user: ", blog.user)

    if (blog.user.toString() !== user.id.toString()) {
        return response.status(401).json({ error: 'You are not the owner of this blog'})
    }

    await blog.remove()
    user.blogs = user.blogs.filter(b => b.id.toString() !== request.params.id.toString())
    await user.save()
    response.status(204).end()
})

blogRouter.put('/:id', async (request, response) => {
    const blog = request.body
    blog.user = blog.user.id

    const updatedBlog = await Blog
        .findByIdAndUpdate(request.params.id, blog, { new: true })
        .populate('user')

    response.json(updatedBlog)
})

blogRouter.post('/:id/comments', async (request, response) => {
    const blog = await Blog
        .findById(request.params.id)

    blog.comments = blog.comments.concat(request.body.comment)
    await blog.save()

    response.json(blog)
})

blogRouter.post('/', async (request, response) => {
    const blog =  new Blog(request.body)

    const decodedToken = jwt.verify(request.token, process.env.SECRET)

    if (!request.token || !decodedToken.id) {
        return response.status(401).json({ error: 'token missing or invalid'})
    }

    const user = await User.findById(decodedToken.id)

    if(!blog.title || !blog.url) {
        return response.status(400).end()
    }

    if (!blog.likes) {
        blog.likes = 0
    }

    blog.user = user
    const savedBlog = await blog.save()
    
    user.blogs = user.blogs.concat(savedBlog._id)
    await user.save()

    response.status(201).json(savedBlog)   
})

module.exports = blogRouter




