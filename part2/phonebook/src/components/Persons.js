import React from 'react'

const Persons = ({ filterPerson, persons, deletePerson }) => {
    return (
        <div>
            {persons.filter( person => 
                person.name.toLowerCase().includes(filterPerson.toLowerCase())).map(person =>
                    <div key={person.number}>
                        <p>{person.name} {person.number}</p>
                        <button value={person.id} onClick={deletePerson}>Delete</button>
                    </div>
            )}
        </div>
        )
}

export default Persons