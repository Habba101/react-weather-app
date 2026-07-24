import React from "react";
import './Weather.css';

export default function Weather() {
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

        <h1>Atteridgeville</h1>
        <ul>
          <li>Thursday 18:00</li>
          <li>Clear</li>
                 </ul>

 <div className="row mt-3">
 <div className="col-6">
  <div className="clearfix weather-temperature">
  
    <img src="https://www.gstatic.com/weather/conditions/v1/svg/clear_night_light.svg" alt="clear" className="float-start" />
   
   <div className="float-start">
    <span className="temperature">18</span>
    <span className="unit">°C</span>
  </div>
  </div>
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
