import React from 'react'
import search from '../images/search.png'
import cloud from '../images/cloud.jpg'
import './css/WeatherApp.css'

export const WeatherApp = () => {
  return (
    <div className='container'>
      <div className='search-field'>
        <input type="text" 
        className='cityInput'
        placeholder='searchCity'/>
      </div>
        
      
      <img className='search-icon' src={search} style={{height : "30px", width: "30px"}} alt="" />
    </div>
  )
}
