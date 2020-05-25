require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.static('build'))
app.use(express.json())


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

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(String(request.params.id))
        .then(per => {
            if (per) {
                response.json(per)
            } else {
                unknownEndpoint(request, response)
            }
        })
        .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response) => {
    Person.findByIdAndRemove(request.params.id)
        .then(result => {
            response.status(204).end()
        })
        .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
    console.log(error.message)

    if (error.name === 'CastError' && error.kind === 'ObjectId') {
        return response.status(400).send({error: 'malformatted id'})
    }

    next (error)
}

app.use(errorHandler)

const unknownEndpoint = (request, response) => {
    response.status(404).send({ error: 'unknown endpoint'})
}

app.use(unknownEndpoint)

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})