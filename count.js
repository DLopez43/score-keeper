let player1Score = 0
let player2Score = 0

let firstPlayer = document.querySelector('#player1');
let secondPlayer = document.querySelector('#player2');
let zeroed = document.querySelector('#reset');
let rounds = document.querySelector('#Maxrounds');
let selected = rounds.options[rounds.selectedIndex];
let roundsValue = selected.value;
let h1 = document.querySelector('h1');

rounds.addEventListener('change', function (e){
  roundsValue = Number(this.value);
})

firstPlayer.addEventListener('click', function (e) {
    console.log('CLICK')
    player1Score += 1
    h1.textContent = `${player1Score} to ${player2Score}`
})

secondPlayer.addEventListener('click', function (e) {
    player2Score +=1
     h1.textContent = `${player1Score} to ${player2Score}`
})

zeroed.addEventListener('click', function (e) {
    h1.textContent = '0 to 0';
    player1Score = 0;
    player2Score = 0;
})