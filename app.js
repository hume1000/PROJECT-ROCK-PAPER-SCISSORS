const choises = ['Rock', 'Paper', 'Scissors'];
/*const playerSelection = prompt("Choose your weapon");*/
let playerSelection = "Paper";
let computerSelection = "Paper";


function computerPlay() {
    let computerChoise = choises[Math.floor(Math.random() * 3)];
    return computerChoise;
}

function playRound (playerSelection, computerSelection) {
    if( playerSelection === "Rock" && computerSelection === "Paper" ||
        playerSelection === "Paper" && computerSelection === "Scissors" ||
        playerSelection === "Scissors" && computerSelection === "Rock") {
            return "You Lose!!!"
        }
    else if( playerSelection === "Paper" && computerSelection === "Rock" ||
    playerSelection === "Scissors" && computerSelection === "Paper" ||
    playerSelection === "Rock" && computerSelection === "Scissors") {
        return "You Win!!!"
    }
    else {
        return "It's a Tie";
    }
}


