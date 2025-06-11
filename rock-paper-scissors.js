  let humanScore = 0;
  let computerScore =0;

function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log('It\'s a Draw!')
  }
  else if (
  humanChoice === 'rock' && computerChoice === 'scissors' || 
  humanChoice === 'paper' && computerChoice === 'rock' || 
  humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    console.log('You Win! ' + humanChoice + ' beats ' + computerChoice)
    ++humanScore
  }
  else {
    console.log('You Lose! ' + humanChoice + ' loses to ' + computerChoice)
    ++computerScore
  }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

function getComputerChoice() {
  const computerChoice = Math.random();
  if (computerChoice < 1/3) {
    return 'rock';
  }
  else if (computerChoice < 2/3) {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}

function getHumanChoice() {
  let choice = prompt('Make your Choice')
  return choice
}

