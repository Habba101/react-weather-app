import React, { useState, useEffect } from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
  console.log(response.data);

  setForecast(response.data);
  setLoaded(true);
}

  useEffect(() => {
  let apiKey = "04a431911affb5c41b1586520bf15220";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(handleResponse);
}, [props.coordinates]);

  if (!loaded) {
  return null;
}

  return (
    <div className="WeatherForecast">
      <div className="row">
       {forecast.list
  .filter(function (forecast, index) {
    return index % 8 === 0;
  })
  .map(function (dailyForecast, index) {
          return (
            <div className="col" key={index}>
              <WeatherForecastDay data={dailyForecast} />
            </div>
          );
        })}
      </div>
    </div>
    );
  }
    