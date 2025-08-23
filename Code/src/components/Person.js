import React from 'react'

function Person({person ,key}) {
  return (
    <div>
       {key}<h1>I am {person.name} and i am {person.age} yeard old. and my exertise in {person.skill}</h1>
    </div>
  )
}

export default Person
