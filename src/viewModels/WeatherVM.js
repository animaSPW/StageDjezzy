/**
 * you can export functions, variables, state variables...
 * you don't necessarily need to export everything, if a function is only used internally in a viewmodel, no need to export it
 */

import getLocation from  "../helpers/location"
import Weather from "../models/Weather";
import getWeatherForcast from "../repositories/repo"

export default function WeatherVM() {

  async function fetchData() {
    try {
      const locationn = await getLocation();
      
      const result= await getWeatherForcast(locationn);
      return fillup(result);
      
      
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }

  function fillup(result){
    const city = result.location.name;
    const date = result.location.localtime.split(' ')[0];
    const time = result.location.localtime.split(' ')[1];
    const temperature = result.current.temp_c;
    const wind = result.current.wind_kph;
    const humidity = result.current.humidity;
    const weatherState = result.current.condition.text;
    
    const weatherInstance = new Weather(city, date, time, temperature, wind, humidity, weatherState);
    console.log(weatherInstance);
    return weatherInstance;
  }

  return {
    fetchData,
    fillup
  };
}