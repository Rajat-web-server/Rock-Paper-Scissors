console.log('Hello World');

let humanScore = 0;
let computerScore = 0;
let draw_ = 0;

const humanSelection = userChoice();
const computerSelection = computerChoice();


function computerChoice() {
   let getComputerChoice = Math.random();
   if (getComputerChoice >= 0 && getComputerChoice <= 0.333) {
      getComputerChoice = 'Rock'
   }
   else if (getComputerChoice >= 0.334 && getComputerChoice <= 0.666) {
      getComputerChoice = 'Paper'
   }
   else if (getComputerChoice >= 0.667 && getComputerChoice <= 1) {
      getComputerChoice = 'Scissor'
   }
   console.log(getComputerChoice);
   return getComputerChoice;
}

document.getElementById("toChoose").addEventListener("click",function userChoice() {
   let user = prompt("Choose between rock, paper, scissor")
   console.log(user);
   return user;
})

//Here the computer and human are undefined

function playRound(computer, human) {
   if (computer === 'Rock' && human === 'rock') {
      console.log("It's a Draw");
      draw_++;
      console.log('Draw : '+ draw_);
   }
   else if (computer === 'Rock' && human === 'paper') {
      console.log('userChoice won');
      humanScore ++;
      console.log('human score : ' + humanScore);
   }
   else if (computer === 'Rock' && human === 'scissors') {
      console.log('computerChoice won');
      computerScore ++;
      console.log('Computer score : ' + computerScore);
   }
   else if (computer === 'Paper' && human === 'scissors') {
      console.log('userChoice won');
      humanScore++;
      console.log('human score : ' + humanScore);
   }
   else if (computer === 'Paper' && human === 'paper') {
      console.log("It's a Draw");
      draw_++;
      console.log('Draw : '+ draw_);
   }
   else if (computer === 'Paper' && human === 'rock') {
      console.log('computerChoice won');
      computerScore ++;
      console.log('Computer score : ' + computerScore);
   }
   else if (computer === 'Scissor' && human === 'scissors') {
      console.log("It's a Draw");
      draw_++;
      console.log('Draw : '+ draw_);
   }
   else if (computer === 'Scissor' && human === 'rock') {
      console.log('userChoice won');
      humanScore++;
      console.log('human score : ' + humanScore);
   }
   else if (computer === 'Scissor' && human === 'paper') {
      console.log('computerChoice won');
      computerScore++;
      console.log('Computer score : ' + computerScore);
   }

}








