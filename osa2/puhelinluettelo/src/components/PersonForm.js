import React from 'react'
import personService from '../services/persons'

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber, handleNameChange, handleNumberChange}) => {
    const addPerson = (event) => {
        event.preventDefault()
    
        var personsAdded = persons.filter((person) => person.name===`${newName}`)
        
        if (personsAdded.length===1) {
          
          if (window.confirm(`${newName} on jo lisätty puhelinluetteloon. Haluatko korvata vanhan numeron uudella?`)) {
            console.log(personsAdded)
            const person = personsAdded[0]
            console.log(person)
            
            const updatedPerson = {...person, number:newNumber}
            personService.update(person.id, updatedPerson)
                .then(response => {
                    setPersons(persons.map(p => p.id !== person.id ? p : response))
                    setNewName('')
                    setNewNumber('')
                })
            return window.alert('Puhelinnumero päivitetty!')
          }
          
        }
    
        const newPerson = {
          name: newName,
          number: newNumber
        }

        personService
            .create(newPerson)
            .then(response => {
                setPersons(persons.concat(response))
                setNewName('')
                setNewNumber('')
            })

    }

    return (
        <>
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

        </>


    )
}
export default PersonForm
