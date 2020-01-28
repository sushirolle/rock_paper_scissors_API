const fetch = require("node-fetch");

async function getRandomNumber() {
    var response = await fetch('https://codechallenge.boohma.com/random');

    if (response.ok) {
        var json = await response.json();
        return json;
    } else {
        alert("HTTP-Error: " + response.status);
    }
}

module.exports = {
    getRandomNumber
}