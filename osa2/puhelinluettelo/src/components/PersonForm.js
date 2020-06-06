import React from 'react'


const PersonForm = ({persons, setPersons, newName, setNewName, newNumber, setNewNumber, handleNameChange, handleNumberChange}) => {
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



