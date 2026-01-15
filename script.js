console.log("Hello world!");
const choices = ['rock', 'paper', 'scissors'];
const getComputerChoice = function(choices) {
    const choiceIndex =  Math.floor(Math.random()*choices.length);
    return choices[choiceIndex];
};

console.log(getComputerChoice(choices));