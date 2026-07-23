import React from "react";
import './Weather.css';

export default function Weather() {
  return (
    <div className="Weather">
        
<form >
    <div className="row">
        <div className="col-9">
    <input type="search" placeholder="Search for a city..." className="form-control" />
      </div>
    <div className="col-3">
    <input type="submit" value="Search" className="btn btn-primary" />
    </div>
    </div>
   
</form>

        <h1>Atteridgeville</h1>
        <ul>
          <li>Thursday 18:00</li>
          <li>Clear</li>
                 </ul>

 <div className="row">
 <div className="col-6">
    <img src="https://www.gstatic.com/weather/conditions/v1/svg/clear_night_light.svg" alt="clear" />
    18°C
 </div>
 <div className="col-6">
    <ul>
      <li>Precipitation: 0%</li>
      <li>Humidity: 42%</li>
      <li>Wind: 8 km/h</li>
    </ul>
 </div>
     </div>
    </div>
  );
}