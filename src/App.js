import CurrentWeatherView from './views/CurrentWeatherView';
import WeeklyWeatherView from './views/WeeklyWeatherView';
import HourlyWeatherView from './views/HourlyWeatherView';
import Load from './views/loadingPage';
import React, { useEffect, useState } from "react";
import WeatherVM from "./viewModels/WeatherVM";
import { useSelector } from "react-redux";

function App() {

  const weatherVM = WeatherVM();
  const [weeklyWeather, setWeeklyWeather] = useState(null);
  const daydisplayed = useSelector(state => state);
/* weather vm is a view model that fetches the data from the api and returns it to the app.js
   then passes the data to the views to be displayed
  the useSelector is a hook that gets the state ( in our case its the selected day ) from the store and returns it to the app.js
  the app.js then passes the state to the views to be displayed*/ 


  useEffect(() => {
    weatherVM.fetchData().then((data) => {
      setWeeklyWeather(data);
      
    });
  }, []);

  
  if (!weeklyWeather) {
    return (
      <div>
        <Load />
      </div>
    );
  }
  return (
    <div>
      {weeklyWeather && <CurrentWeatherView currentWeather={weeklyWeather} day ={daydisplayed} />}
      {weeklyWeather && <WeeklyWeatherView weeklyWeather={weeklyWeather} />}
      {weeklyWeather && <HourlyWeatherView HourlylyWeather={weeklyWeather}day ={daydisplayed} />}
    </div>
  );
}

export default App;