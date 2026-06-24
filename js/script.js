function printMessage(msg) {
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

function getMoveName(argMoveId) {
  if (argMoveId == 1) {
    return 'kamień';
  } else if (argMoveId == 2) {
    return 'papier';
  } else if (argMoveId == 3) {
    return 'nożyce';
  } else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '. Zakładam, że chodziło o kamień.');
    return 'kamień';
  }
}

function displayResult(argPlayerMove, argComputerMove) {
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if (argPlayerMove == argComputerMove) {
    printMessage('Remis!');
  } else if (argPlayerMove == 'papier' && argComputerMove == 'kamień') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'kamień' && argComputerMove == 'nożyce') {
    printMessage('Wygrywasz!');
  } else if (argPlayerMove == 'nożyce' && argComputerMove == 'papier') {
    printMessage('Wygrywasz!');
  } else {
    printMessage('Przegrywasz :(');
  }
}

function buttonClicked(argButtonName) {
  clearMessages();

  console.log(argButtonName + ' został kliknięty');

  var randomNumber = Math.floor(Math.random() * 3 + 1);
  var computerMove = getMoveName(randomNumber);
  var playerMove = argButtonName;

  console.log('Wylosowana liczba to: ' + randomNumber);
  console.log('Ruch komputera to: ' + computerMove);
  console.log('Ruch gracza to: ' + playerMove);

  displayResult(playerMove, computerMove);
}

var buttonRock = document.getElementById('button-rock');
var buttonPaper = document.getElementById('button-paper');
var buttonScissors = document.getElementById('button-scissors');

buttonRock.addEventListener('click', function() {
  buttonClicked('kamień');
});

buttonPaper.addEventListener('click', function() {
  buttonClicked('papier');
});

buttonScissors.addEventListener('click', function() {
  buttonClicked('nożyce');
});