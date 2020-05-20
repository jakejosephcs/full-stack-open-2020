import React, { useState, useEffect } from 'react';
import axios from 'axios'

const App = () => {
    const [ country, setCountry ] = useState([])
    const [ searchCountry, setSearchCountry ] = useState("")
    const [ filteredCountries, setFilteredCountries ] = useState([]) 
    const [ displayText, setDisplayText ] = useState([])
    const [ grabCapital, setGrabCapital ] = useState("Canada")
    const [ weatherOfCapital, setWeatherOfCapital ] = useState("")
    const [ capitalWeatherIcon, setCapitalWeatherIcon ] = useState("")
    const [ capitalWindSpeedDirection, setCapitalWindSpeedDirection] = useState("")

    const api_key = process.env.REACT_APP_API_KEY

    useEffect(() => {
        axios
            .get('http://localhost:3001/countries')
            .then(response => {
                setCountry(response.data)
            })
    }, []);

    useEffect(() => {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${api_key}&query=${grabCapital}`)
            .then(response => {
                setWeatherOfCapital(response.data.current.temperature)
                setCapitalWeatherIcon(response.data.current.weather_icons[0])
                setCapitalWindSpeedDirection(`${response.data.current.wind_speed} mph direction ${response.data.current.wind_dir}`)
            })
    }, [grabCapital, api_key])


    useEffect(() => {
        setFilteredCountries(country.filter(place => place.name.toLowerCase().includes(searchCountry.toLowerCase())))
    }, [searchCountry, country])

    useEffect(() => {
        if (filteredCountries.length > 10) {
            setDisplayText("Too many matches, please narrow your search")
        } else if (filteredCountries.length > 1 && filteredCountries.length <= 10) {
            displayCountryNameOnly(filteredCountries)
        } else {
            filteredCountries.map(place => displayCountryInfo(place))
        }
    }, [filteredCountries])

    const handleSetSearchCountry = (e) => {
        setSearchCountry(e.target.value)
    }

    const handleShowCountry = (e) => {
        const result = filteredCountries.filter(place => place.name === e.target.value)
        result.map(place =>  displayCountryInfo(place))
    } 

    const displayCountryNameOnly = (listOfCountries) => {
        const result = listOfCountries.map(location => 
            (
                <div key={location.name}>
                    <p>{location.name}</p>
                    <button value={location.name} onClick={handleShowCountry}>Show</button>
                </div>
            )
        )
        setDisplayText(result)
    }

    const displayCountryInfo = (place) => {
        setGrabCapital(place.name)
        setDisplayText([
            <div key={place.name}>
                <h1>{place.name}</h1>
                <p>Capital: {place.capital}</p>
                <p>Population: {place.population}</p>
                <h2>Spoken Languages</h2>
                <ul>
                    {place.languages.map(language => <li key={language.name}>{language.name}</li>)}
                </ul>
                <img src={place.flag} alt={place.name} width="200px"/>
                <h2>Weather in {place.capital}</h2>
                <p>Temperature: {weatherOfCapital} Celcius</p>
                <img src={capitalWeatherIcon} alt="weather"></img>
                <p>Wind: {capitalWindSpeedDirection}</p>
            </div>
        ])
    }

        
    return(
        <>
            <div>
                <input type="text" placeholder="Enter Country Name..." onChange={handleSetSearchCountry}/>
            </div>
            <div>
                {displayText}
            </div>
        </>

    )
}


export default App