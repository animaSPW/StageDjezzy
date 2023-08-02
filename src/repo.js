
const ApiKey = '5c1b0eda86a5440bb8d110703230208'
const baseUrl = ' http://api.weatherapi.com/v1/current.json'
const baseUrlF = ' http://api.weatherapi.com/v1/forcast.json'

async function getWeather(location) {
  const apiUrl = `${baseUrl}?key=${ApiKey}&q=${location}`;
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

async function getWeatherForcast(location) {
  const apiUrl = `${baseUrlF}?key=${ApiKey}&q=${location}&days=7`;
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    console.log(result);
    return result;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export default {getWeather, getWeatherForcast};
