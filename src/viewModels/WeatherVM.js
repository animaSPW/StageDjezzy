/**
 * you can export functions, variables, state variables...
 * you don't necessarily need to export everything, if a function is only used internally in a viewmodel, no need to export it
 */

import getLocation from  "../helpers/location"
import {Weather, hourlyWeather} from "../models/Weather";
import getWeatherForcast from "../repositories/repo"

export default function WeatherVM() {

  async function fetchData() {
    try {
      const locationn = await getLocation();
      
      const result= await getWeatherForcast(locationn);
      return fillWeatherWeekly(result, fillWeather(result));
      
      
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  function fillHourlyWeatherArray(result,day) {
    const hourlyWeatherArray = [];
  
    for (let i = 0; i < 24; i++) {
      const hour = i;
      const temperature = result.forecast.forecastday[day].hour[i].temp_c;
      const weatherState = result.forecast.forecastday[day].hour[i].condition.text;
      const weatherLogo = result.forecast.forecastday[day].hour[i].condition.icon;
  
      const hourlyWeatherInstance = new hourlyWeather(hour, temperature, weatherState, weatherLogo);
      hourlyWeatherArray.push(hourlyWeatherInstance);
    }
  
    return hourlyWeatherArray;
  }
  
  function fillWeather(result) {
    const city = result.location.name;
    const date = result.location.localtime.split(' ')[0];
    const time = result.location.localtime.split(' ')[1];
    const temperature = result.current.temp_c;
    const averageTemp = result.forecast.forecastday[0].day.avgtemp_c;
    const wind = result.current.wind_kph;
    const humidity = result.current.humidity;
    const weatherState = result.current.condition.text;
    const weatherLogo = result.current.condition.icon;
  
    const hourlyWeatherArray = fillHourlyWeatherArray(result, 0);
    
    const weatherInstance = new Weather(city, date, time, temperature, averageTemp, wind, humidity, weatherState,weatherLogo, hourlyWeatherArray);
    console.log(weatherInstance);
    return weatherInstance;
  }
  function fillWeatherWeekly(result,weatherInstance) {
    const weeklyWeatherArray = [];
    weeklyWeatherArray.push(weatherInstance);

    for (let i=1;i<7;i++){
      const city = result.location.name;
      const date = result.forecast.forecastday[i].date;
      const time = ''
      const temperature = result.forecast.forecastday[i].day.avgtemp_c;
      const averageTemp= ''
      const wind = result.forecast.forecastday[i].day.avgvis_km;
      const humidity = result.forecast.forecastday[i].day.avghumidity;
      const weatherState = result.forecast.forecastday[i].day.condition.text;
      const weatherLogo = result.forecast.forecastday[i].day.condition.icon;
      const hourlyWeatherArray = fillHourlyWeatherArray(result, i);
      const weatherInstanceW = new Weather(city, date,time , temperature, averageTemp, wind, humidity, weatherState,weatherLogo, hourlyWeatherArray);
      weeklyWeatherArray.push(weatherInstanceW); 
    }
    console.log(weeklyWeatherArray);
    return weeklyWeatherArray;}

  return {
    fetchData,
    fillWeather
  };
}