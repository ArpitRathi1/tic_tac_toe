const boxes=document.querySelectorAll(".box");
const gameInfo=document.querySelector(".game-info");
const newGameBtn=document.querySelector(".btn");

let currentPlayer;
let gameGrid;

const winningPositions=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];

// let's create a function to initialise game.
function initGame(){
    currentPlayer= "X";
    gameGrid=["","","","","","","","",""];
    // Empty UI.
    boxes.forEach((box,index)=>{
        box.innerText="";
        // Enable pointer events
        box.style.pointerEvents="all";
        // removing green color by intialise box with css properties again.
        box.classList=`box box${index+1}`;
    });

    newGameBtn.classList.remove("active");
    gameInfo.innerText=`Current Player - ${currentPlayer}`;
}
initGame();