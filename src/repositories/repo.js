/**
 * the constants are declared in the constants file
 * replace fetch with the service function get
 */

import { ApiKey, baseUrlF,baseUrlP,baseUrlP2 } from "../assets/values/constants";

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

/* returns a w pokemon type based on weather stat*/
const getWeatherBasedPokemonType = (weatherState) => {
  const weatherToPokemonType = {
    "Sunny": "fire",
    "Partly cloudy": "normal",
    "Cloudy": "ghost",
    "Overcast": "dark",
    "Mist": "ghost",
    "Patchy rain possible": "water",
    "Patchy snow possible": "ice",
    "Patchy sleet possible": "ice",
    "Patchy freezing drizzle possible": "ice",
    "Thundery outbreaks possible": "electric",
    "Blowing snow": "ice",
    "Blizzard": "ice",
    "Fog": "ghost",
    "Freezing fog": "ice",
    "Patchy light drizzle": "water",
    "Light drizzle": "water",
    "Freezing drizzle": "ice",
    "Heavy freezing drizzle": "ice",
    "Patchy light rain": "water",
    "Light rain": "water",
    "Moderate rain at times": "water",
    "Moderate rain": "water",
    "Heavy rain at times": "water",
    "Heavy rain": "water",
    "Light freezing rain": "ice",
    "Moderate or heavy freezing rain": "ice",
    "Light sleet": "ice",
    "Moderate or heavy sleet": "ice",
    "Patchy light snow": "ice",
    "Light snow": "ice",
    "Patchy moderate snow": "ice",
    "Moderate snow": "ice",
    "Patchy heavy snow": "ice",
    "Heavy snow": "ice",
    "Ice pellets": "ice",
    "Light rain shower": "water",
    "Moderate or heavy rain shower": "water",
    "Torrential rain shower": "water",
    "Light sleet showers": "ice",
    "Moderate or heavy sleet showers": "ice",
    "Light snow showers": "ice",
    "Moderate or heavy snow showers": "ice",
    "Light showers of ice pellets": "ice",
    "Moderate or heavy showers of ice pellets": "ice",
    "Patchy light rain with thunder": "electric",
    "Moderate or heavy rain with thunder": "electric",
    "Patchy light snow with thunder": "electric",
    "Moderate or heavy snow with thunder": "electric"
  };

  return weatherToPokemonType[weatherState] || "unknown";
}

/*  returns a random pokemon name + its type based on the pokemon type */
async function getPokemon(pokemonType) {
  const apiUrl = `${baseUrlP}${pokemonType}`;
  try {
    const response = await fetch(apiUrl);
    const result = await response.json();
    const randomIndex = Math.floor(Math.random() * result.pokemon.length);
    const randomPokemonName = result.pokemon[randomIndex].pokemon.name;
    const apiUrl2 = `${baseUrlP2}${randomPokemonName}`;
    const sprite= await fetch(apiUrl2);
    const sprite2= await sprite.json();
    const spriteUrl = sprite2.sprites.front_default;
    const pokemon ={ name: randomPokemonName, sprite: spriteUrl };
  
    return pokemon;
  } catch (error) {
    console.error("An error occurred:", error);
    throw error;
  }
}

export {getWeatherBasedPokemonType,getWeatherForcast,getPokemon}  ;
