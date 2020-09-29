let wins = 0;
let loses = 0;
let playerChoice;
let compChoice;



function player(){
	const pChoice = document.querySelectorAll('.choice');
		pChoice.forEach(pChoice => pChoice.addEventListener('click',() => {
			playerChoice = pChoice.id;
			console.log(playerChoice);
			computer();
			playRound(playerChoice,compChoice);
		}));
};

function computer(){
	const choices = ['Rock','Paper','Scissors'];
	let rand = Math.floor(Math.random() * choices.length);
	compChoice = choices[rand];
	console.log(compChoice + '2');
	return compChoice;
}

function winGame (playerChoice,compChoice){
	const winRound = document.querySelector('.win');
	winRound.textContent = `Wins: ${wins}`;
	const win = document.querySelector('.gameResults');
	win.textContent = `You win! ${playerChoice} beats ${compChoice}!`;
}
 
function loseGame (playerChoice,compChoice){
	const loseRound = document.querySelector('.lose');
	loseRound.textContent = `Loses: ${loses}`;
	const lose = document.querySelector('.gameResults');
	lose.textContent = `You lose! ${compChoice} beats ${playerChoice}!`
}

function tieGame (){
	const tie = document.querySelector('.gameResults');
	tie.textContent = `Its a tie! Pick Again!`
}

function playRound(playerChoice,compChoice){
	if(playerChoice === 'Rock' && compChoice === `Scissors` || playerChoice === `Paper` && 
		compChoice === `Rock` || playerChoice === `Scissors` && compChoice === `Paper`){
			wins++;
			winGame(playerChoice,compChoice);
	}else if(playerChoice === `Rock` && compChoice === `Paper` || playerChoice === `Paper` && 
		compChoice === `Scissors` || playerChoice === `Scissors` && compChoice === `Rock`){
			loses++;
			loseGame(playerChoice,compChoice);
	}else{
		tieGame();
	}

}


const startGame = document.querySelectorAll('.game');
startGame.forEach(startGame => startGame.addEventListener('click', player()));



