/**
 * the constants are declared in the constants file
 * replace fetch with the service function get
 */

import { ApiKey, baseUrlF } from "../assets/values/constants";

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
