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

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})