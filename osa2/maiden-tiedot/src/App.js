
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ListOfNames from './components/ListOfNames'
import Filter from './components/Filter'

const App = () => {

  const [countries, setCountries] = useState([]) //tähän palvelimelta haetut maat  
  const [result, setResult] = useState('')
  
  const handleResultChange = (event) => {
    setResult(event.target.value)
  }
  
  const foundCountries = countries.filter((country) => 
    country.name.toString().toLowerCase().match(`${result.toString().toLowerCase()}`))

  useEffect(()=> {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  return (
    <div>
      <Filter value={result} handleResultChange={handleResultChange}/>
      <ListOfNames foundCountries={foundCountries} setResult={setResult}/>
    </div>
  );
}

export default App;

