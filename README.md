# Liri Bot app
LIRI BOT - Takes in data requests based on name of band, title of song, and name of movie, submitted via the node command line, and returns requested data from Band in Town, Spotify, and OMDB APIs, respectively.

# Organization Overview
The code for this app is organized in four sections: requirements, API key initialization, user input variables, and functions.
* The requirements allow the npm packages that have been installed to function within the javaScript file.
* The API key initialization pulls the API keys for the various APIs in use in this app from an .env file, where they are securely stored (thanks to .gitignore), and stores them in variables to be used within the urls that are called when a command is enacted.
* The user input variables store the data typed in to the command line by the user, making it easy to apply those inputs to the various functions.
* The functions contain the logic that produces the results the user needs. There are four functions that respond to the four commands:
  * concertThis() - This function takes in the name of a band or artist and produces that act's concert venues, locations, and dates (within the window of June 18, 2019 to August 18, 2019) in a easy to read format. 
  ![concertThis screenshot](/images/concertThis.png)
  If the artist isn't touring within the predescribed window, the console makes a gentle suggestion:
  ![concertThis not touring screenshot](/images/concertThisNotTouring.png)
  This information is called from Bands in Town's API, via the AXIOS npm package.
  * spotifyThis() - This function takes in the name of a song and returns the artist's name, the title of the song, the album the song is found on, and the link to song on spotify.
  ![spotifyThis screenshot](/images/spotify-this-song.png)
  If no song title is typed in to the command line, the function offers up the info for the song *The Sign* by the iconic swedish pop-band, **Ace of Base**. 
  ![spotifyThis Ace of Base screenshot](/images/spotify-this-song-ace-of-base.png)This information is called from Spotify's API, via the node-spotify-api package.
  * movieThis() - This function takes in the title of a film, and returns the film's: title, year of release, IMDB rating, Rotten Tomatoes Rating, the country where the film was produced, the language of the film, the film's plot, and the actors featured in the film.
  ![movieThis screenshot](/images/movieThis.png) If no film title is typed in to the command line, the function produces the information for the film Mr. Nobody. 
  ![movieThis screenshot with no user input](/images/movieThisNoInput.png)This information is is called from OMDB's api via the AXIOS npm package.
  * doThis() - This function has the interesting task of pulling information stored on a .txt file and running it as if that information were typed in to the command line by a user.
  ![doThis screenshot](/images/doWhatItSaysScreenshot.png)It does this using readFile object of the node.js File System module.
  * userRequest() - This is the function that takes the user's commands, as typed in to the command line, and directs them to the proper function in order for that request to be processed succesfully. It does this via a *switch* statement.
  
# How to Run the App
**This app runs completely in the node.js terminal. The following includes instructions for installing the app in Node**
1. Fork a copy of the Liri-Bot repository on to computer.
2. Open a terminal in the root directory (Liri-Bot). 
3. run **npm install** to install required packages. 
4. In the command line, type in the following:
**node liri.js** 
This alerts the console that the commands will be run using node.js and the file being run will be *liri.js*
Next, on the same line as *node liri.js*, the user types in one of the following commands:
* concert-this <artist's name> 
  * This command runs the **concertThis** function and produces concert information for the artist in question.
* spotify-this-song <song title>
  * This command runs the **spotifyThis** function and produces artist information for the song in question. 
* movie-this <movie title>
  * This command runs the **movieThis** function and produces information for the movie in question.
* do-what-it-says
  * This command runs the **doThis** function, which reads a .txt file and uses that data to run one of the three other functions.
Press Enter.

# Technologies used
* Node.js
* JavaScript

# My role in the development of this app
* I read the instructions, taking notes on the app's requirements.
* I read the documentation included with the npm packages to be installed in the app, as well as the documentation on the websites of each of the APIs used (Bands in Town, Spotify, OMDB).
* I perused the in-class activities that seemed most pertinent to the production of this app to get an idea for how the code should be laid out.
* Following the step-by-step instructions included in the homework insructions, I initialized a repository on GitHub and went about building the app, with much trial and error (and re-reading of documentation).
  
  
