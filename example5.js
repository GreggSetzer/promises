// Example 5: A more complex example using nested promises.
const axios = require('axios');

/**
 * A helper function that gets the weather.
 * @param city
 * @param url
 */
function getWeather(city, url) {
   return new Promise(resolve => {
      axios.get(url).then((result) => {
         const temp = result.data.properties.periods[0].temperature;
         resolve(temp);
      });
   });
}

/**
 * A helper function to "format" our data. For example, we might want to
 * format the data to be displayed in our react application.
 * @param city
 * @param url
 * @returns {Promise<unknown>}
 */
function getFormattedWeather(city, url) {
   return new Promise((resolve) => {
      getWeather(city, url).then(temp => {
         resolve({
            city: city,
            temp: temp
         });
      });
   });
}

// Call our function to get the formatted weather.
const result = getFormattedWeather('Winston Salem', 'https://api.weather.gov/gridpoints/RAH/14,64/forecast');
result.then(data => {
   console.log(`The temperature for ${data.city} is ${data.temp} degrees.`);
});
