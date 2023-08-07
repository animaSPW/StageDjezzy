import CurrentWeatherView from './views/CurrentWeatherView';
import Load from './views/loadingPage';
import './assets/values/styles.css';
import React, { useEffect, useState } from "react";
import WeatherVM from "./viewModels/WeatherVM";
function App() {
  const weatherVM = WeatherVM();
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState(null);

  useEffect(() => {
    weatherVM.fetchData().then((data) => {
      setCurrentWeather(data[0]);
      setWeeklyWeather(data);
    });
  }, []);

  
  if (!currentWeather) {
    return (
      <div>
        <Load />
      </div>
    );
  }
  return (
    <div>
      {currentWeather && <CurrentWeatherView currentWeather={currentWeather} />}
    </div>
  );
}

export default App;