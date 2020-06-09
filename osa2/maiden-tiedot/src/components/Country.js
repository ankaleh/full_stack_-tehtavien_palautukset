import React from 'react'

const Country = (props) => {
    return (
      <>
        {props.foundCountries.map((country) => 
        <div key={country.numericCode}>
  
          <h2>{country.name}</h2>
          <p><b>Pääkaupunki</b> {country.capital}</p>
          <p><b>Asukasluku</b> {country.population}</p>
          <p><b>Viralliset kielet</b></p>
            <div>{country.languages.map((language) => 
              <ul key={language.nativeName}>
                <li>{language.name}</li>
              </ul>)}
            </div>
          <p><b>Lippu</b></p> 
          <div>
            <img src={country.flag} alt='Maan lippu' height='50' width='70'/>
          </div>
  
        </div>)}
      </>
    ) 
}
export default Country