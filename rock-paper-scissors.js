  let rock = 'rock';
  let paper = 'paper';
  let scissors = 'scissors';

function getComputerChoice() {
  let computerChoice = Math.random();
  if (computerChoice < 1/3) {
    return choice = rock;
  }
  else if (computerChoice < 2/3) {
    return computerChoice = paper;
  }
  else {
    return computerChoice = scissors;
  }
}

function getHumanChoice() {
  let humanChoice = prompt('Make your Choice', ' ')
  if (humanChoice === rock) {
    return humanChoice = rock;
  }
  else if (humanChoice === paper) {
    return humanChoice = paper;
  }
  else {
    return humanChoice = scissors;
  }
}