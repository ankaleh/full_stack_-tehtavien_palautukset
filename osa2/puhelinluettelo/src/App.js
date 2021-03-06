import React, { useState, useEffect } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'
import personService from './services/persons'
import Notification from './components/Notification'

const App = () => {
  const [ persons, setPersons] = useState([]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const [ result, setResult] = useState('')
  const [ showAll, setShowAll ] = useState(true)

  const [ message, setMessage] = useState(null)
  const [ errorMessage, setErrorMessage] = useState(null)

  useEffect(()=> {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  
  }, [])

  const numbersToShow = showAll
    ? persons 
    : persons.filter((person) => person.name.toString().toLowerCase().match(`${result.toString().toLowerCase()}`))

  const handleResultChange = (event) => {
    setShowAll(false)
    setResult(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  
  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <Notification message = {message} errorMessage={errorMessage}/>
      <h2>Etsi yhteystieto</h2>
      <Filter result={result} handleResultChange={handleResultChange}/>

      <h3>Yhteystiedot</h3>
      <Persons numbersToShow={numbersToShow} persons={persons} setPersons={setPersons} setMessage={setMessage} setErrorMessage={setErrorMessage}/>

      <h3>Lisää uusi yhteystieto</h3>
      <PersonForm persons = {persons} setPersons={setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange} setMessage={setMessage} setErrorMessage={setErrorMessage}/>
      
    </div>

  )

}

export default App

