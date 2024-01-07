
let score = {
    Wins: 0,
    Losses: 0,
    Ties: 0,
}
//intializes score when page is loaded ski
updateScore()

function computerMove(){
    let compChoice = Math.random();
    if (compChoice < 1/3) {
        return 'Rock';
    } else if (compChoice < 2/3){
        return 'Paper';
    } else {
        return 'Scissors';
    }
}
function findWinner(playerMove, computerMove){
    let result = '';
    if (playerMove === computerMove){
        result = 'tie';
        score['Ties'] += 1;
    } else if(playerMove === 'Rock'){
        if (computerMove === 'Paper'){
            result = 'lose';
            score['Losses'] += 1;
        } else if (computerMove === 'Scissors'){
            result = 'win';
            score['Wins'] += 1;
        }
    } else if (playerMove === 'Paper'){
        if (computerMove === 'Rock'){
            result = 'win';
            score['Wins'] += 1;
        } else if (computerMove === 'Scissors'){
            result = 'lose';
            score['Losses'] += 1;
        }
    } else if (playerMove === 'Scissors'){
        if (computerMove === 'Rock'){
            result = 'lose';
            score['Losses'] += 1;
        } else if (computerMove === 'Paper'){
            result = 'win';
            score['Wins'] += 1;
        }
    }
    document.querySelector('.resultDisplay').innerHTML = `You ${result}.`
    document.querySelector('.choiceDisplay').innerHTML = `You <img src="images/${playerMove}-emoji.png" class="move-icon"> <img src="images/${computerMove}-emoji.png" class="move-icon"> Computer`
    updateScore()
    return result
}
function updateScore(){
    document.querySelector('.displayScore').innerHTML = `Wins: ${score['Wins']}, Losses: ${score['Losses']}, Ties: ${score['Ties']}`
}