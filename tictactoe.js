// create a bunch of divs of boxes for the player to put the xs and os in

//grab a reference to the game-board div
const gameBoard = document.querySelector('.game-board');

function handleBoxClick(e){
    e.target.innerText = currentPlayer;
}

//create 9 boxes
for(let i = 0; i < 9; i++){
    //create a reference a div call box
    const box = document.createElement('div');

    //give the box a class called box
    box.setAttribute('class','box');

    //give the box a number so that it can be store in our data
    box.setAttribute('data', i);

    // onclick do stuff
    box.addEventListener('click', handleBoxClick);

    //append to the body
    gameBoard.appendChild(box);
}

//select the h2 that displays which players turn it is
let playerTurn = document.querySelector('.player-turn');

//Whos turn is it and what piece will they be putting down
let currentPlayer = "X";
// Data record of the board
let gameState = ["", "", "", "", "", "", "", "", ""];
// Is the game over?
let gameActive = true;

// Update to let us know whos turn it is
playerTurn.innerHTML = currentPlayer + "'s turn";

let winningConditions=[
  [0,1,2],
  [3,4,5],
  [6,7,8],
  [0,3,6],
  [1,4,7],
  [2,5,8],
  [0,4,8],
  [2,4,6],
];