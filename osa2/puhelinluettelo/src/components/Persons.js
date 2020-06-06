import React from 'react'

const Persons = ({numbersToShow}) => {

    
    return (
        <>
            <ul>
                {numbersToShow.map(person =>
                <p key={person.name}>{person.name} {person.number}</p>
                )}
            </ul>
        </>
    )
}
export default Persons