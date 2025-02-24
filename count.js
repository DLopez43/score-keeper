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
    player1Score += 1
    let player = 1
    h1.textContent = `${player1Score} to ${player2Score}`
    winner(player1Score, roundsValue, player)
})

secondPlayer.addEventListener('click', function (e) {
    player2Score += 1
    let player = 2
     h1.textContent = `${player1Score} to ${player2Score}`
     winner(player2Score, roundsValue, player)
})

zeroed.addEventListener('click', function (e) {
    h1.textContent = '0 to 0';
    player1Score = 0;
    player2Score = 0;
    firstPlayer.style.backgroundColor = '#5bc0de';
    secondPlayer.style.backgroundColor = '#428bca';
    firstPlayer.disabled = false;
    secondPlayer.disabled = false;
    rounds.value = 1

})

const winner = (playerscore, roundnumber,player) => {
    if(playerscore === roundnumber) {
        console.log(`Player ${player} is the winner!`)
}}