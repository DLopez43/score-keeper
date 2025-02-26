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
let winningValue = selected.value;
let gameOver= false;

//  Created a function to update all user data
function updateScores(player, opponent) {
    if(!gameOver) {
        player.score += 1;
        if(player.score === winningValue){
            gameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }

}

rounds.addEventListener('change', function (e){
  winningValue = Number(this.value);
})

player1.button.addEventListener('click', function () {
    updateScores(player1, player2)
})

player2.button.addEventListener('click', function () {
    updateScores(player2, player1)
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