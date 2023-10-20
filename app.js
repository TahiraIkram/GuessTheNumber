"use strict";
let bestScore = document.getElementById("bestscore");
let numOfGuess = document.getElementById("numofguesses");
let guess = document.getElementById("guess");
let giveUp = document.getElementById("giveup");
let playAgain = document.getElementById("again");
let output = document.getElementById("output");
let randomNumber = Math.floor(Math.random() * 100 + 1);
let score = 20;
let totalGuess = 0;
bestScore.textContent = score;
numOfGuess.textContent = totalGuess;



guess.addEventListener("click", function () {
  let userInput = Number(document.getElementById("input").value);
    if (Number(userInput == randomNumber)) {
        output.textContent = "You Guessed Right..You won the game!";
        bestScore.textContent++;
        
      
  } else if (userInput > randomNumber) {
        output.textContent = "You Guessed too High";
        bestScore.textContent--;
        numOfGuess.textContent++;
        if (bestScore.textContent < 1) {
            output.textContent = "You Lost the Game!"
        }
        
  } else if (userInput < randomNumber) {
        output.textContent = "You Guessed too low";
        bestScore.textContent--;
            numOfGuess.textContent++;
        if (bestScore.textContent < 1) {
            output.textContent = "You Lost the Game!"
        }
  } else if (!userInput) {
    output.textContent = "Enter a valid number";
  }
});

giveUp.addEventListener("click", function () {
  output.textContent = `Oh You gave Up Correct Number is ${randomNumber}`;
});
playAgain.addEventListener("click", function () {
    randomNumber = Math.floor(Math.random() * 100 + 1);
    output.textContent = "Try & Guess!";
    document.querySelector("#input").value = '';
    numOfGuess.textContent = 0;
    console.log(randomNumber);
    bestScore.textContent = 20;
    
});
