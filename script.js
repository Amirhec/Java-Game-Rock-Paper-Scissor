// had to re do my algorithm after re visiting concepts of functions and understanding parameters
// Start the project by having a function called "getComputerChoice" randomly generating rock paper or scissor
// make a function that takes the two parameters of the computerSelection and playerSelection and returns a string declaring the winner
// return all values and dont console.log the scenarios in the function
//test the player vs computer function with a constant selection of rock for the user to see if it works
//after testing is complete allow a prompt for the user to input the data to play the game
// use loops for the game to have a best out of 5 round




// Allow user to pick rock paper or scissors and display it in the console. Make any user input make it lowercase
// User input now correctly logs into the console.
function getplayerChoice(){
  let userOption = prompt("Pick rock,paper,or scissor").toLowerCase();
  if(userOption === "rock" ){
    return("rock")
  }else if(userOption === "paper"){
    return("paper")
  }else if(userOption === "scissor"){
    return("scissor")
  } else{
    alert("Input not valid. Please try again")
  }

}

const playerSelection = getplayerChoice();







// Allow computer to autogenerate their choice
//Random computer generation works and prints to the console when logged

function getComputerChoice(){
    let choices = ["rock","paper","scissor"];
    let randomChoice = choices[Math.floor(Math.random()*3)];
    return randomChoice;
}

const computerSelection = getComputerChoice()

// play round function works and later on work on user input because as of now it is constantly showing rock

function playRound(playerSelection, computerSelection){
console.log("user chose " + playerSelection);
console.log("computer chose " + computerSelection);
    if(playerSelection === computerSelection){
       return ("its a tie")

    } else if(playerSelection === "rock" && computerSelection === "scissor"){
      return ("you win! rock beats scissor ")

    } else if(playerSelection === "paper" && computerSelection === "rock"){
      return ("you win! paper beats rock")

    } else if(playerSelection === "scissor" && computerSelection === "paper"){
      return ("you win! scissor beats paper")

    } else{
      return("you lost! Better luck next time")
    }
    

}

console.log(playRound(playerSelection, computerSelection))

// this is a new function that will loop the gameplay to a best of 5 play

function game(){
  for (let i = 0; i < 5; i++){

    console.log(playRound(playerSelection, computerSelection))
    
  }
}
game();

// this function will display the winner of the best of 5 series 






