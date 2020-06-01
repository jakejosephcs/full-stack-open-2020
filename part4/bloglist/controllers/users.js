const bcrypt = require('bcryptjs')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.post('/', async (request, response) => {
    const body = request.body

    const saltRounds = 10

    if (String(body.password) === undefined || String(body.password).length < 3) {
        response.status(401).json({ error: `invalid password`})
    }

    const passwordHash = await bcrypt.hash(String(body.password), saltRounds)

    const user = new User({
        username: body.username,
        name: body.name,
        passwordHash,
    })

    const savedUser = await user.save()

    response.json(savedUser)
})

usersRouter.get('/', async (request, response) => {
    const users = await User
        .find({})
        .populate('blogs', { url: 1, title: 1, author: 1 })
    response.json(users.map(u => u.toJSON()))
})

module.exports = usersRouter