function getComputerChoice() {
  let rock = 'rock';
  let paper = 'paper';
  let scissors = 'scissors';
  let choice = Math.random();
  if (choice < 1/3) {
    return choice = rock;
  }
  else if (choice < 2/3) {
    return choice = paper;
  }
  else {
    return choice = scissors;
  }
}