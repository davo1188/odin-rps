/*
Title: Rock Paper Scissors
Author: Sam Davidson
Project Inspiration: The Odin Project
*/


const choices = ['rock', 'paper', 'scissors'];

function game() {
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        if (playRound(playerScore, computerScore) == 1) {
            playerScore++;
        } else {
            computerScore++;
        }   
    }
    logWinner(playerScore, computerScore);
}

function playRound(playerScore, computerScore) {
    let playerSelection = personPlay();
    let computerSelection = computerPlay();
    if (determineWinner(playerSelection, computerSelection) == 1) {
        console.log("You win!");
        console.log(`${playerSelection} beats ${computerSelection}.`);
        return 1;
    } else if (determineWinner(playerSelection, computerSelection) == 0) {
        console.log("It's a draw!")
    } else {
        console.log("You lose!")
        console.log(`${computerSelection} beats ${playerSelection}.`);
        return -1;
    }
}

function computerPlay() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function personPlay() {
    let playerChoice = null;
    while (choices.includes(playerChoice) == false) {
        playerChoice = prompt("Type rock, paper, or scissors");
        playerChoice = playerChoice.toLowerCase();
    }
    return playerChoice;   
}

function determineWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (
        playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock') {
        return -1;
    } else {
        return 1;
    }
}

function logWinner(playerScore, computerScore) {
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else {
        console.log("Computer Wins!");
    }
}

game();