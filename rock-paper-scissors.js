let humanScore = 0;
let computerScore = 0;


const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const body = document.querySelector('body');
body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);

const results = document.createElement('div');
body.appendChild(results);
results.textContent = '';
const score = document.createElement('div');
body.appendChild(score);
score.textContent = ''

rockBtn.addEventListener('click', () => btnClicked('rock'));
paperBtn.addEventListener('click', () => btnClicked('paper'));
scissorsBtn.addEventListener('click', () => btnClicked('scissors'));

function btnClicked(humanSelection) {
  const computerSelection = getComputerChoice();
  playRound(humanSelection, computerSelection);
}

function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    results.textContent = 'It\'s a Draw! Both chose ' + humanChoice;
  }
  else if (
    humanChoice === 'rock' && computerChoice === 'scissors' || 
    humanChoice === 'paper' && computerChoice === 'rock' || 
    humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    results.textContent = 'You Win! ' + humanChoice + ' beats ' + computerChoice;
    humanScore++;
  }
  else {
    results.textContent = 'You Lose! ' + humanChoice + ' loses to ' + computerChoice;
    computerScore++;
  }
  score.textContent = 'Score - Player: ' + humanScore + ' vs. Computer: ' + computerScore;
}

function getComputerChoice() {
  let computerChoice = Math.floor(Math.random() * 3);
  if (computerChoice === 0) {
    return 'rock';
  }
  else if (computerChoice === 1) {
    return 'paper';
  }
  else {
    return 'scissors';
  }
}