let wins = 0;
let loses = 0;
let gameRounds = wins + loses;
let playerChoice;
let compChoice;

const pChoice = document.querySelectorAll('.choice');
const gameResults = document.querySelector('#gameResults');
const loseRound = document.querySelector('#lose');
const winRound = document.querySelector('#win');
const rounds = document.querySelector('#rounds');
const resetBtn = document.querySelector('#reset');

function computer() {
	const choices = ['Rock', 'Paper', 'Scissors'];
	let rand = Math.floor(Math.random() * choices.length);
	compChoice = choices[rand];
	console.log(compChoice + '2');
	return compChoice;
}

function winGame(playerChoice, compChoice) {
	winRound.textContent = `Wins: ${wins}`;
	gameResults.textContent = `You win! ${playerChoice} beats ${compChoice}!`;
}

function loseGame(playerChoice, compChoice) {
	loseRound.textContent = `Loses: ${loses}`
	gameResults.textContent = `You lose! ${compChoice} beats ${playerChoice}!`
}

function playRound(playerChoice, compChoice) {
	if (playerChoice === 'Rock' && compChoice === `Scissors` || playerChoice === `Paper` &&
		compChoice === `Rock` || playerChoice === `Scissors` && compChoice === `Paper`) {
		wins++;
		gameRounds++;
		winGame(playerChoice, compChoice);
	} else if (playerChoice === `Rock` && compChoice === `Paper` || playerChoice === `Paper` &&
		compChoice === `Scissors` || playerChoice === `Scissors` && compChoice === `Rock`) {
		loses++;
		gameRounds++;
		loseGame(playerChoice, compChoice);
	} else {
		gameResults.textContent = `It's a tie! Pick Again!`;
	}

}

function playedRounds() {
	rounds.textContent = `Rounds: ${gameRounds}`;
	if (gameRounds === 5) {
		if (wins > loses) {
			gameResults.textContent = `You win! Final Score: Wins: ${wins}, Loses: ${loses}. Click Restart to play again`;
		} else {
			gameResults.textContent = `You lose! Final Score: Wins: ${wins}, Loses: ${loses}. Click Restart to play again`;
		}
	}
}

resetBtn.addEventListener('click', () => {
	wins = 0;
	loses = 0;
	gameRounds = 0;
	winRound.textContent = `Wins: ${wins}`;
	loseRound.textContent = `Loses: ${loses}`;
	rounds.textContent = `Rounds: ${gameRounds}`;
	gameResults.textContent = '';
});


pChoice.forEach(pChoice => pChoice.addEventListener('click', () => {
	playerChoice = pChoice.id;
	console.log(playerChoice);
	computer();
	playRound(playerChoice, compChoice);
	playedRounds();
}));



winRound.textContent = `Wins: ${wins}`;

loseRound.textContent = `Loses: ${loses}`

rounds.textContent = `Rounds: ${gameRounds}`;

