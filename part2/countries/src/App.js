import React, { useState, useEffect } from 'react';
import axios from 'axios'

const App = () => {
    const [ country, setCountry ] = useState([])
    const [ newCountry, setNewCountry] = useState("")
    const [ filteredCountry, setFilteredCountry ] = useState([])

    useEffect(() => {
        axios
            .get('http://localhost:3001/countries')
            .then(response => {
                setCountry(response.data)
            })
    }, []);

    useEffect(() => {
        const results = country.filter(place => place.name.toLowerCase().includes(newCountry.toLowerCase()));
        setFilteredCountry(results)
    }, [newCountry, country]);

    const handleNewCountry = (event) => {
        setNewCountry(event.target.value)
    }

    const countryToShow = (list) => {
        if (list.length > 1 && list.length <= 10) {
            return(
                list.map(item => <p key={item.name}>{item.name}</p>)
            )
        } else if (list.length > 10) {
            return (
                <div>
                    <p>Too many matches, please be more specific</p>
                </div>
            )
        } else {
            return (
                list.map( country =>
                    <div key={country.population}>
                        <h1>{country.name}</h1>
                        <p>Capital: {country.capital}</p>
                        <p>Population: {country.population}</p>
                        <h2>Languages</h2>
                        <ul>
                            {country.languages.map(language =>
                                <li key={language.name}>{language.name}</li>
                            )}
                        </ul>
                        <img src={country.flag} alt="Country flag" width="200px"/>
                    </div>
                )
            )
        }
    }

    return(
        <div>
            <input value={newCountry} onChange={handleNewCountry} placeholder="Enter a country name"/>
            {countryToShow(filteredCountry)}
        </div>
    )
}


export default App