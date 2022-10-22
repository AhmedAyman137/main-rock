
let computerWins = 0;
let playerWins = 0;

function computerPlay() {
    let playArray = ['Rock', 'Paper', 'Scissors'];
    let playImage = ['rock.png', 'paper.png', 'scissors.png'];
    let cplay = Math.floor(Math.random() * playArray.length);
    let computerTurn = playArray[cplay];
    let src = document.getElementById("img");
    setTimeout(function () {
        src.innerHTML = ``;
    }, 1000);
    src.innerHTML = `<img src="./imgs/${playImage[cplay]}" />`;
    return computerTurn;
}

function playRound(playerSelection, computerSelection) {
    player1 = playerSelection.toLowerCase();
    computer = computerSelection.toLowerCase();
    let winner;
    let loser;
    let result;
    if (player1 == computer) {
        return `Draw! Both of you Played ${player1}`;
    }
    switch (player1) {
        case 'rock':
            if (computer == 'scissors') {
                winner = player1;
                loser = computer;
                playerWins++;
                result = 'You Won!';
            }
            else if (computer == 'paper') {
                winner = computer;
                loser = player1;
                computerWins++;
                result = 'You Lost!';
            }

            break;

        case 'paper':
            if (computer == 'rock') {
                winner = player1;
                loser = computer;
                playerWins++;
                result = 'You Won!';
            }
            else if (computer == 'scissors') {
                winner = computer;
                loser = player1;
                computerWins++;
                result = 'You Lost!';
            }
            break;

        case 'scissors':
            if (computer == 'paper') {
                winner = player1;
                loser = computer;
                playerWins++;
                result = 'You Won!';
            }
            else if (computer == 'rock') {
                winner = computer;
                loser = player1;
                computerWins++;
                result = 'You Lost!';
            }
            break;
    }
    result = `${result + ' ' + winner} beats ${loser}`;
    scoreSection.innerHTML = `Computer score: ${computerWins}<br>` + `Player score: ${playerWins}`;
    console.log(`Computer score: ${computerWins}`);
    console.log(`Player score: ${playerWins}`);
    return result;
}

function game(playerInput, computerInput) {
    console.log(`You Played: ${playerInput}`);
    console.log(`Computer Played: ${computerInput}`);
    setTimeout(function () {
        alert(`${playRound(playerSelection, computerSelection)}\n` + `Computer score: ${computerWins}` + `  Player score: ${playerWins}`);
    }, 500);
}

function checkWinner(computerScore, playerScore) {
    if (computerScore > playerScore) {
        alert(`The game has finished, Computer Won!\n` + `Computer score: ${computerWins}` + `  Player score: ${playerWins}`);
    }
    else if (computerScore < playerScore) {
        alert(`The game has finished, You Won!\n` + `Computer score: ${computerWins}` + `  Player score: ${playerWins}`);
    }
    else {
        alert(`The game has finished, Draw!\n` + `Computer score: ${computerWins}` + `  Player score: ${playerWins}`);
    }
    window.location.reload();
}


let rockButton = document.querySelector('#button1');
let paperButton = document.querySelector('#button2');
let scissorsButton = document.querySelector('#button3');
let endButton = document.querySelector('#end');
let scoreSection = document.getElementById("score");
scoreSection.innerHTML = `Computer score: ${computerWins}<br>` + `  Player score: ${playerWins}`;
rockButton.addEventListener("click", function () {
    rockButton.setAttribute("style", `background-color: yellow;`);
    paperButton.setAttribute("style", `background-color: yellowgreen;`);
    scissorsButton.setAttribute("style", `background-color: yellowgreen;`);
    playerSelection = 'rock'
    computerSelection = computerPlay();
    game(playerSelection, computerSelection);
});
paperButton.addEventListener("click", function () {
    paperButton.setAttribute("style", `background-color: yellow; `);
    rockButton.setAttribute("style", `background-color: yellowgreen; `);
    scissorsButton.setAttribute("style", `background - color: yellowgreen; `);
    playerSelection = 'paper'
    computerSelection = computerPlay();
    console.log(`You Played: ${playerSelection} `);
    console.log(computerSelection);
    game(playerSelection, computerSelection);
});
scissorsButton.addEventListener("click", function () {
    scissorsButton.setAttribute("style", `background-color: yellow; `);
    paperButton.setAttribute("style", `background-color: yellowgreen; `);
    rockButton.setAttribute("style", `background-color: yellowgreen; `);
    playerSelection = 'scissors'
    computerSelection = computerPlay();
    game(playerSelection, computerSelection);
});

endButton.addEventListener("click", function () {
    checkWinner(computerWins, playerWins);
});

