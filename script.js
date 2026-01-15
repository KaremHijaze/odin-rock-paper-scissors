console.log("- Welcome to Rock Paper Scissors -");

const choices = ['rock', 'paper', 'scissors'];
let humanScore  = 0, computerScore =0;

// returns a random choice from the choices 
const getComputerChoice = function(choices) {
    return choices[Math.floor(Math.random()*choices.length)];
};

// prompts the user input then returns it
const getHumanChoice = function() {
    return prompt("Choose Rock / Paper / Scissors: ").toLowerCase();
};

//! Testing funcitons
console.log(getComputerChoice(choices));
console.log(getHumanChoice());