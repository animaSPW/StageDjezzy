import getLocation from  "../location"
import Weather from "../Model/WeatherModel"
import {getWeather,getWeatherForcast} from "../repo"

async function fetchData() {
    try {
      const locationn = await getLocation();
       const result = await getWeather(locationn);
       const result2 = await getWeatherForcast(locationn);
         return await fillup(result);

    
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }
  
 fetchData();

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
