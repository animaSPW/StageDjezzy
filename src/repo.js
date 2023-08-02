
const ApiKey = '5c1b0eda86a5440bb8d110703230208'
const baseUrlF = ' http://api.weatherapi.com/v1/forecast.json'



async function getWeatherForcast(location) {
  const apiUrl = `${baseUrlF}?key=${ApiKey}&q=${location}&days=7`;
  try {
    const response = await fetch(apiUrl);
    const result2 = await response.json();
    console.log(result2);
    return result2;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export default getWeatherForcast ;
