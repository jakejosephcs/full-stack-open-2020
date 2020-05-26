import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import PersonsServices from './services/persons'
import Notification from './components/Notification'

const App = () => {
    const [ persons, setPersons ] = useState([]) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ filterPerson, setFilterPerson] = useState('')
    const [ message, setMessage ] = useState(null)

    useEffect(() => {
        PersonsServices
            .getAll()
            .then(response => {
                setPersons(response.data)
            })
    },[]);
    
    const updatePerson = (id, personToUpdate) => {
        PersonsServices
            .updatePerson(id, personToUpdate)
            .then(response => {
                    setPersons(persons.map(person => person.id !== response.id ? person : response.data))
                    setMessage(`${personToUpdate.name}'s number has been updated!`)
                    setTimeout(() => {
                        setMessage(null)
                        window.location.reload()
                    }, 2000)
                }
            )
    }

    const deletePerson = (personToDelete, personName) => {
        PersonsServices
                .deletePerson(personToDelete)
                .then(response => {
                    setMessage(`${personName[0].name} has been deleted from the list!`)
                    setTimeout(() => {
                        setMessage(null)
                        window.location.reload()
                    }, 2000)
                })
                .catch(error => {
                    setMessage(`${personName[0].name} was already deleted`)
                    setTimeout(() => {
                        setMessage(null)
                        window.location.reload()
                    }, 2000)
                })
    }

    const createPerson = (personToCreate) => {
        PersonsServices
            .create(personToCreate)
            .then( response => {
                setPersons(persons.concat(response.data))
                setNewName("")
                setNewNumber("")
                setMessage(`${response.data.name} has been added to the list!`)
                setTimeout(() => {
                    setMessage(null)
                    window.location.reload()
                }, 2000)
            })
            .catch(error => {
                setMessage(error.response.data)
                setTimeout(() => {
                    setMessage(null)
                    window.location.reload()
                }, 2000)
            })
    }


    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            if(window.confirm(`${newName} is already in the Phonebook, replace the old number with a new one?`)) {
                const result = persons.filter(person => person.name === newName)
                const updatedPerson = {...result[0], number: newNumber}
                updatePerson(updatedPerson.id, updatedPerson)
            }
        } else {
            const personObject = {
                name: newName,
                number: newNumber
            }

            createPerson(personObject)
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
        const personName = persons.filter(person => person.id.toString() === e.target.value.toString())
        if (window.confirm("Confirm to delete")) {
            deletePerson(e.target.value, personName)
        }
    }


    return (
        <div>
            <h1>Phonebook</h1>
            <Notification message={message} />
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