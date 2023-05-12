const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback(error, null);
      return;
    }

    try {
      const data = JSON.parse(body);

      if (data.length < 1) {
        callback("No results found", null);
        return;
      }

      callback(null, data[0].description);
    } catch (parseError) {
      callback(parseError, null);
    }
  });
};




module.exports = { fetchBreedDescription };