// saved user data into object literals
const player1 = {
    score: 0,
    button: document.querySelector('#player1btn'),
    display: document.getElementById('first'),
}

const player2 = {
    score: 0,
    button: document.querySelector('#player2btn'),
    display: document.getElementById('second'),
}

let zeroed = document.querySelector('#resetbtn');
let rounds = document.querySelector('#Maxrounds');
let selected = rounds.options[rounds.selectedIndex];
let roundsValue = selected.value;
// let playerOneSpan = document.getElementById('first')
// let playerTwoSpan = document.getElementById('second')

rounds.addEventListener('change', function (e){
  roundsValue = Number(this.value);
})

firstPlayerBtn.addEventListener('click', function (e) {
    player1Score += 1;
    let player = 1;
    playerOneSpan.textContent = player1Score
    winner(player1Score, roundsValue, player)
})

secondPlayerBtn.addEventListener('click', function (e) {
    player2Score += 1;
    let player = 2;
    playerTwoSpan.textContent = player2Score
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

zeroed.addEventListener('click', reset)

const winner = (playerscore, roundnumber,player) => {
    if(playerscore === roundnumber) {
        console.log(`Player ${player} is the winner!`)
        firstPlayerBtn.disabled = true;
        secondPlayerBtn.disabled = true;
        firstPlayerBtn.style.backgroundColor = 'grey';
        secondPlayerBtn.style.backgroundColor = 'grey';
        if (player1Score === roundsValue) {
            playerOneSpan.style.color = 'green';
        } else{
            playerOneSpan.style.color = 'red';
        }
        if (player2Score === roundsValue) {
            playerTwoSpan.style.color = 'green';
        } else{
            playerTwoSpan.style.color = 'red';
        }
}}