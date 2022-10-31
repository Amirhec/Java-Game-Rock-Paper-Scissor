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
const rock = document.querySelector('#rock')
const paper = document.querySelector('#paper')
const scissor = document.querySelector('#scissor')
const divOutcome = document.querySelector('.outcome')

rock.addEventListener('click', () =>{
  const computerSelection = getComputerChoice()
  const playerSelection = 'rock'
  playRound(playerSelection,computerSelection)
  
});
paper.addEventListener('click', () =>{
  const computerSelection = getComputerChoice()
  const playerSelection = 'paper'
  playRound(playerSelection,computerSelection)
  
});
scissor.addEventListener('click', () =>{
  const computerSelection = getComputerChoice()
  const playerSelection = 'scissor'
  playRound(playerSelection,computerSelection)
  
});









// Allow computer to autogenerate their choice
//Random computer generation works and prints to the console when logged

function getComputerChoice(){
    let choices = ["rock","paper","scissor"];
    let randomChoice = choices[Math.floor(Math.random()*3)];
    return randomChoice;
}



// play round function works and later on work on user input because as of now it is constantly showing rock

function playRound(playerSelection, computerSelection){

    if(playerSelection === computerSelection){
      const p = document.createElement('p')
      p.innerText = "You tied with the computer"
      divOutcome.appendChild(p)

    } else if(playerSelection === "rock" && computerSelection === "scissor"){
      userScore++
      const p = document.createElement('p')
      p.innerText = "You win! rock beats scissor"
      divOutcome.appendChild(p)

    } else if(playerSelection === "paper" && computerSelection === "rock"){
      userScore++
      const p = document.createElement('p')
      p.innerText = "You win! paper beats rock"
      divOutcome.appendChild(p)

    } else if(playerSelection === "scissor" && computerSelection === "paper"){
      userScore++
      const p = document.createElement('p')
      p.innerText = "You win! scissor beats paper"
      divOutcome.appendChild(p)

    } else if(playerSelection === "rock" && computerSelection === "paper"){
      computerScore++
      const p = document.createElement('p')
      p.innerText = "You lose! paper beats rock"
      divOutcome.appendChild(p)
    } else if(playerSelection === "paper" && computerSelection === "scissor"){
      computerScore++
      const p = document.createElement('p')
      p.innerText = "You lose! scissor beats paper"
      divOutcome.appendChild(p)
      
    } else if (playerSelection === "scissor" && computerSelection === "rock"){
      computerScore++
      const p = document.createElement('p')
      p.innerText = "you lose! rock beats scissor"
      divOutcome.appendChild(p)
    }

}



// this is a new function that will loop the gameplay to a best of 5 play




