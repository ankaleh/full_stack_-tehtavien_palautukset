import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Statistics = (props) => {
  
  const sum = () => {
    return props.good+props.neutral+props.bad
  }

  if (sum()===0) {
    return (
    <div>Palautetta ei ole vielä annettu.</div>
    )
  }

  const avg = () => {
    return (props.good+(props.bad*-1)) / sum()
  }

  const posit = () => {
    if (props.good===0) {
      return 0
    }
    
    return props.good/sum()*100
  }

  return (
    <div>
      <p>Erinomaista {props.good}</p> 
      <p>Kiitos ruuasta {props.neutral}</p>
      <p>Tällä kertaa ei maistunut {props.bad}</p>
      <p>Palautteita annettu yhteensä {sum()}</p>
      <p>Keskiarvo {avg()}</p>
      <p>Myönteisten palautteiden prosenttiosuus {posit()}</p>
    </div>
    )
} 

const App = (props) => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {setGood(good+1)}
  const handleNeutralClick = () => {setNeutral(neutral+1)}
  const handleBadClick = () => {setBad(bad+1)}
  
  return (
    <div>
      <h2>Anna palautetta</h2>
      <button onClick={handleGoodClick}>Erinomaista</button>
      <button onClick={handleNeutralClick}>Kiitos ruuasta</button>
      <button onClick={handleBadClick}>Tällä kertaa ei maistunut</button>

      <h2>Tilasto</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )

}
  ReactDOM.render(<App />, document.getElementById('root'))
