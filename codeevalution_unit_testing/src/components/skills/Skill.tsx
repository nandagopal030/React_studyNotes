import React, { useState, useEffect } from 'react'
import { skillTypes } from '../skills/Skill.types';
function Skill(props: skillTypes) {
  const { skillName } = props;
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoggedIn(true);
    },1001)
  },[])

  return (
    <div>
      <h1>Skill</h1>
      <ul>
        {skillName.map((skill) => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
      {isLoggedIn ? (
        <button>Start Learning bro</button>
      ) : (
        <button onClick={() => setIsLoggedIn(true)}>Login</button>
      )}
    </div>
  )
}

export default Skill