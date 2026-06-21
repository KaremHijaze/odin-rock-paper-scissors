const validChoices = ['rock', 'paper', 'scissors'];
const imgs = document.querySelectorAll('.human-choice');
const humanScoreDisplay = document.querySelector('.human-score');
const computerScoreDisplay = document.querySelector('.computer-score');
const resultDisplay = document.querySelector('.result-display');
const rounds = 5
let humanScore = 0
let computerScore = 0
humanScoreDisplay.textContent = `${humanScore}`;
computerScoreDisplay.textContent = `${computerScore}`;

// returns a random choice from the choices 
const getComputerChoice = function () {
    return validChoices[Math.floor(Math.random() * validChoices.length)];
};

// plays a round and updates score displays
const playRound = function (humanChoice) {
    const computerChoice = getComputerChoice();
    let result = "";
    if (!validChoices.includes(humanChoice)) {
        result = "invalid! please choose a valid move"
        resultDisplay.textContent = result;
        return
    }
    if (humanChoice === computerChoice) {
        result = `Tie! You both selected ${humanChoice}`;
    }

    else if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')) {
        humanScore++;
        result = `You Win! ${humanChoice} beats ${computerChoice}.`;
    }
    else {
        computerScore++;
        result = `You Lose! ${computerChoice} beats ${humanChoice}.`;
    }

    if (humanScore === rounds || computerScore === rounds) {
        imgs.forEach(img => img.removeEventListener('click', handleClick));
        const finalResult = document.createElement('p');
        finalResult.style['fontWeight'] = 'bold';
        const scoreBoard = document.querySelector('.score-board') 
        const note = document.createElement('h6');
        note.textContent = 'Reload the page to reset';
        note.style['color'] = 'red';
        
        if (humanScore === rounds) {
            finalResult.textContent = 'Good Job!!';
        }
        else {
            finalResult.textContent = 'Better Luck next time :('
        }

        scoreBoard.insertBefore(finalResult, resultDisplay);
        scoreBoard.appendChild(note);
    }
    humanScoreDisplay.textContent = humanScore;
    computerScoreDisplay.textContent = computerScore;
    resultDisplay.textContent = result;
}

const handleClick = function (event) {
    const choice = this.src.toLowerCase().split('/').pop().replace('.jpg', '').replace('.png', '');
    playRound(choice);
};

imgs.forEach(img => {
    img.addEventListener('click', handleClick);
});

