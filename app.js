const computerChoiceDisplay = document.getElementById('computer-choice');
const userChoiceDisplay = document.getElementById('user-choice');
const resultDisplay = document.getElementById('result');
const possibleChoices = document.querySelectorAll('button');

const computerScoreDisplay = document.getElementById('computer-score');
const userScoreDisplay = document.getElementById('user-score');

let computerScore = 0;
let userScore = 0;


let userChoice;
let computerChoice;
let result; 

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
userChoice = e.target.id;
userChoiceDisplay.innerHTML = userChoice;
generateComputerChoice();
getResult();
numberOfGames();
}))

function generateComputerChoice() {
    const randomNumber = Math.floor(Math.random() * 3) + 1;
    console.log(randomNumber)

    if(randomNumber === 1) {
        computerChoice = '👊';
    }
    if(randomNumber === 2) { 
        computerChoice = '✂️';
    }
    if(randomNumber === 3) {
        computerChoice = '✋';
    }
    computerChoiceDisplay.innerHTML = computerChoice;
}
function getResult () {
    if(computerChoice === userChoice) {
        result = 'It\'s a tie';
    }
    if(computerChoice === '👊' && userChoice === '✋') {
        result = 'Player wins';
    }
    if(computerChoice === '👊' && userChoice === '✂️') {
        result = 'Computer wins';
    }
    if(computerChoice === '✋' && userChoice === '✂️') {
        result = 'Player wins';
    }
    if(computerChoice === '✋' && userChoice === '👊') {
        result = 'Computer wins';
    }
    if(computerChoice === '✂️' && userChoice === '✋') {
        result = 'Computer wins';
    }
    if(computerChoice === '✂️' && userChoice === '👊') {
        result = 'Player wins';
    }
    resultDisplay.innerHTML = result;
}

function numberOfGames () {
    if( result === 'Computer wins') {
        computerScore++;
        computerScoreDisplay.innerHTML = computerScore;
    } else {
        userScore++;
        userScoreDisplay.innerHTML = userScore;
    }
    if( computerScore == 5 ) {
        result = 'The winner of this round is the computer';
        resultDisplay.innerHTML = result;
    } if( userScore == 5 ) {
        result = 'Congrats! You are the winner of this round.';
    }   resultDisplay.innerHTML = result;
}
