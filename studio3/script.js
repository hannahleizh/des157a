(function(){
    'use strict';
    console.log('reading js');

    // how to play overlay
    document.querySelector('.open').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#overlay').className = 'showing';
    });

    document.querySelector('.close').addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector('#overlay').className = 'hidden';
    });

    document.addEventListener('keydown', function(e){
        if(e.key === 'Escape'){
            document.getElementById('#overlay').className = 'hidden';
        }
    });

    // game
    const startGame = document.getElementById('startgame');
    const gameControl = document.getElementById('gamecontrol');
    const game = document.getElementById('game');
    const score = document.getElementById('score');
    const actionArea = document.getElementById('actions');

    const gameData = {
        dice: ['1die.png', '2die.png', '3die.png', '4die.png', '5die.png', '6die.png'],
        players: ['Player 1', 'Player 2'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener('click', function(){
        gameData.index = Math.round(Math.random());
        gameControl.innerHTML = '<h2 id="gamehas">The Game Has Started</h2>'
        gameControl.innerHTML += '<img src="images/pig2.png" alt="pig2" width="50px" height="50px" id="pig22">';
        gameControl.innerHTML += '<img src="images/pink.png" alt="pink" width="400px" id="pink">';
        gameControl.innerHTML += '<button id="quit">Restart</button>';

        document.getElementById('quit').addEventListener('click', function(){
            location.reload();
        });
        // console.log(gameData.index);
        // console.log('set up the turn!');
        setUpTurn();
    });

    function setUpTurn(){
        game.innerHTML = `<p id="rollfor">Roll the dice for ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            // console.log('roll the dice');
            throwDice();
            game.innerHTML += '<audio controls autoplay><source src="roll.mp3" type="audio/mp3"></audio>'
        });
    };

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random()* 6) + 1;
        gameData.roll2 = Math.floor(Math.random()* 6) + 1;
        game.innerHTML = `<p id="rollfor">Roll the dice for ${gameData.players[gameData.index]}</p>`;
        game.innerHTML += `<img id="rolldie1" src="${gameData.dice[gameData.roll1-1]}"> <img id="rolldie2" src="${gameData.dice[gameData.roll2-1]}">`;
        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum === 2){
            // console.log('snake eyes!');
            gameData.score[gameData.index] = 0;
            game.innerHTML += '<p id="snakeeyes">Oh snap! Snake eyes!</p>';
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += '<audio controls autoplay><source src="boo.mp3" type="audio/mp3"></audio>'
            setTimeout(setUpTurn, 2000);
        }
        else if(gameData.roll1 == 1 || gameData.roll2 == 1){
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p id="gotone">Sorry, one of your rolls was a one, switching to ${gameData.players[gameData.index]} </p>`;
            game.innerHTML += '<audio controls autoplay><source src="scissor.mp3" type="audio/mp3"></audio>'
            setTimeout(setUpTurn, 2000);
        }
        else{
            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = '<button id="rollagain">Roll again</button> <button id="pass">Pass</button>';
            
            document.getElementById('rollagain').addEventListener('click', function(){
                setUpTurn();
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }
    }

    function checkWinningCondition(){
        if(gameData.score[gameData.index] > gameData.gameEnd){
            score.innerHTML = `<h2 id="winswith">${gameData.players[gameData.index]} wins with ${gameData.score[gameData.index]} points!</h2>`;
            document.getElementById('gamehas').innerHTML = "";
            document.getElementById('rollfor').innerHTML = "";
            actionArea.innerHTML = '';
            document.getElementById('quit').innerHTML = "Start a New Game?";
            game.innerHTML += '<audio controls autoplay><source src="boomchuk.mp3" type="audio/mp3"></audio>'

        }
        else{
            showCurrentScore()
        }
    }

    function showCurrentScore() {
        score.innerHTML += `<strong id="player1" >${gameData.players[0]}</strong>`
        score.innerHTML += `<strong id="score1" >${gameData.score[0]}</strong>`

        score.innerHTML += `<strong id="player2">${gameData.players[1]}</strong></p>`
        score.innerHTML += `<strong id="score2">${gameData.score[1]}</strong></p>`
    }


})();