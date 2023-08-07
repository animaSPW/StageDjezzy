import React from "react";
import "../assets/values/current.css";

const CurrentWeatherView = ({ currentWeather, day }) => {
  if ( day == 0 ) {
  return (
    <div className="containerStyle">
      <div className="weatherHeaderStyle">
        <p>{currentWeather.city}</p>
        <p>{currentWeather.date}</p>
        <p className="detailStyle">{currentWeather.time}</p>
      </div>
      <div className="temperatureStyle">
        <i className="material-icons weatherStateStyle">
          {getWeatherIcon(currentWeather.weatherState)}
        </i>
        <p className="temperatureStyle">{currentWeather.temperature}°C</p>
      </div>
      <p className="weatherStateStyle">{currentWeather.weatherState}</p>
      <p className="detailStyle">Wind: {currentWeather.wind} km/h</p>
      <p className="detailStyle">Humidity: {currentWeather.humidity}%</p>
    </div>
  );
}
else { return (
  <div className="containerStyle">
    <div className="weatherHeaderStyle">
      <p>{currentWeather.city}</p>
      <p>{currentWeather.date}</p>
          </div>
    <div className="temperatureStyle">
      <i className="material-icons weatherStateStyle">
        {getWeatherIcon(currentWeather.weatherState)}
      </i>
      <p className="temperatureStyle">{currentWeather.temperature}°C</p>
    </div>
    <p className="weatherStateStyle">{currentWeather.weatherState}</p>
    <p className="detailStyle">Wind: {currentWeather.wind} km/h</p>
    <p className="detailStyle">Humidity: {currentWeather.humidity}%</p>
  </div>
);
};} 

function getWeatherIcon(weatherState) {
  // Add your logic here to map weather states to appropriate icons
  return "cloud";
}

export default CurrentWeatherView;
