import React, { useState } from 'react'
import ReactDOM from 'react-dom'



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
      <button onClick={handleBadClick}>Tällä kertaa ei maistunut!</button>

      <h2>Tilasto</h2>
      <p>Erinomaista {good}</p> 
      <p>Kiitos ruuasta {neutral}</p>
      <p>Tällä kertaa ei maistunut {bad}</p>

    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)