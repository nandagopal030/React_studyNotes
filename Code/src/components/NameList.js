import React from 'react'
import Person from './Person'

 function NameList() {
    const names = ['mickyu', 'janban', 'karman'];

    const persons = [
        {
            id:1,
            name: 'Acer',
            age: 30,
            skill: 'React'
        },
         {
            id:2,
            name: 'Bingo',
            age: 23,
            skill: 'React Native'
        },
         {
            id:3,
            name: 'Chinga',
            age: 60,
            skill: 'Flutter'
        },
         {
            id:4,
            name: 'meesat',
            age: 630,
            skill: 'Application dev'
        },
        
    ]

    // const names = ['mickyu', 'janban', 'karman'];
    // const nameList = names.map((name) => <h2>{name}</h2>)
    // const personList = persons.map((person) => <Person key ={person.name} person ={person} />)
    const nameList = names.map((name,index) => <h2 key ={index}>{index},{name} </h2>)
    return (
        <div>
            {nameList}
        </div>
    )
}

export default NameList
