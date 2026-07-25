import React, {useState} from "react";
import axios from "axios";
import './Weather.css';

export default function Weather(props) {
   const [weatherData, setWeatherData] = useState({ready: false});

  function handleResponse(response) {
  console.log(response.data);
  setWeatherData({
    ready: true,
  temperature: response.data.main.temp,
  wind: response.data.wind.speed,
  date: "Saturday 15:45",
  city: response.data.name,
  description: response.data.weather[0].description,
  iconUrl: "https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg",
  humidity: response.data.main.humidity
});
}

if (weatherData.ready) {
return (
    <div className="Weather">   
<form >
    <div className="row">
        <div className="col-9">
    <input type="search" placeholder="Search for a city..." className="form-control" autoFocus="on" />
      </div>
    <div className="col-3">
    <input type="submit" value="Search" className="btn btn-primary w-100" />
    </div>
    </div> 
</form>

        <h1>{weatherData.city}</h1>
        <ul>
          <li>{weatherData.date}</li>
          <li className="text-capitalize">{weatherData.description}</li>
                 </ul>

 <div className="row mt-3">
 <div className="col-6">
  <div className="clearfix weather-temperature">
  
    <img src={weatherData.iconUrl} alt={weatherData.description} className="float-start" />
   
   <div className="float-start">
    <span className="temperature">{Math.round(weatherData.temperature)}</span>
    <span className="unit">°C</span>
  </div>
  </div>
 </div>
 
 <div className="col-6">
    <ul>
      <li>Humidity: {weatherData.humidity}%</li>
      <li>Wind: {Math.round(weatherData.wind)} km/h</li>
    </ul>
 </div>
     </div>
      </div>
     );
} else {
const apiKey = "c4b982f56e50abac4ecb368281d8df73";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);

return "Loading...";
}
}