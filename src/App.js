import CurrentWeatherView from './views/CurrentWeatherView';
import WeeklyWeatherView from './views/WeeklyWeatherView';
import Load from './views/loadingPage';
import React, { useEffect, useState } from "react";
import WeatherVM from "./viewModels/WeatherVM";
import { useSelector, useDispatch } from "react-redux";
import { changement } from './reducers/reducers';
function App() {
  console.log("App");
  const dispatch = useDispatch();
  const weatherVM = WeatherVM();
  const [currentWeather, setCurrentWeather] = useState(null);
  const [weeklyWeather, setWeeklyWeather] = useState(null);
  const daydisplayed = useSelector(state => state);
  

    const changeDay = (index) => {
        console.log(index)
        dispatch(changement(index))
    }

  useEffect(() => {
    weatherVM.fetchData().then((data) => {
      setCurrentWeather(data[daydisplayed]);
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
      {currentWeather && <CurrentWeatherView currentWeather={currentWeather} day ={daydisplayed} />}
      {weeklyWeather && <WeeklyWeatherView weeklyWeather={weeklyWeather} />}
    </div>
  );
}

export default App;