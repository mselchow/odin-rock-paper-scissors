let playerScore = 0, computerScore = 0;

function computerPlay() {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
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
        return "tie";
    } else if (player == "rock") {
        return (computer == "paper") ? "computer" : "player";
    } else if (player == "paper") {
        return (computer == "rock") ? "player" : "computer";
    } else if (player == "scissors") {
        return (computer == "rock") ? "computer" : "player";
    } else {
        return "playRound returned an unexpected value.";
    }
}

function showRoundOutcomeMessage(outcome, playerSelection, computerSelection) {
    switch (outcome) {
        case "tie":
            console.log("It's a tie: you both chose " + playerSelection + ".");
            break;
        case "player":
            console.log("You win: " + playerSelection + " beats " + computerSelection);
            break;
        case "computer":
            console.log("You lose: " + computerSelection + " beats " + playerSelection);
            break;
        default:
            break;
    }
}

function game() {
    resetScore();

    let userChoice, computerChoice, outcome;

    for (let i = 0; i < 5; i++) {
        console.log("Round " + i + ":");

        userChoice = prompt("Please enter your choice of Rock, Paper, or Scissors.");
        computerChoice = computerPlay();

        outcome = playRound(userChoice, computerChoice);
        adjustScore(outcome);
        showRoundOutcomeMessage(outcome, userChoice, computerChoice);
    }
    console.log();
    showScoreMessage();
    showGameOutcomeMessage();
}

function showScoreMessage() {
    console.log("SCORE -- Player: " + playerScore + ", Computer: " + computerScore);
}

function showGameOutcomeMessage() {
    switch (determineOverallWinner()) {
        case "tie":
            console.log("It's a tie!");
            break;
        case "player":
            console.log("You won!!!");
            break;
        case "computer":
            console.log("You lost...");
            break;
        default:
            break;
    }
}

function determineOverallWinner() {
    if (playerScore == computerScore) {
        return "tie";
    } else {
        return (playerScore > computerScore) ? "player" : "computer";
    }
}

function adjustScore(outcome) {
    switch (outcome) {
        case "player":
            increasePlayerScore();
            break;
        case "computer":
            increaseComputerScore();
            break;
        case "tie":
            break;
        default:
            break;
    }
}

function increasePlayerScore() {
    playerScore++;
}

function increaseComputerScore() {
    computerScore++;
}

function resetScore() {
    playerScore = 0;
    computerScore = 0;
}