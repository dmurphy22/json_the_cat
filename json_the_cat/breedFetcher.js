const request = require("request");
const args = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
  if (!error) {
    const data = JSON.parse(body);
    if (data.length < 1)
      console.log("No results found");
    console.log(data[0].description);
    // console.log(data);
  } else {
    console.log("Something went wrong:", error.code);
  }
});

