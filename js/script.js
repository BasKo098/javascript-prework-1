function printMessage(msg) {
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages() {
	document.getElementById('messages').innerHTML = '';
}

const buttonRock = document.getElementById('button-rock');
const buttonPaper = document.getElementById('button-paper');
const buttonScissors = document.getElementById('button-scissors');
const xResult = document.getElementById('xResult');
const yResult = document.getElementById('yResult')
const result = document.getElementById('result');
let xTotalPoints = 0;
let yTotalPoints = 0;

/**fn btn*/
//funkcja buttonClicke przyjmująca wartość argButtonName która jest równa playerMove, wywołuję funckcję która czyści poprzednie komunikaty i wyświetla w konsoli wybór gracza)*/

function buttonClicked(argButtonName) {
	clearMessages();
	const playerMove = argButtonName;
	console.log(playerMove + ' został kliknięty');
	const randomNumber = Math.floor(Math.random() * 3 + 1);
	const computerMove = getMoveName(randomNumber);
	displayResult(playerMove, computerMove);
  }
/**
 * przypisanie ruchowi gracza wartości dla wszystkich opcji ruchu
 */
function getMoveName(argMoveId) {
  console.log('wywołano funkcję getMoveName z argumentem: ' + argMoveId);
  if (argMoveId == 1) {
    return 'kamień';
  }
  else if (argMoveId == 2) {
		return 'papier';
  } 
 else if (argMoveId == 3) {
		return 'nożyce'
 } 
  else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o "kamień".');
    return 'kamień';
  }
}

/**funkcja zwraca rezultat gry w zalenosci od wariantów ruchu gracza i zlicza punkty z rozgrywki wraz z sumą zdobytych punktów */
function displayResult(argPlayerMove, argComputerMove) {
	console.log('wywołano funkcję displayResults z argumentami: ' + argPlayerMove + ', ' + argComputerMove);
	let xResult=[];
	let yResult=[];
	if (argPlayerMove == 'papier' && argComputerMove == 'kamień'){
		printMessage('WYGRYWASZ!');
		xResult.push(1);
		yResult.push(0);
		xTotalPoints += 1;
	}
	else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce'){
		printMessage('WYGRYWASZ!');
		xResult.push(1);
		yResult.push(0);
		xTotalPoints += 1;
	}
	else if (argPlayerMove =='nożyce' && argComputerMove == 'papier'){
		printMessage('WYGRYWASZ!');
		xResult.push(1);
		yResult.push(0);
		xTotalPoints += 1;
	}
	else if (argPlayerMove == argComputerMove){
		printMessage('REMIS!');
		xResult.push(1);
		yResult.push(1);
		xTotalPoints += 1;
		yTotalPoints += 1;	
	}
	else {
	  printMessage('PRZEGRYWASZ :(');
	  xResult.push(0);
	  yResult.push(1);
	  yTotalPoints += 1;
	}

	printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);
	console.log('xResult' + xResult);
	console.log('yResult' + yResult);
	document.getElementById('xResult').textContent = 'Twój wynik: ' + xResult;
    document.getElementById('yResult').textContent = 'Mój wynik: ' + yResult;
	document.getElementById('result').textContent = 'Wygrane rundy: '+ xTotalPoints +  ' Przegrane rundy: ' + yTotalPoints;
  }
//Btn
//przypisanie do elementu button w html zmiennej button-test i dodanie odsłuchu kliknięcia który wywoła funkcję buttonClicked wyświetlająca w koncoli wybór gracza
  buttonRock.addEventListener ('click', function(){ buttonClicked('kamień'); });
  buttonPaper.addEventListener ('click', function(){ buttonClicked('papier'); });
  buttonScissors.addEventListener('click' ,function(){ buttonClicked('nożyce'); });
