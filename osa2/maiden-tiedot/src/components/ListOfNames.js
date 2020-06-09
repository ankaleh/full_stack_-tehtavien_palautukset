import React from 'react'
import Country from './Country'

const ListOfNames = (props) => {

    if (props.foundCountries.length > 10) {
        return (
            <p>Et ole vielä antanut tarpeeksi merkkejä.</p>
        )
    }
    if (props.foundCountries.length === 0) {
        return (
            <p>Haku ei tuottanut yhtään tulosta.</p>
        )
    }
    if (props.foundCountries.length===1) {
        return (
            <div>
                <Country foundCountries={props.foundCountries}/>
            </div>
        )
    } else {
        return  (
            <>
                <p>Haulla löytyneet maat:</p>
                <ul>
                    {props.foundCountries.map((country) => 
                    <p key={country.numericCode}>{country.name} 
                        <button onClick={() => {props.setResult(country.name)}}>
                        Näytä maan tiedot
                        </button>
                    </p>)}
                </ul>
            </>
        )
    }
  }
  export default ListOfNames