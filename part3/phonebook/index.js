const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())
app.use(express.json())


morgan.token('body', (req, res, param) => { 
    if(req.method !== 'POST') {
        return `Not a post, a ${req.method}`
    }
    return JSON.stringify(req.body)
})

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))

let persons = [
    {
        name: "Arto Hellas",
        number: "12",
        id: 1
    },
    {
        name: "Ada Lovelaces",
        number: "34",
        id: 2
    },
    {
        name: "Dan Abramov",
        number: "56",
        id: 3
    },
    {
        name: "Mary Poppendieck",
        number: "78",
        id: 4
    }
]

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

app.get('/notes', (request, response) => {
    let personsLength = persons.length
    let date = new Date()

    response.send(`
        <p>Phonebook has info for ${personsLength} people</p>
        <p>${date}</p>
    `)
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

app.post('/api/persons', (request, response) => {
    const body = request.body
    const randomId = Math.random(10000)

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
        id: randomId
    }


    persons = persons.concat(person)

    response.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})