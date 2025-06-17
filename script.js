console.log('Hello World');

let humanScore = 0;
let computerScore = 0;

function computerChoice() {
   let getComputerChoice = Math.random();
   if (getComputerChoice >= 0 && getComputerChoice <= 0.333) {
      getComputerChoice = 'Rock'
   }
   else if (getComputerChoice >= 0.333 && getComputerChoice <= 0.666) {
      getComputerChoice = 'Paper'
   }
   else if (getComputerChoice >= 0.666 && getComputerChoice <= 1) {
      getComputerChoice = 'Scissor'
   }
   console.log(getComputerChoice);
   return getComputerChoice;
}

function userChoice() {
   let user = prompt("Choose between rock, paper, scissor")
   console.log(user);
   return user;
}

//Here the computer and human are undefined

function playRound(computer, human) {
   if (computer === 'Rock' && human === 'rock') {
      console.log('Draw')
   }
   else if (computer === 'Rock' && human === 'paper') {
      console.log('userChoice won');
      humanScore+1;
   }
   else if (computer === 'Rock' && human === 'scissors') {
      console.log('computerChoice won');
      computerScore+1;
   }
   else if (computer === 'Paper' && human === 'scissors') {
      console.log('userChoice won');
      humanScore+1;
   }
   else if (computer === 'Paper' && human === 'paper') {
      console.log('Draw')
   }
   else if (computer === 'Paper' && human === 'rock') {
      console.log('computerChoice won');
      computerScore+1;
   }
   else if (computer === 'Scissor' && human === 'scissors') {
      console.log('Draw')
   }
   else if (computer === 'Scissor' && human === 'rock') {
      console.log('userChoice won');
      humanScore+1;
   }
   else if (computer === 'Scissor' && human === 'paper') {
      console.log('computerChoice won');
      computerScore+1;
   }

}
const humanSelection = userChoice();
const computerSelection = computerChoice();







