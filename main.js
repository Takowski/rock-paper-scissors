function getComputerChoice(){
  let array = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "draw";
    } else if (
        (playerSelection==="rock" && computerSelection==="scissors")||
        (playerSelection==="paper" && computerSelection==="rock")||
        (playerSelection==="scissors" && computerSelection==="paper")
    ) {

        return "you wim";
    } else {
        return "you loose";
    }
}

const playerSelection = "rock";
const computerSelection= getComputerChoice();
console.log(`computer choose ${computerSelection}`)
console.log(playRound(playerSelection, computerSelection));