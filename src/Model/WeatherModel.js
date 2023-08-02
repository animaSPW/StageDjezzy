class hourlyWeather {
   constructor(hour, temperature, weatherState) {
      this.hour = hour;
      this.temperature = temperature;
      this.weatherState = weatherState;
      
    }

}


class Weather {
    constructor(city, date, time, temperature,averageTemp, wind, humidity, weatherState, hourlyWeatherArray) {
      this.city = city;
      this.date = date;
      this.time = time;
      this.temperature = temperature;
      this.averageTemp = averageTemp;
      this.wind = wind;
      this.humidity = humidity;
      this.weatherState = weatherState;
      this.hourlyWeatherArray = hourlyWeatherArray;
    }
  }
  
  
  export default Weather;