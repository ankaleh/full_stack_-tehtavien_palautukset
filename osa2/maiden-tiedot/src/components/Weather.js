import React from 'react'

const Weather = (props) => {
    if (props.weather===null) {
        return (
            <>
                <p>Tietoja haetaan.</p>
            </>
        )
    } else {
        return (
            <>
                <ul>
                    <li>Lämpötila {props.weather.current.temperature} Celsius-astetta</li>
                    <li>Tuulen nopeus {props.weather.current.wind_speed} metriä sekunnissa suunnasta {props.weather.current.wind_dir}</li>
                    <p><img src={props.weather.current.weather_icons} alt='Säätä kuvaava merkki' height='50' width='50'/> </p>
                </ul>
            </>
        )
    }
    
}
export default Weather