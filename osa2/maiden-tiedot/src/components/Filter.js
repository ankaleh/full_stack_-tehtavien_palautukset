import React from 'react'

const Filter = ({value, handleResultChange}) => {


    return (
        <div>
            Kirjoita maan englanninkielinen nimi tai sen osa: <input value={value} onChange={handleResultChange}/>
        </div>
    )
}
export default Filter