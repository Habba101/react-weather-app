import React, { useState, useEffect } from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherForecastDay(props) {
let [forecast, setForecast] = useState(null);

    function formatDay(timestamp) {
  let date = new Date(timestamp * 1000);
  let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  return days[date.getDay()];
}

    return (
        <div>
        <div className="WeatherForecast-day"> {formatDay(props.data.dt)} 
                </div> 
                <WeatherIcon code={props.data.weather[0].icon} size={36} />
                    <div className="WeatherForecast-temperature">
                    <span className="WeatherForecast-temperature-max">
                      {Math.round(props.data.main.temp_max)}°
                    </span> 
                    <span className="WeatherForecast-temperature-min">
                        {Math.round(props.data.main.temp_min)}°
                    </span> 
                    </div>
                    </div>
    );
}