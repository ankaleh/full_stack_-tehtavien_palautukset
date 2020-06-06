import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', 
      number: '0123456789'},
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const [ result, setResult] = useState('')
  const [ showAll, setShowAll ] = useState(true)

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

      <h2>Etsi yhteystieto</h2>
      <Filter result={result} handleResultChange={handleResultChange}/>

      <h3>Yhteystiedot</h3>
      <Persons numbersToShow={numbersToShow} />

      <h3>Lisää uusi yhteystieto</h3>
      <PersonForm persons = {persons} setPersons= {setPersons} newName={newName} setNewName={setNewName} newNumber={newNumber} setNewNumber={setNewNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
    </div>

  )

}

export default App

