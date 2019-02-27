// What the user sees when they first open page
alert("Come play the Word Guess Game!")

// The movies the user can choose from
var movies = ["Transformers", "Maleficent", "Vertigo", "Jumanji", "Frozen", "Labyrinth", "Gravity", "Scream", "Skyfall", "Ratatouille", "Disturbia", "Bewitched", "Goodfellas", "Gladiator", "Alien", "Grease", "Titanic", "Braveheart", "Shrek", "Braveheart", "Godzilla"];
var hiddenMovie = [];

// Starting values for wins, losses, guesses, how many guesses are left and what has been guessed so far
var winsCounter = 0;
var lossCounter = 0;
var guesses = 0;
var guessLeft = 15;
var guessFar = [];

// Other variables
var wordLngth;
var alert = {
    win: "You won!",
    loss: "You lost!",
    guess: "You have already guessed that letter!",
    validLetters: "Please choose a valid letter!"
}
var letters = "abcdefghijklmnopqrstuvwxyz";
var validChoice = false;

var alreadyGuessed = false;
var correctLetter = false;
var currentMovie;

// Function for guessing movie
function newMovie() {
    wordLngth = Math.floor((Math.random() * movies.length));
    currentMovie = movies[wordLngth];
    console.log(currentMovie);

    if (hiddenMovie.length !== currentMovie.length) {
        hiddenMovie= [];
    }

    //Make blanks for length of movie
    for (var i = 0; i < currentMovie.length; i++) {
        if (currentMovie[i] === " ") {
            hiddenMovie[i] = " ";
        } else {
            hiddenMovie[i] = (" _ ");
        }
    }
    $("#hiddenMovie").html(hiddenMovie);
}

document.onkeyup = function(event) {
    var userGuessed = String.fromCharCode(event.keyCode).toLocaleLowerCase();
    var key = event.keyCode;

    // After too many guesses, get new movie
    if (key == 16) {
        newMovie();
    }

    for (var i = 0; i < letters.length; i++) {
        if (userGuessed === letters.charAt(i)) {
            validChoice = true;
        }
    }

    if (validChoice == false && key != 16) {
        $("#alert").html(alert.validLetters);
    }

    // Letter guessed, send alert
    for (var i = 0; i < guessFar.length; i++) {
        if (userGuessed === guessFar[i]) {
            alreadyGuessed = true;
        }
    }

    if (alreadyGuessed == true) {
        $("#alert").html(alert.guess);
    }

   for (var i = 0; i < currentMovie.length; i++) {
       if (currentMovie[i] === userGuessed) {
           hiddenMovie[i] = currentMovie[i];
           correctLetter = true;
       }
   }

   if (validChoice == true && alreadyGuessed == false && correctLetter == false) {
       56   }
}



    
    
