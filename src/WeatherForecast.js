import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
    const [loaded, setLoaded] = useState(false);
const [forecast, setForecast] = useState(null);

function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

function handleResponse(response) {
      console.log("Forecast API");
console.log(response.data);
 setForecast(response.data);
  setLoaded(true);
}

console.log(props)

    let apiKey = "04a431911affb5c41b1586520bf15220";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  
useEffect(() => {
  axios.get(apiUrl).then(handleResponse);
}, [props.coordinates]);

if (!loaded) {
  return "Loading forecast...";
}

    return (
        <div className="WeatherForecast">
            <div className="row">
              <div className="col">
               <div className="WeatherForecast-day"> {formatDay(forecast.list[0].dt)} 
                </div> 
                <WeatherIcon code={forecast.list[0].weather[0].icon} size={36} />
                    <div className="WeatherForecast-temperature">
                    <span className="WeatherForecast-temperature-max">
                      {Math.round(forecast.list[0].main.temp_max)}°
                    </span> 
                    <span className="WeatherForecast-temperature-min">
                        {Math.round(forecast.list[0].main.temp_min)}°
                    </span> 
                    </div>
                </div>
            </div>
        </div>
    );
}