import React from 'react'
import personService from '../services/persons'

const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber, handleNameChange, handleNumberChange, setMessage, setErrorMessage}) => {
    
    const addPerson = (event) => {
        event.preventDefault()
    
        var personsAdded = persons.filter((person) => person.name===`${newName}`)
        
        if (personsAdded.length===1) {
          
          if (window.confirm(`${newName} on jo lisätty puhelinluetteloon. Haluatko korvata vanhan numeron uudella?`)) {
            
            const person = personsAdded[0]
        
            const updatedPerson = {...person, number: newNumber}
            personService.update(person.id, updatedPerson)
                .then(response => {
                    setPersons(persons.map(p => p.id !== person.id ? p : response))
                    setNewName('')
                    setNewNumber('')
                    setMessage('Puhelinnumero päivitetty!')
                    setTimeout(() => {
                        setMessage(null)
                    }, 3000)
                })
                .catch(error => {
                    setErrorMessage('Yhteystieto on jo poistettu.')
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 3000)
                    
                })

          }
          
          return 
          
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
                setMessage('Uusi yhteystieto lisätty!')
                    setTimeout(() => {
                        setMessage(null)
                    }, 3000)
            })
            .catch(error => {
                // pääset käsiksi palvelimen palauttamaan virheilmoitusolioon näin
                const response = error.response.data
                console.log(response)
                setErrorMessage(JSON.stringify(response))
                    setTimeout(() => {
                        setErrorMessage(null)
                    }, 3000)

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
