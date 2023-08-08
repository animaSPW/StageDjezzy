import React from "react";
import "../assets/values/current.css";

const CurrentWeatherView = ({ currentWeather, day }) => {
  /* this is the current weather view that displays the current weather data,
  it takes it and the selected day as props
  if the day is 0 then it displays the current weather data for the current day
  else it displays the rest , the first day differentiate from the other because it has the current time*/
  if ( day == 0 ) {
  return (
    <div className="containerStyle">
      <div className="weatherHeaderStyle">
        <p>{currentWeather[day].city}</p>
        <p>{currentWeather[day].date}</p>
        <p className="detailStyle">{currentWeather[day].time}</p>
      </div>
      <div className="temperatureStyle">
        <i className="material-icons weatherStateStyle">
          <img src={currentWeather[day].weatherLogo} alt="Weather Logo" />
        </i>
        <p className="temperatureStyle">{currentWeather[day].temperature}°C</p>
      </div>
      <p className="weatherStateStyle">{currentWeather[day].weatherState}</p>
      <p className="detailStyle">Wind: {currentWeather[day].wind} km/h</p>
      <p className="detailStyle">Humidity: {currentWeather[day].humidity}%</p>
    </div>
  );
}
else { return (
  <div className="containerStyle">
    <div className="weatherHeaderStyle">
      <p>{currentWeather[day].city}</p>
      <p>{currentWeather[day].date}</p>
          </div>
    <div className="temperatureStyle">
      <i className="material-icons weatherStateStyle">
        <img src={currentWeather[day].weatherLogo} alt="Weather Logo" />
        
      </i>
      <p className="temperatureStyle">{currentWeather[day].temperature}°C</p>
    </div>
    <p className="weatherStateStyle">{currentWeather[day].weatherState}</p>
    <p className="detailStyle">Wind: {currentWeather[day].wind} km/h</p>
    <p className="detailStyle">Humidity: {currentWeather[day].humidity}%</p>
  </div>
);
};} 



export default CurrentWeatherView;
