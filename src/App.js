import CurrentWeatherView from './views/CurrentWeatherView';
import WeeklyWeatherView from './views/WeeklyWeatherView';
import HourlyWeatherView from './views/HourlyWeatherView';
import Load from './views/loadingPage';
import React, { useEffect, useState } from "react";
import WeatherVM from "./viewModels/WeatherVM";
import { useSelector, useDispatch } from "react-redux";
import { changement } from './reducers/reducers';
function App() {
  console.log("App");
  const dispatch = useDispatch();
  const weatherVM = WeatherVM();
  const [weeklyWeather, setWeeklyWeather] = useState(null);
  const daydisplayed = useSelector(state => state);
  console.log(`dayDisplay : ${daydisplayed}`)
  

    const changeDay = (index) => {
        console.log(index)
        dispatch(changement(index))
    }

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