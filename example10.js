const axios = require('axios');

const promises = [
   axios.get("https://api.weather.gov/gridpoints/RAH/14,64/forecast"), // Winston Salem, NC
   axios.get("https://api.weather.gov/gridpoints/GSP/116,75/forecast"), // Cornelius, NC
   axios.get("https://api.weather.gov/gridpoints/RAH/31,64/forecast"), // Greensboro, NC
   axios.get("https://api.weather.gov/gridpoints/CAR/53,83/forecast"), // Dover, ME
   axios.get("https://api.weather.gov/gridpoints/OTX/141,90/forecast") // Spokane, WA
];

Promise.all(promises).then((apiResponse) => {
   // Extract the temperature from each element in the apiResponse array.
   const winstonSalemTemp = apiResponse[0].data.properties.periods[0].temperature;
   const corneliusTemp = apiResponse[1].data.properties.periods[0].temperature;
   const greensboroTemp = apiResponse[2].data.properties.periods[0].temperature;
   const doverTemp = apiResponse[3].data.properties.periods[0].temperature;
   const spokaneTemp = apiResponse[4].data.properties.periods[0].temperature;

   // Save the temperatures into an array to sort them.
   const tempsArr = [winstonSalemTemp, corneliusTemp, greensboroTemp, doverTemp, spokaneTemp];

   // Sort the temperature
   tempsArr.sort((a, b) => {
      return a - b;
   });

   // Print the coolest and warmest temperatures.
   console.log(`The coolest temperature is ${tempsArr[0]}`);
   console.log(`The warmest temperature is ${tempsArr[4]}`);

}).catch((error) => {
   console.log('Something went wrong');
   console.error(error);
});
