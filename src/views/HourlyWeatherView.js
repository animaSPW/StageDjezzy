import React from 'react';
import styles from "../assets/values/HourlyWeatherView.module.css";

const WeatherDayView = ({ HourlylyWeather, day }) => {
  // Get the hourly weather data for the selected day
  const selectedDayWeather = HourlylyWeather[day];

  return (
    <div>
      <div className={styles["hourly-weather"]}>
        {selectedDayWeather.hourlyWeatherArray.map(hourData => (
          <div key={hourData.hour} className={styles["hour"]}>
            <p>{hourData.hour}:00</p>
            <p><img src={hourData.weatherLogo} alt="Weather Logo" className={styles.weatherLogo} /></p>
            <p>{hourData.temperature}°C</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WeatherDayView;
