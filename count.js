let player1Score = 0
let player2Score = 0

let firstPlayerBtn = document.querySelector('#player1');
let secondPlayerBtn = document.querySelector('#player2');
let zeroed = document.querySelector('#reset');
let rounds = document.querySelector('#Maxrounds');
let selected = rounds.options[rounds.selectedIndex];
let roundsValue = selected.value;
let h1 = document.querySelector('h1');
let playerOneSpan = document.getElementById('first')
let playerTwoSpan = document.getElementById('second')

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

function reset () {
    playerOneSpan.textContent = 0;
    playerTwoSpan.textContent = 0;
    playerOneSpan.style.color = 'black';
    playerTwoSpan.style.color = 'black';
    player1Score = 0;
    player2Score = 0;
    firstPlayerBtn.style.backgroundColor = '#5bc0de';
    secondPlayerBtn.style.backgroundColor = '#428bca';
    firstPlayerBtn.disabled = false;
    secondPlayerBtn.disabled = false;
    rounds.value = 'Select Option';
}

zeroed.addEventListener('click', reset
// {
    // h1.textContent = '0 to 0';
    // player1Score = 0;
    // player2Score = 0;
    // firstPlayerBtn.style.backgroundColor = '#5bc0de';
    // secondPlayerBtn.style.backgroundColor = '#428bca';
    // firstPlayerBtn.disabled = false;
    // secondPlayerBtn.disabled = false;
    // rounds.value = 5
// }
)

const winner = (playerscore, roundnumber,player) => {
    if(playerscore === roundnumber) {
        console.log(`Player ${player} is the winner!`)
        firstPlayer.disabled = true;
        secondPlayer.disabled = true;
        firstPlayer.style.backgroundColor = 'grey';
        secondPlayer.style.backgroundColor = 'grey';
}}