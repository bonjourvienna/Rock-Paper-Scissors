"use strict";
const btns = document.querySelectorAll("button");
const displayMessages = document.getElementById("messages");
const playerScoreDisplay = document.getElementById("playerScore");
const compScoreDisplay = document.getElementById("computerScore");
const playerWeaponDisplay = document.getElementById("playerWeapon");
const computerWeaponDisplay = document.getElementById("computerWeapon");
const weapons = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

// btns.forEach((btn) => {
//   btn.addEventListener("click", () => play(btn.className, getComputerChoice()));
// });

btns.forEach((btn) => {
  if (btn.classList.contains("rock")) {
    btn.addEventListener(
      "click",
      () => play(btn.className),
      (playerWeaponDisplay.textContent = btn.value) ||
        (computerWeaponDisplay.textContent = btn.value)
    );
  }
});

function play(playerChoice) {
  let computerChoice = getComputerChoice();

  if (playerScore < 5 && computerScore < 5) {
    if (
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      playerScore++;
      displayScore();
    }

    if (
      (computerChoice === "paper" && playerChoice === "rock") ||
      (computerChoice === "rock" && playerChoice === "scissors") ||
      (computerChoice === "scissors" && playerChoice === "paper")
    ) {
      computerScore++;
      displayScore();
    }
    if (computerChoice === playerChoice) {
      displayMessages.textContent = `it's tie.`;
    } else if (playerScore === 5) {
      displayMessages.textContent = `YOU WON!`;
    } else if (computerScore === 5) {
      displayMessages.textContent = `YOU LOSE!`;
    }
  }
}

function getComputerChoice() {
  const i = Math.floor(Math.random() * 3);
  return weapons[i];
}

function displayScore() {
  playerScoreDisplay.textContent = `Player score: ${playerScore}`;
  compScoreDisplay.textContent = `Computer score: ${computerScore}`;
}
