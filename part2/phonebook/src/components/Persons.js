import React from 'react'

const Persons = ({ filterPerson, persons }) => {
    return (
        <div>
            {persons.filter( person => 
                person.name.toLowerCase().includes(filterPerson.toLowerCase())).map(person => 
                    <p key={person.number}>{person.name} {person.number}</p>
            )}
        </div>
        )
}

export default Persons