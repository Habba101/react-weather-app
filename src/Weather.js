import React, {useState} from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
   const [weatherData, setWeatherData] = useState({ready: false});
   const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
  setWeatherData({
    ready: true,
  temperature: response.data.main.temp,
  wind: response.data.wind.speed,
  date: new Date(response.data.dt * 1000),
  city: response.data.name,
  description: response.data.weather[0].description,
  iconUrl: "https://www.gstatic.com/weather/conditions/v1/svg/sunny_light.svg",
  humidity: response.data.main.humidity
});
}

function search() {
 const apiKey = "c4b982f56e50abac4ecb368281d8df73";
   let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(handleResponse);
}

function handleSubmit(event) {
  event.preventDefault();
  } 

function handleCityChange(event) {
  setCity(event.target.value);
  search();
}

if (weatherData.ready) {
return (
    <div className="Weather">   
<form onSubmit={handleSubmit}>
     <div className="row">
        <div className="col-9">
    <input type="search" placeholder="Search for a city..." className="form-control" autoFocus="on" onChange={handleCityChange} />
      </div>
    <div className="col-3">
    <input type="submit" value="Search" className="btn btn-primary w-100" />
    </div>
    </div> 
</form>
 <WeatherInfo data={weatherData} />
        
      </div>
     );
} else {
search();
return "Loading...";
}
}