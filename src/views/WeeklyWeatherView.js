import React from "react";
import styles from "../assets/values/WeeklyWeatherView.module.css";
import App from "../App";

const WeeklyWeatherView = ({ weeklyWeather }) => {
  return (
    <div className={styles.weeklyContainerStyle}>
      <div className={styles.weeklyArrayContainer}>
        {weeklyWeather.map((dayWeather, index) => (
          <div key={index} onClick={() => App.changeDay(index)} className={styles.weeklyDayStyle}>
            <p className={styles.dayName}>{getDayName(dayWeather.date)}</p>
            <div>
              <p className={styles.weatherStateStyle}>{dayWeather.weatherState}</p>
              <p className={styles.temperatureStyle}>{dayWeather.temperature}°C</p>
            </div>
            {dayWeather.weatherLogo ? (
              <img
                src={dayWeather.weatherLogo} /* Replace with actual logo URL */
                alt="Weather Logo"
                className={styles.weatherLogo}
              />
            ) : (
              <p className={styles.weatherStateStyle}>{dayWeather.weatherState}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

function getDayName(dateString) {
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const date = new Date(dateString);
  return days[date.getDay()];
}

export default WeeklyWeatherView;
