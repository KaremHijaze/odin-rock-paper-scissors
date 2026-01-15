console.log("- Welcome to Rock Paper Scissors -");

const choices = ['rock', 'paper', 'scissors'];

// returns a random choice from the choices 
const getComputerChoice = function() {
    return choices[Math.floor(Math.random() * choices.length)];
};

// prompts the user input then returns it
const getHumanChoice = function() {
    return prompt("Choose Rock / Paper / Scissors: ").toLowerCase();
};

const playGame = function(rounds) {
    let humanScore  = 0;
    let computerScore = 0;

    // takes human and computer choice and updates score accordingly
    const playRound = function(humanChoice, computerChoice) {
        if (humanChoice === computerChoice) {
            console.log("That's a tie!");
            return;
        }

        if (humanChoice === 'rock') {
            if (computerChoice === 'scissors') {
                humanScore++;
                console.log("You Win! Rock beats Scissors.");
            }
            else {
                computerScore++;
                console.log("You Lose! Paper beats Rock.");
            }
        }
    
        else if (humanChoice === 'paper') {
            if (computerChoice === 'rock') {
                humanScore++;
                console.log("You Win! Paper beats Rock.");
            }
            else {
                computerScore++;
                console.log("You Lose! Scissors beats Paper.");
            }
        }
    
        else {
            if (computerChoice === 'Paper') {
                humanScore++;
                console.log("You Win! Scissors beats Paper.");
            }
            else {
                computerScore++;
                console.log("You Lose! Rock beats Scissors.");
            }
        }
    };

    // repeats for the number of given rounds
    for (let i = 1; i <= rounds; i++){
        console.log("Start Round " + i);
        const humanChoice = getHumanChoice();
        const computerChoice = getComputerChoice();
        
        playRound(humanChoice, computerChoice);
    }

    if (humanScore > computerScore) {
        alert("You Won! you beat the computer.");
    }
    else if (humanScore < computerScore) {
        alert("You Lost! get better.");
    }
    else {
        alert("It was a tie!");
    }
};

playGame(5);
