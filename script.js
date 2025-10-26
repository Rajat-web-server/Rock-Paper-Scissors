console.log('Hello World');

let humanScore = 0;
let computerScore = 0;
let draw_ = 0;
let roundCount = 1;

function reset() {
   humanScore = 0;
   computerScore = 0;
   draw_ = 0;
   roundCount = 1
   console.clear();
   let output1 = document.getElementById("userScore");
   output1.textContent = humanScore;
   let output2 = document.getElementById("compScore");
   output2.textContent = computerScore;
   let output = document.getElementById("result");
   output.innerHTML = "";
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


let userValue;
let user = document.querySelector('.rock');
user.addEventListener("click", () => {
   userValue = "Rock";
   console.log("user value: " + userValue);
   let comp = computerChoice();
   playRound(comp, userValue);

});
let user2 = document.querySelector('.paper');
user2.addEventListener("click", () => {
   userValue = "Paper";
   console.log("user value: " + userValue);
   let comp = computerChoice();
   playRound(comp, userValue);

});
let user3 = document.querySelector('.scissor');
user3.addEventListener("click", () => {
   userValue = "Scissor";
   console.log("user value: " + userValue);
   let comp = computerChoice();
   playRound(comp, userValue);
});
// console.log(document.querySelector('.rock'));



//Here the computer and human are undefined
/* console.log(computer+" "+ human); */
function playRound(computer, human) {
   if (computer === 'Rock' && human === 'Rock') {
      console.log("It's a Draw");
      draw_++;
      console.log('Draw : ' + draw_);
      let output1 = document.getElementById("userScore");
      output1.textContent = humanScore;
      let output2 = document.getElementById("compScore");
      output2.textContent = computerScore;
      let output = document.getElementById("result");
      output.innerHTML = "It's a Draw !! Computer chose " + computer + " and you chose " + human;
   }
   else if (computer === 'Rock' && human === 'Paper') {
      console.log('userChoice won');
      humanScore++;
      console.log('human score : ' + humanScore);
      let output1 = document.getElementById("userScore");
      output1.textContent = humanScore;
      let output2 = document.getElementById("compScore");
      output2.textContent = computerScore;
      let output = document.getElementById("result");
      output.innerHTML = "You Won !! Computer chose " + computer + " and you chose " + human;
   }
   else if (computer === 'Rock' && human === 'Scissor') {
      console.log('computerChoice won');
      computerScore++;
      console.log('Computer score : ' + computerScore);
      let output1 = document.getElementById("userScore");
      output1.textContent = humanScore;
      let output2 = document.getElementById("compScore");
      output2.textContent = computerScore;
      let output = document.getElementById("result");
      output.innerHTML = "You Lost !! Computer chose " + computer + " and you chose " + human;
   }
   else if (computer === 'Paper' && human === 'Scissor') {
      console.log('userChoice won');
      humanScore++;
      console.log('human score : ' + humanScore);
      let output1 = document.getElementById("userScore");
      output1.textContent = humanScore;
      let output2 = document.getElementById("compScore");
      output2.textContent = computerScore;
      let output = document.getElementById("result");
      output.innerHTML = "You Won !! Computer chose " + computer + " and you chose " + human;
   }
   else if (computer === 'Paper' && human === 'Paper') {
      console.log("It's a Draw");
      draw_++;
      console.log('Draw : ' + draw_);
      let output1 = document.getElementById("userScore");
      output1.textContent = humanScore;
      let output2 = document.getElementById("compScore");
      output2.textContent = computerScore;
      let output = document.getElementById("result");
      output.innerHTML = "It's a Draw !! Computer chose " + computer + " and you chose " + human;
   }
   else if (computer === 'Paper' && human === 'Rock') {
      console.log('computerChoice won');
      computerScore++;
      console.log('Computer score : ' + computerScore);
      let output1 = document.getElementById("userScore");
      output1.textContent = humanScore;
      let output2 = document.getElementById("compScore");
      output2.textContent = computerScore;
      let output = document.getElementById("result");
      output.innerHTML = "You Lost !! Computer chose " + computer + " and you chose " + human;

   }
   else if (computer === 'Scissor' && human === 'Scissor') {
      console.log("It's a Draw");
      draw_++;
      console.log('Draw : ' + draw_);
      let output1 = document.getElementById("userScore");
      output1.textContent = humanScore;
      let output2 = document.getElementById("compScore");
      output2.textContent = computerScore;
      let output = document.getElementById("result");
      output.innerHTML = "It's a Draw !! Computer chose " + computer + " and you chose " + human;
   }
   else if (computer === 'Scissor' && human === 'Rock') {
      console.log('userChoice won');
      humanScore++;
      console.log('human score : ' + humanScore);
      let output1 = document.getElementById("userScore");
      output1.textContent = humanScore;
      let output2 = document.getElementById("compScore");
      output2.textContent = computerScore;
      let output = document.getElementById("result");
      output.innerHTML = "You Won !! Computer chose " + computer + " and you chose " + human;
   }
   else if (computer === 'Scissor' && human === 'Paper') {
      console.log('computerChoice won');
      computerScore++;
      console.log('Computer score : ' + computerScore);
      let output1 = document.getElementById("userScore");
      output1.textContent = humanScore;
      let output2 = document.getElementById("compScore");
      output2.textContent = computerScore;
      let output = document.getElementById("result");
      output.innerHTML = "You Lost !! Computer chose " + computer + " and you chose " + human;
   }
   else {
      console.log("use the appropriate value");
   }

}











