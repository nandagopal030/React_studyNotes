import React from 'react'
import './myStyles.css'
function Stylesheets(props) {
    let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>StyleSHeets .. ..</h1>
    </div>
  )
}

export default Stylesheets
