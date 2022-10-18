// had to re do my algorithm after re visiting concepts of functions and understanding parameters
// Start the project by having a function called "getComputerChoice" randomly generating rock paper or scissor
// make a function that takes the two parameters of the computerSelection and playerSelection and returns a string declaring the winner
// return all values and dont console.log the scenarios in the function
//test the player vs computer function with a constant selection of rock for the user to see if it works
//after testing is complete allow a prompt for the user to input the data to play the game
// use loops for the game to have a best out of 5 round

// add a player and user score in increments based on winner  

let userScore = 0
let computerScore = 0


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








// Allow computer to autogenerate their choice
//Random computer generation works and prints to the console when logged

function getComputerChoice(){
    let choices = ["rock","paper","scissor"];
    let randomChoice = choices[Math.floor(Math.random()*3)];
    return randomChoice;
}



// play round function works and later on work on user input because as of now it is constantly showing rock

function playRound(playerSelection, computerSelection){
console.log("User chose " + playerSelection);
console.log("Computer chose " + computerSelection);
    if(playerSelection === computerSelection){
       return ("Its a tie")

    } else if(playerSelection === "rock" && computerSelection === "scissor"){
      userScore++
      return ("You win! rock beats scissor ")

    } else if(playerSelection === "paper" && computerSelection === "rock"){
      userScore++
      return ("You win! paper beats rock")

    } else if(playerSelection === "scissor" && computerSelection === "paper"){
      userScore++
      return ("You win! scissor beats paper")

    } else if(playerSelection === "rock" && computerSelection === "paper"){
      computerScore++
      return("You lose! paper beats rock")
    } else if(playerSelection === "paper" && computerSelection === "scissor"){
      computerScore++
      return("You lose! scissor beats paper")
    } else(playerSelection === "scissor" && computerSelection === "rock")
      computerScore++
      return("You lose! rock beats scissor")
    

}



// this is a new function that will loop the gameplay to a best of 5 play

function game(){
  for (let i = 0; i < 5; i++){
    const playerSelection = getplayerChoice();
    const computerSelection = getComputerChoice()
    console.log(playRound(playerSelection, computerSelection))
    console.log("User score is "+ userScore)
    console.log("Computer score is " + computerScore)
    console.log("________________________________________________________")
    
  }
}
game();

// this function will display the winner of the best of 5 series 

function result(){
  console.log("User Score is " + userScore);
  console.log("Computer Score is "+ computerScore);
  if(userScore > computerScore){
    return("User won the best out of 5")
  } else (computerScore < userScore)
    return( "Computer won the best out of 5")
  


}

console.log(result());



