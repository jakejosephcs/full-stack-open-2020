require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))

morgan.token('body', (req, res, param) => { 
    if(req.method !== 'POST') {
        return `Not a post, a ${req.method}`
    }
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

app.post('/api/persons', (request, response) => {
    const body = request.body

    if(!body.name || !body.number) {
        return response.status(400).json({
            error: 'name or number is missing'
        })
    }

    if(!((persons.filter(personInList => personInList.name === body.name)).length === 0)) {
        return response.status(400).json({
            error: 'name already exisits'
        })
    }

    const person = new Person({
        name: String(body.name),
        number: String(body.number),
    })

    person.save().then(savedPerson => {
        response.json(savedPerson)
    })
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(per => {
        response.json(per)
    })
})

app.get('/api/persons/:id', (request, response) => {
    Person.findById(String(request.params.id)).then(per => {
        response.json(per)
    })
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})