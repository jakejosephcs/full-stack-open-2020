import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonsServices from './services/persons'

const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ filterPerson, setFilterPerson] = useState('')

    useEffect(() => {
        PersonsServices
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
    },[]);

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            if(window.confirm(`${newName} is already in the Phonebook, replace the old number with a new one?`)) {
                const result = persons.filter(person => person.name === newName)
                const updatedPerson = {...result[0], number: newNumber}
                PersonsServices
                    .updatePerson(updatedPerson.id, updatedPerson)
                    .then(
                        response => {
                            setPersons(persons.map(person => person.id !== response.id ? person : response.data))
                        }
                    )
                window.location.reload();
            }
        } else {
            const personObject = {
                name: newName,
                number: newNumber
            }

            PersonsServices
                .create(personObject)
                .then( response => {
                    setPersons(persons.concat(response.data))
                    setNewName("")
                    setNewNumber("")
                })
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

    const handleDeletePerson = (e) => {
        if (window.confirm("Confirm to delete")) {
            PersonsServices.deletePerson(e.target.value)
            window.location.reload();
        }
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
            <Persons filterPerson={filterPerson} persons={persons} deletePerson={handleDeletePerson} />
        </div>
    )
}


export default App