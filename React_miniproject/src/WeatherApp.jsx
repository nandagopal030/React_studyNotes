import  { useEffect } from 'react';
import { useState } from 'react';
// import PropTypes from 'prop-types';

//CSS
import './css/WeatherApp.css'


// IMages
import searchh from './assets/search.jpg'
import cloud from './assets/cloud.jpeg'
import humidityy from './assets/humididty.png'
import windd from './assets/wind.png'

const WeatherDetails = ({icon, temp, city ,country, lat, log ,wind, humidity, text}) =>{
    return (
        <>
         <div className='image'>
            <img src={icon} alt="cloud-image" />
        </div>
        <div className='temp'>{temp}°C</div>
        <div className="city">{text}</div>
        <div className="country">{country}</div>
        <div className="cord">
            <div>
                 <span className="lat">latitude</span>
                 <span>{lat}</span>
            </div>
            <div>
                 <span className="lat">longitude</span>
                 <span>{log}</span>
            </div>
        </div>
        <div className="data-container">
            <div className="element">
                <img className='icon' src={humidityy} style={{height:"60px", width:"50px"}}
                 alt="humidity" />
        <div className="data">
            <div className="humidity-percentage">{humidity}%</div>
            <div className="text">Humidity</div>
        </div>
            </div>
        <div className="element">
        <img className='icon' src={windd} style={{height:"60px", width:"50px"} }
            alt="wind" />
        <div className="data">
            <div className="wind-percentage"> {wind} km/ hr</div>
            <div className="text">Wind Speed</div>
        </div>
         </div>
        </div>
          <p className="copyight">
            Designed by Nanda
          </p>
        </>
    )
}
// WeatherDetails.propTypes = {
//   icon: PropTypes.string.isRequired,
//   temp: PropTypes.number.isRequired,
//   city: PropTypes.string.isRequired,        // ✅ uncomment this
//   text: PropTypes.string.isRequired,        // ✅ add this line
//   country: PropTypes.string.isRequired,
//   humidity: PropTypes.number.isRequired,
//   wind: PropTypes.number.isRequired,
//   lat: PropTypes.number.isRequired,
//   log: PropTypes.number.isRequired,
// };



export const WeatherApp = () => {
 
 let api_key =  "4ecd14922977d76efa2b072f80a9d8d8"
 const [text,setText] = useState("Goa");
 
 const [icon,setIcon] = useState(cloud);
 const [temp,setTemp] = useState(0);
 const [city,setCity] = useState("");
 const [country,setCountry] = useState("");
 const [lat,setLat] = useState(0);
 const [log,setLon] = useState(0);
 const [humidity,setHumidity] = useState(0);
 const [wind,setWind] = useState(0);
 const [cityNotFound,setCityNotFound] = useState(false);
 const [loading,setLoading] = useState(false);
  


 const search = async () => {
    setLoading(true);
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=${api_key}&units=Metric`
    setCity(text);
    try{
        let res = await fetch(url);
        let data = await res.json()
        // console.log(data);
        if(data.cod === "404"){
            console.log("City not Found");
            setCityNotFound(true);
            setLoading(false);
            return;
        }
    setHumidity(data.main.humidity);
    setWind(data.wind.speed);
    setTemp(Math.floor(data.main.temp));
    setCity(data.name);
    setCountry(data.sys.country);
    setLat(data.coord.lat);
    setLon(data.coord.lon);
    }catch(error){
        console.error("An error occured",error.message);
    }finally{
        setLoading(false)

    }

}
const handleCity = (c) =>{
    setText(c.target.value);
}
const handleKeyDown =(e) =>{
    if(e.key ==="Enter"){
        search();
    }
}

 useEffect(function () {
  search();  
 },[]);


  return (<> 
    <div className='container'>
        <div className='input-container'>
            <input onChange={handleCity}
            onKeyDown={handleKeyDown}
            value={text}
            type="text"
            className='cityInput'
            placeholder='Search City'
            />
        <div className='search-icon'>
        <img src={searchh}
        style={{width:"30px", height:"40px"}} alt="searchIcon"
        onClick = {() => search()}
        />
        </div>
        </div>
        <WeatherDetails icon= {icon} temp = {temp} city = {city} country= {country} lat = {lat} log = {log} wind = {wind} humidity = {humidity} text = {text}/>
    </div>
  </>)
}
