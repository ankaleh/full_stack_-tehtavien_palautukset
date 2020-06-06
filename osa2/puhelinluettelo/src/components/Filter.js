import React from 'react'

const Filter = ({result, handleResultChange}) => {


    return (
        <div>
            Kirjoita nimi tai sen osa: <input value={result} onChange={handleResultChange}/>
        </div>
    )
}
export default Filter