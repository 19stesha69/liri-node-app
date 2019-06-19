//This code reads and sets any environment variables with the dotenv package
require("dotenv").config();

//Require AXIOS
const axios = require('axios');

//Require MOMENT
var moment = require('moment');

//Require NODE-SPOTIFY-API
var Spotify = require('node-spotify-api');

//Require FS
var fs = require("fs");

//this code is required to import the keys.js file and store it in a variable
var keys = require("./keys.js");

//Initialize API keys
//Spotify
var spotify = new Spotify(keys.spotify);

//Bands in Town
var bandsInTown = (keys.bandsInTown.id);

//OMDB
var omdb = (keys.omdb.id);
// console.log(keys);

//Variables for storing user commands and user inputs
var userCommand = process.argv[2];
/*.slice() separates the user input from the rest of the node command line 
and .join() creates a new string out of that input, the elements separated
by a single space*/
var userInput = process.argv.slice(3).join(" "); 

//Switch statement, directing user commands to the proper function 
function userRequest(userCommand, userInput) {
    switch (userCommand) {
        case "concert-this":
            concertThis();
            break;
        case "spotify-this-song":
            spotifyThis();
            break;
        case "movie-this":
            movieThis();
            break;
        case "do-what-it-says":
            doThis(userInput);
            break;
        default:
            console.log("Try again, please!");
            break;
    }
}

userRequest(userCommand, userInput);

var capitalize = function(newArtist) {
    var capitalize = newArtist;
    var bigLetters = capitalize.toUpperCase();
    console.log(bigLetters + "\n");
}

//concertThis()
function concertThis() {
    console.log("\n*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+\n");
    console.log("LET'S ROCK AND ROLL!!!\n");

    var bandURL = "https://rest.bandsintown.com/artists/" + userInput + "/events?app_id=" + bandsInTown + "&date=2019-06-18%2C2019-08-18";

    axios
        .get(bandURL)
        .then(function(response) {

            capitalize(userInput);

            for (var i = 0; i < response.data.length; i++) {
                var results = response.data[i];
                var concertHall = results.venue.name;
                var concertHallLocation = results.venue.city;
                var concertHallLocationCountry = results.venue.country;
                var showTime = results.datetime;

                console.log("* " + concertHall);
                console.log("* " + concertHallLocation + ", " + concertHallLocationCountry);
                var timeConfigured = moment(showTime).format("MM/DD/YYYY hh:00 A");
                console.log("* " + timeConfigured + "\n");
            }

            if (response.data.length < 1) {
                console.log("They're not on tour, dude! Go see Hozier!!!!");
            }

        console.log("\n*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+\n")
    });
}

//spotifyThis()
function spotifyThis() {
    console.log("\n*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+\n");

    if (!userInput) {
        userInput = "the sign ace of base"
    };

    spotify.search ({
        type: "track",
        query: userInput,
        limit: 1
    }, function(err, data) {
        if (err) {
          return console.log('Error occurred: ' + err);
        }
        //console.log(data.tracks.items[0].album.artists[0].name);

        //Pull desired data from the API call and place it in an array
        var spotifyArray = data.tracks.items; 

        //sort through that array and pull out the requested data
         for (var k = 0; k < spotifyArray.length; k++) {
             console.log("*Here's the Spotify 411!\n");
             console.log("*Artist: " + spotifyArray[k].album.artists[k].name);
             console.log("*Song Title: " + spotifyArray[k].name);
             console.log("*Album: " + spotifyArray[k].album.name);
             console.log("*Spotify Link: " + spotifyArray[k].external_urls.spotify);
         };
         console.log("\n*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+\n")
    });
}

function movieThis() {
    console.log("\n*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+\n");
    console.log("OOOH! That's a GOOD ONE!");

        if(!userInput) {
        userInput = "mr nobody";
        };

        var movieURL = "http://www.omdbapi.com/?t=" + userInput + "&apikey=" + omdb;
        // console.log(movieURL);
        axios
            .get(movieURL)
            .then(function(response) {

                var ratingsArray = {};

                var results= response.data;
                var movieTitle = results.Title;
                var releaseYear = results.Released;
                var imdbRating = results.Ratings[0].Value;
                var rottenToms = results.Ratings[1].Value;
                var filmCountry = results.Country;
                var filmLanguage = results.Language;
                var filmPlot = results.Plot;
                var filmCast = results.Actors;

                console.log("*Movie: " + movieTitle);
                console.log("*Date of Release: " + releaseYear);
                console.log("*IMDB Rating: " + imdbRating);
                console.log("*Rotten Tomatoes Rating: " + rottenToms);
                console.log("*Country: " + filmCountry);
                console.log("*Language: " + filmLanguage);
                console.log("*Plot: " + filmPlot);
                console.log("*Cast: " + filmCast);
                console.log("\n*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+*+\n")
            }).catch(error=> {
                console.log(error);
            });    
                    

}

function doThis() {

    //Node.js file system module reads random.txt
    fs.readFile("random.txt", "utf8", (err, data) => {
        if (err) {
            throw err;
        } 
        //console.log(data);
      
      //.split() splits the string contained in random.txt 
      //at the "," so they can be stored in variables
      var dataArray = data.split(","); 

      userCommand = dataArray[0];
      userInput = dataArray[1];


      userRequest(userCommand, userInput);
    });
      
      
}



