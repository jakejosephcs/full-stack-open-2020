const express = require('express')
const app = express()

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
    console.log(request.params.id)
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

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})