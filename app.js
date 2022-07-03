const choises = ["rock", "paper", "scissors"];

function computerPlay() {
    computerChoise = choises[Math.floor(Math.random() * 3)];
    return computerChoise;
}