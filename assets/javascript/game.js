//Psychic Game

var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var yourGuesses = [];

var wins = 0;
var losses = 0;
var guessesLeft = 9;


var chosenLetter = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(chosenLetter);

var winsText = document.getElementById("wins");
var lossesText = document.getElementById("losses");
var guessesLeftText = document.getElementById("guessesLeft");
var yourGuessesText = document.getElementById("yourGuesses");

var pageContent = function () {
    winsText.textContent = "Wins: " + wins;
    lossesText.textContent = "Losses: " + losses;
    guessesLeftText.textContent = "Guesses Left: " + guessesLeft;
    yourGuessesText.textContent = "Your Guesses so far: " + yourGuesses;
}

var reset = function () {
    guessesLeft = 9;
    chosenLetter = alphabet[Math.floor(Math.random() * alphabet.length)];
    yourGuesses = [];
}


pageContent();

document.onkeyup = function (event) {

    var letter = event.key.toLowerCase();

    yourGuesses.push(" " + letter);

    if (letter === chosenLetter) {
        wins++;
        reset();
    } else {
        guessesLeft--;
    }

    if (guessesLeft === 0) {
        losses++;
        reset();
    }

    pageContent();

};