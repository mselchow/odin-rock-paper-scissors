function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
            break;
        case 1:
            return "Paper";
            break;
        case 2:
            return "Scissors";
            break;
        default:
            console.log("computerPlay returned an unexpected value.");
            break;
    }
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.toLowerCase()
    let computer = computerSelection.toLowerCase();

    if (player == computer) {
        return "It's a tie! You both chose " + player + ".";
    } else if (player == "rock") {
        return computer == "paper" ? "You lose! Paper beats rock." : "You win! Rock beats scissors.";
    } else if (player == "paper") {
        return computer == "rock" ? "You win! Paper beats rock." : "You lose! Scissors beats paper.";
    } else if (player == "scissors") {
        return computer == "rock" ? "You lose! Rock beats scissors." : "You win! Scissors beats paper.";
    } else {
        return "playRound returned an unexpected value.";
    }
}