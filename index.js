const express = require('express');
const tmi = require("tmi.js");
const app = express();

// Glitch expects a web server so we're starting express to take care of that.
// The page shows the same information as the readme and includes the remix button.
app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

let listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});

// Setting options for our bot, disable debug output once your up and running.
let options = {
  options: {
    debug: true
  },
  connection: {
    cluster: "aws",
    reconnect: true
  },
  identity: {
    username: process.env.USERNAME,
    password: process.env.PASSWORD
  },
    channels: ["mattypocket"]
};

// Set up our new TMI client and connect to the server.
let client =  new tmi.client(options);
client.connect();

// We have debug enabled now but if not we want some sort of confirmation
// we've connected to the server.
client.on('connected', (address, port) => {
  console.log(`Connected to ${address}:${port}`);
})

// This simple bot will simply monitor chat logging for instances of '!twitter' or '!github'.
// 
client.on('chat', (channel, user, message, self) => {
  switch(message) {
    case 'lol': 
      client.action('Mattypocket', `mattyLina mattyLina mattyLina mattyLina mattyLina`);
      break;
    case 'mattyLina mattyLina': 
      client.action('Mattypocket', `mattyLina mattyLina mattyLina mattyLina mattyLina`);
      break;
    case 'mattyLina mattyLina mattyLina': 
      client.action('Mattypocket', `mattyLina mattyLina mattyLina mattyLina mattyLina`);
      break;
    case 'mattyLina mattyLina mattyLina mattyLina': 
      client.action('Mattypocket', `mattyLina mattyLina mattyLina mattyLina mattyLina`);
      break;
    case 'mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina': 
      client.action('Mattypocket', `mattyLina mattyLina mattyLina mattyLina mattyLina`);
      break;
    case 'mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina': 
      client.action('Mattypocket', `mattyLina mattyLina mattyLina mattyLina mattyLina`);
      break;
    case 'mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina': 
      client.action('Mattypocket', `mattyLina mattyLina mattyLina mattyLina mattyLina`);
      break;
    case 'mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina': 
      client.action('Mattypocket', `mattyLina mattyLina mattyLina mattyLina mattyLina`);
      break;
    case 'mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina': 
      client.action('Mattypocket', `mattyLina mattyLina mattyLina mattyLina mattyLina`);
      break;
    case 'mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina mattyLina': 
      client.action('Mattypocket', `mattyLina mattyLina mattyLina mattyLina mattyLina`);
      break;
    default:
      break;
  }
})
