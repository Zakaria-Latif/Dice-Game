/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scores, roundScore, activePlayer,gamePlaying, dice_1, winningValue;
alert('Rules : two 6 in a row => lose entier scores,  Update the round score IF the rolled number was NOT a 1');
winningValue = prompt('enter the winningValue please :');
init();
//document.querySelector to select an element and .textContent to modify it
//document.querySelector('#current-' + activePlayer).textContent = dice;
//document.querySelector('#current-' + activePlayer).innerHTML = '<em>' + dice + '</em>';
//var x = document.querySelector('#score-0').textContent;
//console.log(x);
// this function inside this command is anounymous that means we can't apply it outside this command
document.querySelector('.btn-roll').addEventListener('click', function () {
    if(gamePlaying){
        // 1. Random number
    var dice = Math.floor(Math.random() * 6 + 1);
    // 2. Display the result
    var diceDOM = document.querySelector('.dice')
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    // 3. Update the round score IF the rolled number was NOT a 1
    if (dice !== 1) {
        // Add score
        roundScore += dice;
        document.querySelector('#current-' + activePlayer).textContent = roundScore;
    }
    else {
        //Next Player
        nextPlayer();
    }
        // two 6 in a row => lose entier scores
        if(dice==6 && dice_1==6 ){
            scores[activePlayer]=0;
            document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
            //Next Player
        nextPlayer();
        }
            dice_1 = dice;
    }
    
});
document.querySelector('.btn-hold').addEventListener('click', function () {
    if(gamePlaying){
        // Add CURRENT score to GLOBAL score
    scores[activePlayer] += roundScore;
    // Update the UI
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    // Check if the Player won the game
    if (scores[activePlayer] >= winningValue) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner !';
        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        gamePlaying = false;
    }
    else {
        //Next Player
        nextPlayer();
    }
    }
});

function nextPlayer() {
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0;
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    //toggle means that if the class specified exist remove it & if it's not then add it
    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');
    //document.querySelector('.player-0-panel').classList.remove('active');
    //document.querySelector('.player-1-panel').classList.add('active');
    document.querySelector('.dice').style.display = 'none';
};
document.querySelector('.btn-new').addEventListener('click', init);

function init() {
    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    gamePlaying = true;
    // to change css styles in this case we hid the dice
    document.querySelector('.dice').style.display = 'none';
    // getElementById is like querySelector but it's used it just for IDs and it's faster & no need for #
    document.getElementById('score-0').textContent = '0';
    document.getElementById('score-1').textContent = '0';
    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';
    document.getElementById('name-0').textContent = 'player 1';
    document.getElementById('name-1').textContent = 'Player 2';
    document.querySelector('.player-0-panel').classList.remove('winner');
    document.querySelector('.player-1-panel').classList.remove('winner');
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-0-panel').classList.add('active');


};


    
    
    
    
    
    
    
    
    
    
    
    
    
    
    






