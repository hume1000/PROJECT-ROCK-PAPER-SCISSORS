const choises = ["rock", "paper", "scissors"];
let playerSelection = prompt("Chose your weapon!").toLowerCase();
let computerSelection = computerPlay();
let scorePlayer = parseInt(0);
let scoreComputer = parseInt(0);
let round = Number(scorePlayer) + Number(scoreComputer);

function computerPlay() {
    computerChoise = choises[Math.floor(Math.random() * 3)];
    return computerChoise;
}

function playRound(playerSelection, computerSelection) {
    if((playerSelection === "rock" && computerSelection === "paper") ||
     (playerSelection === "paper" && computerSelection === "scissors") || 
     (playerSelection === "scissors" && computerSelection === "rock")) {
        scoreComputer++;
        console.log(playerSelection + " VS " + computerSelection);
        return "You Lose!!";
    } else if((playerSelection === "paper" && computerSelection === "rock") || 
    (playerSelection === "scissors" && computerSelection === "paper") || 
    (playerSelection === "rock" && computerSelection === "scissors")) {
        scorePlayer++;
        console.log(playerSelection + " VS " + computerSelection);
        return "You Win!!";
    } else if(playerSelection === computerSelection) {
        console.log(playerSelection + " VS " + computerSelection);
        return "It's a Tie!!";
    } else {
        return "Wrong Choise!!";
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection))
        console.log("Your score = " + scorePlayer);
        console.log("Computer score = " + scoreComputer);   
        console.log("--- Round " + round + " ---");  
       }
     }
