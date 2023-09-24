const request = require("request");
const API_ENDPOINT = "https://api.thecatapi.com/v1/breeds/search?q=";

//Saving command line arguments in a variable
const args = process.argv.slice(2);

request(API_ENDPOINT + args[0], (error, response, body) => {
  //check if any error with request
  if (error) {
    console.error(error);
  } else {
    //parsing body from string into an object
    const data = JSON.parse(body);
    //check if breed exists
    data[0]
      ? console.log(data[0].description)
      : console.log("Breed not found.");
  }
});
