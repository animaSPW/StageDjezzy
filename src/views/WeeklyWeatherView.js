import React from "react";
import styles from "../assets/values/WeeklyWeatherView.module.css";
import { useDispatch } from "react-redux";
import {changeDay,getDayName } from "../viewModels/WeeklyDispatch";
/* the dispatch is a hook that is used to dispatch actions to the store, 
in  our example we are dispatching the action changement
    which is a function that takes the index of the day that is clicked and returns it to the store 
    the store then updates the state with the new index
    the getDayName function is used to get the name of the day from the date that is passed to it
    */
const WeeklyWeatherView = ({ weeklyWeather }) => {
  const dispatch = useDispatch();
  return (
    <div className={styles.weeklyContainerStyle}>
      <div className={styles.weeklyArrayContainer}>
        {weeklyWeather.map((dayWeather, index) => (
          <div key={index} onClick={() => changeDay(dispatch,index)} className={styles.weeklyDayStyle}>
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


export default WeeklyWeatherView;
