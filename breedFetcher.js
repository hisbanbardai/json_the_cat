const request = require("request");
const API_ENDPOINT = "https://api.thecatapi.com/v1/breeds/search?q=";

const fetchBreedDescription = function (breedName, callback) {
  request(API_ENDPOINT + breedName, (error, response, body) => {
    //check if any error with request
    if (error) {
      callback(error, null);
    } else {
      //parsing body from string into an object
      const data = JSON.parse(body);
      //check if breed exists
      data[0]
        ? callback(null, data[0].description)
        : callback(error, null);
    }
  });
};

module.exports = fetchBreedDescription;
