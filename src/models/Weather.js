/**
 * better put the models classes in separate files
 */

class hourlyWeather {
  constructor(hour, temperature, weatherState, weatherLogo) {
    this.hour = hour;
    this.temperature = temperature;
    this.weatherState = weatherState;
    this.weatherLogo = weatherLogo;
  }
}

class Weather {
  constructor(city, date, time, temperature,averageTemp, wind, humidity, weatherState,sprite,name,weatherLogo, hourlyWeatherArray) {
    this.city = city;
    this.date = date;
    this.time = time;
    this.temperature = temperature;
    this.averageTemp = averageTemp;
    this.wind = wind;
    this.humidity = humidity;
    this.weatherState = weatherState;
    this.sprite=sprite;
    this.name=name;
    this.weatherLogo = weatherLogo;
    this.hourlyWeatherArray = hourlyWeatherArray;
  }
}

export  { Weather, hourlyWeather };