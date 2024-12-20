let validChoices = ['rock', 'paper', 'scissors'];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let num = Math.random();
    if (num <= 0.33) {
        return 'rock';
    } else if (num <= 0.66) {
        return 'paper';
    } else {
        return 'scissors';
    }
}


function getHumanChoice() {
    let userChoice = prompt("Please enter rock,paper or scissors").toLowerCase()
    if (validChoices.includes(userChoice)) {
        return userChoice
    } else { 
            return 'Invalid response. Please enter rock, paper or scissors'}
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return 'It\'s a draw!';
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'scissors' && computerChoice === 'paper') ||
        (humanChoice === 'paper' && computerChoice === 'rock')
    ) {
       return 'You Win!';
    } else {
        return 'You Lose';
    }
}



        const humanSelection = getHumanChoice();  
        const computerSelection = getComputerChoice(); 
  


  function playGame() {
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();  
        const computerSelection = getComputerChoice();  
        
        const result = playRound(humanSelection, computerSelection); 
        
        if (result === 'You Win!') {
            ++humanScore;
            alert(`You win this round! Your choice: ${humanSelection}, Computer's choice: ${computerSelection}`);
        } else if (result === 'You Lose') {
            ++computerScore;
            alert(`You lose this round! Your choice: ${humanSelection}, Computer's choice: ${computerSelection}`);
        } else {
            alert(`It's a draw! Both chose ${humanSelection}`);
        }
    }

    alert(`Game over! Final score - You: ${humanScore}, Computer: ${computerScore}`);
}


playGame();