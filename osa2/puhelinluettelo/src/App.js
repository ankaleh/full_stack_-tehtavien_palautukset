import React, { useState } from 'react'

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

  const addPerson = (event) => {
    event.preventDefault()

    var personsAdded = persons.filter((person) => person.name===`${newName}`)
    
    if (personsAdded.length===1) {
      return (
      window.alert(`${newName} on jo lisätty puhelinluetteloon.`)
      )
    }

    const newPerson = {
      name: newName,
      number: newNumber
    }

    setPersons(persons.concat(newPerson))
    setNewName('')
    setNewNumber('')
  
  }

  return (
    <div>
      <h1>Puhelinluettelo</h1>
      <h2>Etsi yhteystieto</h2>
      <div>
          Kirjoita nimi: <input value={result} onChange={handleResultChange}/>
      </div>
      <h3>Yhteystiedot</h3>
        <ul>
          {numbersToShow.map(person =>
            <p key={person.name}>{person.name} {person.number}</p>
          )}
        </ul>

      <h3>Lisää uusi yhteystieto</h3>
      <form>
        <div>
          nimi: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          numero: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
      
        <div>
          <button type="submit" onClick={addPerson}>Lisää</button>
        </div>
      </form>
      
    </div>
  )

}

export default App

