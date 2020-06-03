import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const StatisticsLine = (props) => {
  return (
  <p>{props.text} {props.value}</p>
  )

}

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>{props.text}</button>
  )
}

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
      <StatisticsLine text='Erinomaista' value={props.good}/>
      <StatisticsLine text='Kiitos ruoasta' value={props.neutral}/>
      <StatisticsLine text='Tällä kertaa ei maistunut' value={props.bad}/>
      <StatisticsLine text='Palautteita yhteensä' value={sum()}/>
      <StatisticsLine text='Keskiarvo' value={avg()}/>
      <StatisticsLine text='Myönteisten palautteiden prosenttiosuus' value={posit()}/>
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
      <Button handleClick={handleGoodClick} text='Erinomaista'/>
      <Button handleClick={handleNeutralClick} text='Kiitos ruoasta'/>
      <Button handleClick={handleBadClick} text='Tällä kertaa ei maistunut'/>

      <h2>Tilasto</h2>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )

}
  ReactDOM.render(<App />, document.getElementById('root'))
