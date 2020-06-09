import React from 'react'
import Country from './Country'

const ListOfNames = (props) => {
    //console.log(props.countriesToShow.length)
    
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
                    <li key={country.numericCode}>{country.name}</li>)}
                </ul>
            </>
        )
    }
  }
  export default ListOfNames