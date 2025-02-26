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
    gameOver = false;
    for(let p of [player1,player2]) {
    p.score = 0;
    p.display.textContent = 0;
    p.display.classList.remove('has-text-success', 'has-text-danger');
    p.button.disabled = false;
    rounds= 'Select Option';
    }
}

zeroed.addEventListener('click', reset)
