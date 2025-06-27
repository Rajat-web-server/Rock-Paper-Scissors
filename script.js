console.log('Hello World');

let humanScore = 0;
let computerScore = 0;
let draw_ = 0;
let roundCount = 1;

document.getElementById("toChoose").addEventListener("click", () => {
   if (roundCount <= 3) {
      console.log("round : " + roundCount);
      const humanSelection = userChoice();
      const computerSelection = computerChoice();
      playRound(computerSelection, humanSelection);
      roundCount++;
   }
   else {

      console.log("Final Result");
      console.log("Human won : " + humanScore);
      console.log("Computer won : " + computerScore);
      console.log("Draws : " + draw_);
      /* document.getElementById("toChoose").disabled = true; */
      /* console.clear(); */
      document.getElementById("toChoose").addEventListener("click", function () {
         let newBtn = document.createElement("button");
         newBtn.textContent = "Reset";
         newBtn.addEventListener("click", reset());
         document.body.appendChild(newBtn);
      }
      );
   }
});

function reset() {
   humanScore = 0;
   computerScore = 0;
   draw_ = 0;
   roundCount = 1
   console.clear();
}

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
   console.log("Computer choice : " + getComputerChoice);
   return getComputerChoice;
}

function userChoice() {
   let user = prompt("Choose between rock, paper, scissor")
   console.log("Human Choice : " + user);
   return user;
}



//Here the computer and human are undefined
/* console.log(computer+" "+ human); */
function playRound(computer, human) {
   if (computer === 'Rock' && human === 'rock') {
      console.log("It's a Draw");
      draw_++;
      console.log('Draw : ' + draw_);
   }
   else if (computer === 'Rock' && human === 'paper') {
      console.log('userChoice won');
      humanScore++;
      console.log('human score : ' + humanScore);
   }
   else if (computer === 'Rock' && human === 'scissor') {
      console.log('computerChoice won');
      computerScore++;
      console.log('Computer score : ' + computerScore);
   }
   else if (computer === 'Paper' && human === 'scissor') {
      console.log('userChoice won');
      humanScore++;
      console.log('human score : ' + humanScore);
   }
   else if (computer === 'Paper' && human === 'paper') {
      console.log("It's a Draw");
      draw_++;
      console.log('Draw : ' + draw_);
   }
   else if (computer === 'Paper' && human === 'rock') {
      console.log('computerChoice won');
      computerScore++;
      console.log('Computer score : ' + computerScore);
   }
   else if (computer === 'Scissor' && human === 'scissor') {
      console.log("It's a Draw");
      draw_++;
      console.log('Draw : ' + draw_);
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










