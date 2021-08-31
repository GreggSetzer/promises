// Example 3: Simplifying the code to use a reusable function that gets the weather.
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

// Starts here
getWeather( 'Winston Salem', 'https://api.weather.gov/gridpoints/RAH/14,64/forecast');
getWeather( 'Cornelius', 'https://api.weather.gov/gridpoints/GSP/116,75/forecast');
// Ends here
