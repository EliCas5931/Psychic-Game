// Variables for holding Movie data
var movieOptions = ["transformers", "maleficent", "vertigo", "jumanji", "frozen", "labyrinth", "gravity", "scream", "skyfall", "ratatouille", "disturbia", "bewitched", "twilight", "cinderella", "inception", "tangled", "watchmen", "aladdin", "eragon", "pocahontas", "goodfellas", "gladiator", "alien", "grease", "titanic", "braveheart", "shrek", "godzilla"];
var selectedMovie = "";
var lettersInMovie = [];
var numberBlanks = 0;
var movieBlanks = [];
var lettersGuessed = [];

// Game variables
var winsCounter = 0;
var lossCounter = 0;
var guessLeft = 12;

// Movie Guess function
function guessMovie() {

    selectedMovie = movieOptions[Math.floor(Math.random() * movieOptions.length)];
    // Want to add logic to not repeat movies and to go through full array
    lettersInMovie = selectedMovie.split("");
    numberBlanks = lettersInMovie.length;


    guessLeft = 12;
    lettersGuessed = [];
    movieBlanks = [];

    for (var i = 0; i < numberBlanks; i++) {
        movieBlanks.push("_");
    }

    document.getElementById("selectedMovie").innerHTML = movieBlanks.join(" ");
    document.getElementById("guessFar").innerHTML = lettersGuessed;
    document.getElementById("guessLeft").innerHTML = guessLeft;
    document.getElementById("winsCounter").innerHTML = winsCounter;
    document.getElementById("lossCounter").innerHTML = lossCounter;
}

function compareLetters(letters) {
    var compareMovieLetters = false;

    for (var i = 0; i < numberBlanks; i++) {
        if (selectedMovie[i] == letters) {
            compareMovieLetters = true;
        }
    }

    if (compareMovieLetters) {
        for (var i = 0; i < numberBlanks; i++) {
            if (selectedMovie[i] == letters) {
                movieBlanks[i] = letters;
            }
        }
    } else {
        lettersGuessed.push(letters);
        guessLeft--;
    }
    // Trying to add logic to avoid double letters and to alert user to guess again!
}

function roundComplete() {
    document.getElementById("guessLeft").innerHTML = guessLeft;
    document.getElementById("selectedMovie").innerHTML = movieBlanks.join(" ");
    document.getElementById("guessFar").innerHTML = lettersGuessed.join(" , ");

    if (lettersInMovie.toString() == movieBlanks.toString()) {
        winsCounter++;
        alert("You won!");
        document.getElementById("winsCounter").innerHTML = winsCounter;
        showPreviousMovie();
        guessMovie();
    } else if (guessLeft == 0) {
        lossCounter++;
        alert("You lose!");
        document.getElementById("lossCounter").innerHTML = lossCounter;
        showPreviousMovie();
        guessMovie();
    }
}

function showPreviousMovie() {
    var movieText = document.createElement("p");
    var previousMovie = document.createTextNode(selectedMovie + ", ");

    movieText.appendChild(previousMovie);
    document.getElementById("previousMovie").appendChild(previousMovie);

    console.log(previousMovie);
}

guessMovie();

document.onkeyup = function (event) {
    var lettersGuessed = String.fromCharCode(event.keyCode).toLowerCase();
    compareLetters(lettersGuessed);
    roundComplete();
}
