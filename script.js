console.log("- Welcome to Rock Paper Scissors -");

const choices = ['rock', 'paper', 'scissors'];
let humanScore  = 0, computerScore =0;

// returns a random choice from the choices 
const getComputerChoice = function() {
    return choices[Math.floor(Math.random() * choices.length)];
};

// prompts the user input then returns it
const getHumanChoice = function() {
    return prompt("Choose Rock / Paper / Scissors: ").toLowerCase();
};

// takes human and computer choice and updates score accordingly
const playRound = function(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return;
    }

    if (humanChoice === 'rock') {
        if (computerChoice === 'paper') {
            computerScore++;
            console.log("You Lose! Paper beats Rock.");
        }
        else {
            humanScore++;
            console.log("You Win! Paper beats Rock.");
        }
    }

    else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            computerScore++;
            console.log("You Lose! Scissors beats Papper.");
        }
        else {
            humanScore++;
            console.log("You Win! Paper beats Rock.");
        }
    }

    else {
        if (computerChoice === 'rock') {
            computerScore++;
            console.log("You Lose! Rock beats Scissors.");
        }
        else {
            humanScore++;
            console.log("You Win! Scissors beats Paper.");
        }
    }
}; 

//! Testing funcitons
console.log(getComputerChoice());
console.log(getHumanChoice());