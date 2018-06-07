//MAIN VARIABLE//
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

//OTHER VARIABLES//
var guessesLeft = 10;
var guesses = [];
var wins = 0;
var loses = 0;


//COMPUTER LETTER GENERATOR//
var computer = letters[Math.floor(Math.random() * letters.length)];
console.log("Computer's Letter is" + " " + computer);

//USER INPUT AND PROCESSING//
document.onkeyup = function (event) {

    if (event.keyCode >= 65 && event.keyCode <= 90) {

        var userInput = String.fromCharCode(event.keyCode).toLowerCase();
        console.log("userInput = " + userInput);

        guesses.push(userInput);
        document.getElementById("guesses").innerHTML = guesses.join(" , ");
        console.log("guesses = " + guesses);

        if (userInput == computer) {
            wins++;
            document.getElementById("wins").innerHTML = wins;
            console.log("wins = " + wins);
            guesses = [];
            console.log("guesses" + guesses);
            alert("This can't be true! You read my mind!")
            alert("Try again?" + "\n" + "You won't get it this time?!")
            guessesLeft = 10;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
            computer = letters[Math.floor(Math.random() * letters.length)];
            console.log("Computer's Letter is" + " " + computer);
        } else {
            loses++;
            document.getElementById("loses").innerHTML = loses;
            console.log("loses = " + loses);
            guessesLeft--;
            document.getElementById("guessesLeft").innerHTML = guessesLeft;
            console.log("Guesses Left = " + guessesLeft);
        }

        if (guessesLeft == 0) {
            guessesLeft = 10;
            guesses = [];
            document.getElementById("loses").innerHTML = loses;
            console.log("Guesses Left = " + guessesLeft);
            console.log("guesses" + guesses);
            alert("Game Over" + "\n" + "Click Okay To Try Again");
            document.getElementById("guessesLeft").innerHTML = "0";
            computer = letters[Math.floor(Math.random() * letters.length)];
            console.log("Computer's Letter is" + " " + computer);
        }
    } else {
        alert("Please choose a letter between A to Z !");
    }

};