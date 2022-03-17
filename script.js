/*
 *
 *  Global variable declaration across program
 *
 */
let playerScore = 0,
  computerScore = 0;

/*
 *
 *  Event listeners
 *
 */
const buttons = document.querySelector(".buttons");

buttons.addEventListener("click", (e) => {
  if (e.target.nodeName !== "BUTTON") return;
  playGame(e.target.id, computerPlay());
});

/*
 *
 *  Main game logic functions
 *
 */
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
  let player = playerSelection.toLowerCase();
  let computer = computerSelection.toLowerCase();

  if (player == computer) {
    return "tie";
  } else if (player == "rock") {
    return computer == "paper" ? "computer" : "player";
  } else if (player == "paper") {
    return computer == "rock" ? "player" : "computer";
  } else if (player == "scissors") {
    return computer == "rock" ? "computer" : "player";
  } else {
    return "playRound returned an unexpected value.";
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

  const playerScoreText = document.querySelector(".scores .player .score");
  playerScoreText.textContent = playerScore;
}

function increaseComputerScore() {
  computerScore++;

  const playerScoreText = document.querySelector(".scores .computer .score");
  playerScoreText.textContent = computerScore;
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

function playGame(userChoice, computerChoice) {
  let outcome = playRound(userChoice, computerChoice);
  adjustScore(outcome);
  if (!checkForWinner()) {
    showRoundOutcomeMessage(outcome, userChoice, computerChoice);
  }
}

/*
 *
 *  Outcome messages functions
 *
 */
function updateOutcomeText(text) {
  const container = document.querySelector(".outcome");
  container.textContent = text;
}

function showRoundOutcomeMessage(outcome, playerSelection, computerSelection) {
  switch (outcome) {
    case "tie":
      updateOutcomeText("It's a tie: you both chose " + playerSelection + ".");
      break;
    case "player":
      updateOutcomeText(
        "You win: " + playerSelection + " beats " + computerSelection + "."
      );
      break;
    case "computer":
      updateOutcomeText(
        "You lose: " + computerSelection + " beats " + playerSelection + "."
      );
      break;
    default:
      break;
  }
}

function checkForWinner() {
  if (playerScore == 5 || computerScore == 5) {
    let text = playerScore > computerScore ? "You won!!!" : "You lost...";
    updateOutcomeText(text);
    return true;
  } else {
    return false;
  }
}
