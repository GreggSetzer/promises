// Example 2: Looking at how promises complete at some point in the future.
const axios = require('axios');

// Get the weather for Winston Salem, NC
console.log("BEFORE WEATHER CALL FOR WINSTON");
axios.get("https://api.weather.gov/gridpoints/RAH/14,64/forecast").then(result => {
   const temp = result.data.properties.periods[0].temperature;
   console.log("Today's temperature for Winston Salem: ", temp);
});
console.log("AFTER WEATHER CALL FOR WINSTON");

// Get the weather for Cornelius, NC
console.log("BEFORE WEATHER CALL FOR LKN");
axios.get("https://api.weather.gov/gridpoints/GSP/116,75/forecast").then(result => {
   const temp = result.data.properties.periods[0].temperature;
   console.log("Today's temperature for Cornelius:", temp);
});
console.log("AFTER WEATHER CALL FOR LKN");
