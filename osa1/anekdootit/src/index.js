import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => {
  return (
  <button onClick={props.handleClick}>{props.text}</button>
  )
}

const TheMostVoted = (props) => {
  
  const theBiggest = () => {
    let theBiggest = 0
    props.table.forEach(value => {
      if (value > theBiggest) {
        theBiggest=value
        
      }
    })

    return theBiggest
  }

  if (theBiggest()===0) {
    return (
      <>
      <p>Yhtään ääntä ei ole annettu.</p>
      </>
    )
  }

  const index = () => {
    return props.table.indexOf(theBiggest())
  }

  return (
    <>
      <p>{props.anecdotes[index()]}</p>
      <p>Kaskulla ääniä {theBiggest()}</p>
    </>
  )

}

const App = (props) => {
  const random = Math.floor((Math.random() * 6)+1)
  const [selected, setSelected] = useState(random-1)

  const handleNext = () => { 
    console.log(random)
    setSelected(random-1)
  }
 
  const [table, setTable] = useState([0,0,0,0,0,0])
  
  const handleVote = () => {
    const copy = [...table]
    copy[selected]+=1 
    setTable(copy)
    console.log(copy)
  }

  return (
    <div>
      <h2>Päivän kasku</h2>
      <p>{props.anecdotes[selected]}</p>
      <Button handleClick={handleNext} text='Seuraava kasku'/>
      <Button handleClick={handleVote} text='Äänestä'/>
      
      <h2>Eniten ääniä saanut kasku</h2>
      <TheMostVoted table={table} anecdotes={anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)