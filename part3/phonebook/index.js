require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const app = express()
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use(express.static('build'))



const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => {
        console.log('connected to MongoDB')
    }).catch((error) => {
        console.log('error connecting to MongoDB: ', error.message)
    })

const personSchema = new mongoose.Schema({
    name: String,
    number: String,
})

const Person = mongoose.model('Person', personSchema)




morgan.token('body', (req, res, param) => { 
    if(req.method !== 'POST') {
        return `Not a post, a ${req.method}`
    }
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [{
        "name": "Arto Hellas",
        "number": "040-123456",
        "id": 1
    },
    {
        "name": "Ada Lovelace",
        "number": "39-44-5323523",
        "id": 2
    },
    {
        "name": "Dan Abramov",
        "number": "12-43-234345",
        "id": 3
    },
    {
        "name": "Mary Poppendieck",
        "number": "39-23-6423122",
        "id": 4
    }
]

const generateId = () => {
    const id = parseInt(Math.random() * 100000000, 10)
    return id
}

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

    const person = {
        name: body.name,
        number: body.number,
        id: generateId(),
    }


    persons = persons.concat(person)

    response.json(person)
})

app.get('/people', (request, response) => {
    let personsLength = persons.length
    let date = new Date()

    response.send(`
        <p>Phonebook has info for ${personsLength} people</p>
        <p>${date}</p>
    `)
})

app.get('/api/persons', (request, response) => {
    Person.find({}).then(per => {
        response.json(per)
    })
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = persons.find(person => person.id === id)

    if(person) {
        response.json(person)
    } else {
        response.status(404).end()
    }

    
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    persons = persons.filter(person => person.id !== id)

    response.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})