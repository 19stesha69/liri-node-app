//This code reads and sets any environment variables with the dotenv package
require("dotenv").config();

//Require AXIOS
const axios = require('axios');

//Require MOMENT
const moment = require('moment');

//Require NODE-SPOTIFY-API
var Spotify = require('node-spotify-api');

//this code is required to import the keys.js file and store it in a variable
var keys = require("./keys.js");

//Initialize API keys
//Spotify
var spotify = new Spotify(keys.spotify);

//Bands in Town
var bandsInTown = (keys.bandsInTown);

//OMDB
var omdb = (keys.omdb);

//Variables for storing user commands and user inputs
var userCommand = process.argv[2];
//.slice() separates the user input from the rest of the node command line 
//and .join() creates a new string, elements separated by a single space
var userInput = process.argv.slice(3).join(" "); 

//Switch statement, directing user commands to the proper function 






