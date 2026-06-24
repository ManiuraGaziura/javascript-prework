function printMessage(msg) {
  var div = document.createElement('div');
  div.innerHTML = msg;
  document.getElementById('messages').appendChild(div);
}

function clearMessages() {
  document.getElementById('messages').innerHTML = '';
}

var randomNumber = Math.floor(Math.random() * 9 + 11);

printMessage('Wylosowana liczba to: ' + randomNumber);