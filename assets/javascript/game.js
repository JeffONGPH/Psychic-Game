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

    var userInput = String.fromCharCode(event.keyCode).toLowerCase();
    console.log("userInput = " + userInput)

    guesses.push(userInput);
    console.log("guesses = " + guesses)
    document.getElementById("guesses").innerHTML = " Guesses so far : " + guesses.join(" , ");


    if (userInput == computer) {
        wins++;
        console.log("wins = " + wins)
        document.getElementById("wins").innerHTML = " Wins : " + wins;
        guesses = [];
        console.log("guesses" + guesses)
        alert("This can't be true! You read my mind!")
        alert("Try again?" + "\n" + "You won't get it this time?!")
        if (alert("Try again?" + "\n" + "You won't get it this time?!")) {guessesLeft = 10;
            document.getElementById("guessesLeft").innerHTML = " Guesses left : " + guessesLeft;};
        guessesLeft = 10;
        document.getElementById("guessesLeft").innerHTML = " Guesses left : " + guessesLeft;
        computer = letters[Math.floor(Math.random() * letters.length)];
        console.log("Computer's Letter is" + " " + computer);

    } else {
        loses++;
        console.log("loses = " + loses)
        document.getElementById("loses").innerHTML = " Loses : " + loses;
        guessesLeft--;
        console.log("Guesses Left = " + guessesLeft)
        document.getElementById("guessesLeft").innerHTML = " Guesses left : " + guessesLeft;

    }

    if (guessesLeft < 0) {
        guessesLeft = 10;
        guesses = [];
        console.log("Guesses Left = " + guessesLeft)
        console.log("guesses" + guesses)
        alert("Game Over" + "\n" + "Click Okay To Try Again")
        document.getElementById("guessesLeft").innerHTML = " Guesses left : " + "10";
        loses--;
        document.getElementById("loses").innerHTML = " Loses : " + loses;
        
       
    }
};