import { playGame, checkStatus } from "./game.js";

function updateUI(){
    let topLeft = document.getElementById("rowOneLeft");
    let topMiddle = document.getElementById("rowOneCenter");
    let topRight = document.getElementById("rowOneRight");
    let midLeft = document.getElementById("rowTwoLeft");
    let midMiddle = document.getElementById("rowTwoCenter");
    let midRight = document.getElementById("rowTwoRight");
    let botLeft = document.getElementById("rowThreeLeft");
    let botMiddle = document.getElementById("rowThreeCenter");
    let botRight = document.getElementById("rowThreeRight");

    startOverBtn.style.display = "none";

    const boardElements = [
        "rowOneLeft", "rowOneCenter", "rowOneRight",
        "rowTwoLeft", "rowTwoCenter", "rowTwoRight",
        "rowThreeLeft", "rowThreeCenter", "rowThreeRight"
    ];

    function updateGameStatus(){
        let status = document.getElementById("gameStatus");
        let gameStatus = checkStatus();
        let startOverBtn = document.getElementById("startOverBtn");

        startOverBtn.addEventListener("click", function(){
            window.location.reload();
        })

        if(gameStatus === "player"){
            status.textContent = "Player Wins!";
            startOverBtn.style.display = "";
        } else if (gameStatus === "computer"){
            status.textContent = "Computer Wins!";
            startOverBtn.style.display = "";
        } else if (gameStatus === "draw"){
            status.textContent = "It's a Draw!";
            startOverBtn.style.display = "";
        } else status.textContent = "";
    }

    
    topLeft.addEventListener("click", function(){
        console.log("Top Left Selected");
        topLeft.textContent = "X";
        let playerMove = "A";
        console.log("playerMove logged");
        let computerMove = playGame(playerMove);
        console.log("computer move logged");

        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.textContent = "O";
        }

        updateGameStatus();
    });

    topMiddle.addEventListener("click", function(){
        topMiddle.textContent = "X";
        let playerMove = "B";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.textContent = "O";
        }
        updateGameStatus();
    });
    topRight.addEventListener("click", function(){
        topRight.textContent = "X";
        let playerMove = "C";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.textContent = "O";
        }
        updateGameStatus();
        });
    midLeft.addEventListener("click", function(){
        midLeft.textContent = "X";
        let playerMove = "D";        
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.textContent = "O";
        }
        updateGameStatus();
    });
    midMiddle.addEventListener("click", function(){
        midMiddle.textContent = "X";
        let playerMove = "E";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.textContent = "O";
        }
        updateGameStatus();
    });
    midRight.addEventListener("click", function(){
        midRight.textContent = "X";
        let playerMove = "F";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.textContent = "O";
        }
        updateGameStatus();
    });
    botLeft.addEventListener("click",function(){
        botLeft.textContent = "X";
        let playerMove = "G";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.textContent = "O";
        }
        updateGameStatus();
    });
    botMiddle.addEventListener("click", function(){
        botMiddle.textContent = "X";
        let playerMove = "H";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.textContent = "O";
        }
        updateGameStatus();
    });
    botRight.addEventListener("click", function(){
        botRight.textContent = "X";
        let playerMove = "I";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.textContent = "O";
        }
        updateGameStatus();
    })


};

document.addEventListener("DOMContentLoaded",updateUI);
export {updateUI};
