console.log('Hello World');



function computer() {
    let getComputerChoice = Math.random();
    if (getComputerChoice >= 0 && getComputerChoice <= 0.333) {
        getComputerChoice = 'Rock'
    }
    else if (getComputerChoice >= 0.333 && getComputerChoice <= 0.666) {
        getComputerChoice = 'Paper'
    }
    else if (getComputerChoice >= 0.666 && getComputerChoice <= 1){
        getComputerChoice = 'Scissor'
    }
    console.log(getComputerChoice);
}





