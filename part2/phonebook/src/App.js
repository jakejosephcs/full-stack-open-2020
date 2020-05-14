import React, { useState } from 'react'

const App = (props) => {
    const [ persons, setPersons ] = useState(props.persons) 
    const [ newName, setNewName ] = useState('')
    const [ newNumber, setNewNumber] = useState('')
    const [ filterPerson, setFilterPerson] = useState('')

    const addPerson = (event) => {
        event.preventDefault()
        if (persons.some(person => person.name === newName)) {
            alert(`${newName} is already in the Phonebook`)
        } else {
            const personObject = {
                name: newName,
                number: newNumber
            }
            setPersons(persons.concat(personObject))
            setNewName("")
            setNewNumber("")
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
            <div>
                Filter by name: <input value={filterPerson} onChange={handleFilterChange} />
            </div>
            <h2>Add a New Entry</h2>
            <form onSubmit={addPerson}>
                <div>
                    Name: <input value={newName} onChange={handleNameChange}/>
                </div>
                <div>
                    Number: <input value={newNumber} onChange={handleNumberChange}/>
                </div>
                <div>
                    <button type="submit">ADD</button>
                </div>
            </form>
            <h2>Numbers</h2>
            <div>
                {persons.filter(person => 
                    person.name.toLowerCase().includes(filterPerson.toLowerCase())).map(person =>
                        <p key={person.name}>{person.name} {person.number}</p>)
                }
            </div>
        </div>
    )
}


export default App