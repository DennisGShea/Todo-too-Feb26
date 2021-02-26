const fetch = require("node-fetch")


const baseURL = 'https://api.sampleapis.com/wines/reds'

console.log(baseURL)

fetch(baseURL)
  .then(resp => resp.json())
  .then(data => displayData(data));

function displayData(data) {
  // document.querySelector(“pre”).innerHTML = JSON.stringify(data, null, 2);
    console.log(data)
    displayData(data) 
}

   