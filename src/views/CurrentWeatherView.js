import React from "react";
import "../assets/values/current.css";

const CurrentWeatherView = ({ currentWeather, day }) => {
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
          {getWeatherIcon(currentWeather[day].weatherState)}
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
        {getWeatherIcon(currentWeather[day].weatherState)}
      </i>
      <p className="temperatureStyle">{currentWeather[day].temperature}°C</p>
    </div>
    <p className="weatherStateStyle">{currentWeather[day].weatherState}</p>
    <p className="detailStyle">Wind: {currentWeather[day].wind} km/h</p>
    <p className="detailStyle">Humidity: {currentWeather[day].humidity}%</p>
  </div>
);
};} 

function getWeatherIcon(weatherState) {
  // Add your logic here to map weather states to appropriate icons
  return "cloud";
}

export default CurrentWeatherView;
