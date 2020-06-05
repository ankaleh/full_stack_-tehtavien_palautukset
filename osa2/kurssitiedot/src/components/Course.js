import React from 'react'

const Header = (props) => {
    return (
      <>
        <h1>{props.course}</h1>
      </>
    )
  }
  
  const Content= ({parts}) => {
    
    return (
      <>
        {parts.map(part =>
          <Part key = {part.id} part={part.name} exercises={part.exercises}/>
          )}
      </>
    )
  }

  const Part = ({part, exercises}) => {
    return (
      <>
        <p>{part} {exercises}</p>
      </>
    )
  }

  const Total = ({parts}) => {
    return (
      <>
        <p>Number of exercises {parts.reduce((sum, part) => sum + part.exercises,0)}</p>
      </>
    )
  }

  const Course = ({course}) => {
      
      return (
        <>
          <Header course={course.name}/>
          <Content parts={course.parts}/>
          <Total parts={course.parts}/> 
        </>
      )
  }


  export default Course