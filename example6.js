// Example 6: Different ways you can structure
// your code when using promises.

const axios = require('axios');
const url = 'https://api.weather.gov/gridpoints/RAH/14,64/forecast';

// * * * * * * * * * * * * * * * * * * * * * * * * *
// Example 1:
// Separate your callback from your promise logic.
// * * * * * * * * * * * * * * * * * * * * * * * * *
function printWeatherInfo(apiResponse) {
   const temp = apiResponse.data.properties.periods[0].temperature;
   console.log(`Example 1: The temperature is ${temp} degrees.`);
}

axios.get(url).then(printWeatherInfo);

// * * * * * * * * * * * * * * * * * * * * * * * * *
// Example 2:
// Use a named function (which is very helpful in
// debugging promises because you can pinpoint the
// location of the failure).
// * * * * * * * * * * * * * * * * * * * * * * * * *
axios.get(url).then(function processWeatherDetails(apiResponse) {
   const temp = apiResponse.data.properties.periods[0].temperature;
   console.log(`Example 2: The temperature is ${temp} degrees.`);
});


// * * * * * * * * * * * * * * * * * * * * * * * * *
// Example 3:
// Use an anonymous function. It's shorter, but can
// be difficult to debug when you have nested promises.
// * * * * * * * * * * * * * * * * * * * * * * * * *
axios.get(url).then(function (apiResponse) {
   const temp = apiResponse.data.properties.periods[0].temperature;
   console.log(`Example 3: The temperature is ${temp} degrees.`);
});


// * * * * * * * * * * * * * * * * * * * * * * * * *
// Example 4:
// Use the arrow syntax.
// * * * * * * * * * * * * * * * * * * * * * * * * *
axios.get(url).then((apiResponse) => {
   const temp = apiResponse.data.properties.periods[0].temperature;
   console.log(`Example 4: The temperature is ${temp} degrees.`);
});


// * * * * * * * * * * * * * * * * * * * * * * * * *
// Example 5:
// Use the abbreviated arrow syntax (no parens).
// * * * * * * * * * * * * * * * * * * * * * * * * *
axios.get(url).then(apiResponse => {
   const temp = apiResponse.data.properties.periods[0].temperature;
   console.log(`Example 5: The temperature is ${temp} degrees.`);
});
