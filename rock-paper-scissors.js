let humanScore = 0;
let computerScore =0;


const rockBtn = document.createElement('button');
const paperBtn = document.createElement('button');
const scissorsBtn = document.createElement('button');
const body = document.querySelector('body');
body.appendChild(rockBtn);
body.appendChild(paperBtn);
body.appendChild(scissorsBtn);

function playGame () {
  for (let i = 0; i < 5; i++) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
    console.log('Score - You: ' + humanScore + ' vs. Computer: ' + computerScore);
  }
}

function playRound(humanChoice, computerChoice) {
  humanChoice.toLowerCase();
  if (humanChoice === computerChoice) {
    console.log('It\'s a Draw! Both chose ' + humanChoice);
  }
  else if (
  humanChoice === 'rock' && computerChoice === 'scissors' || 
  humanChoice === 'paper' && computerChoice === 'rock' || 
  humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    console.log('You Win! ' + humanChoice + ' beats ' + computerChoice);
    humanScore++;
  }
  else {
    console.log('You Lose! ' + humanChoice + ' loses to ' + computerChoice);
    computerScore++;
  }
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

function getHumanChoice() {
  return prompt('Make your Choice');
  
}