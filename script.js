// had to re do my algorithm after re visiting concepts of functions and understanding parameters
// Start the project by having a function called "getComputerChoice" randomly generating rock paper or scissor
// make a function that takes the two parameters of the computerSelection and playerSelection and returns a string declaring the winner
// return all values and dont console.log the scenarios in the function
//test the player vs computer function with a constant selection of rock for the user to see if it works
//after testing is complete allow a prompt for the user to input the data to play the game
// use loops for the game to have a best out of 5 round

function getComputerChoice(){
    let choices = ["rock","paper","scissor"];
    let randomChoice = choices[Math.floor(Math.random()*3)];
    return randomChoice;
}

console.log("computer selected " + getComputerChoice());

// Random computer generation works and prints to the console