// Example 1: Retrieving today's temperature from weather.gov using promises.
const axios = require('axios');

// Get the weather for Winston Salem, NC
axios.get("https://api.weather.gov/gridpoints/RAH/14,64/forecast").then(response => {
   const temp = response.data.properties.periods[0].temperature;
   console.log("Today's temperature for Winston Salem: ", temp);
});

// Get the weather for Cornelius, NC
axios.get("https://api.weather.gov/gridpoints/GSP/116,75/forecast").then(result => {
   const temp = result.data.properties.periods[0].temperature;
   console.log("Today's temperature for Cornelius:", temp);
});
