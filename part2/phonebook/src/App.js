import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'

const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ filterPerson, setFilterPerson] = useState('')

    useEffect(() => {
        axios
            .get('http://localhost:3001/persons')
            .then(response => {
                setPersons(response.data)
            })
    },[]);

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already in the Phonebook`)
        } else {
            const personObject = {
                name: newName,
                number: newNumber
            }
            axios
                .post("http://localhost:3001/persons", personObject)
                .then(
                    response => {
                        setPersons(persons.concat(response.data))
                        setNewName("")
                        setNewNumber("")
                    }
                )
        }
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        setNewNumber(event.target.value)
    }

    const handleFilterChange = (event) => {
        setFilterPerson(event.target.value)
    }


    return (
        <div>
            <h2>Phonebook</h2>
            <Filter value={filterPerson} onChange={handleFilterChange} />
            <h2>Add a New Entry</h2>
            <PersonForm 
                onSubmit={addPerson} nameValue={newName} nameOnChange={handleNameChange} 
                numberValue={newNumber} numberOnChange={handleNumberChange}
            />
            <h2>Numbers</h2>
            <Persons filterPerson={filterPerson} persons={persons} />
        </div>
    )
}


export default App