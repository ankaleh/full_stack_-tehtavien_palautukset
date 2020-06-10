import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Weather from './Weather'

const Country = (props) => {
    const [weather, setWeather] = useState(null)
    const api_key = process.env.REACT_APP_API_KEY
    const query = `${api_key}&query=${props.foundCountries.map((country) => country.name)}`

    useEffect(()=> {
        axios
            .get(`http://api.weatherstack.com/current?access_key=${query}`)
            .then(response => {
                setWeather(response.data)
            })
    }, [query])

    return (
      <>
      
        {props.foundCountries.map((country) => 
        
        <div key={country.numericCode}> 
          <h2>{country.name}</h2>
          <p><b>Pääkaupunki</b> {country.capital}</p>
          <p><b>Asukasluku</b> {country.population}</p>
          <p><b>Viralliset kielet</b></p>
            <div>{country.languages.map((language) => 
              <ul key={language.nativeName}>
                <li>{language.name}</li>
              </ul>)}
            </div>
          <p><b>Lippu</b></p> 
          <div>
            <img src={country.flag} alt='Maan lippu' height='50' width='70'/>
          </div>
          <p><b>Sää pääkaupungissa</b></p>
          <Weather weather={weather}/>
        </div>)}
    
      </>
    ) 
}
export default Country