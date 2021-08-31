// Example 4: Working with more than one promise.
const axios = require('axios');

/**
 * A helper function that gets the weather.
 * @param city
 * @param url
 */
function getWeather(city, url) {
   axios.get(url).then(result => {
      const temp = result.data.properties.periods[0].temperature;
      console.log(`Today's temperature for ${city}: `, temp);
   });
}

// These are basically running in parallel (at the same time).
// But, they are hard coded which is not ideal.
getWeather( 'Winston Salem', 'https://api.weather.gov/gridpoints/RAH/14,64/forecast'); // first - 5 seconds
getWeather( 'Cornelius', 'https://api.weather.gov/gridpoints/GSP/116,75/forecast'); // second - 1 second
