//Object for Player 1 

const p1 = {
    display: document.querySelector('#scorePlayer1'),
    score: 0,
    button: document.querySelector('#buttonPlayer1'),
}

//Object for Player 2 

const p2 = {
    display: document.querySelector('#scorePlayer2'),
    score: 0,
    button: document.querySelector('#buttonPlayer2'),
}

//Reset button and Max Score

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#selectOption');
let winningScore = 3;
let isGameOver = false;

function updateScores(player, opponent){
    if(!isGameOver){
        player.score += 1;
        player.display.innerText = player.score;
        if(player.score === winningScore) {
            isGameOver = true;
            player.display.classList.add('text-success');
            opponent.display.classList.add('text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
    }
}

p1.button.addEventListener('click', function(){
    updateScores(p1, p2);
});

p2.button.addEventListener('click', function(){
    updateScores(p2, p1);
});

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset() {
    isGameOver = false;
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}