const choises = ["rock", "paper", "scissors"];
let playerSelection = prompt("Chose your weapon!").toLowerCase();
let computerSelection = choises[Math.floor(Math.random() * 3)];

/*function computerPlay() {
    computerChoise = choises[Math.floor(Math.random() * 3)];
    return computerChoise;
}*/

function oneRound(playerSelection, computerSelection) {
    if((playerSelection === "rock" && computerSelection === "paper") ||
     (playerSelection === "paper" && computerSelection === "scissors") || 
     (playerSelection === "scissors" && computerSelection === "rock")) {
        return "You Lose!!";
    } else if((playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper") || 
    (playerSelection === "rock" && computerSelection === "scissors")) {
        return "You Win!!";
    } else if(playerSelection === computerSelection) {
        return "It's a Tie!!";
    } else {
        return "Wrong Choise!!";
    }
}