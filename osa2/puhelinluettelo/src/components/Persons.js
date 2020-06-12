import React from 'react'
import personService from '../services/persons'

const Persons = (props) => {
    return (
        <>
            <ul>
                {props.numbersToShow.map(person =>
                
                <p key={person.name}>
                    {person.name} {' '}
                    {person.number}
                    <button type="submit" onClick={() => {
            
                        if (window.confirm(`Haluatko varmasti poistaa yhteystiedon ${person.name}?`)) {
                            personService.deletePerson(person.id)
                            props.setPersons(props.persons.filter(p => p.id !== person.id))
                        } 
                        
                        }}>
                        Poista yhteystieto
                    </button>
                </p>
                )}
                
            </ul>
        </>
    )
}
export default Persons