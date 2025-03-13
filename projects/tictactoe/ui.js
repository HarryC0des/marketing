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
        topLeft.style.backgroundColor = "red";
        let playerMove = "A";
        console.log("playerMove logged");
        let computerMove = playGame(playerMove);
        console.log("computer move logged");

        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.style.backgroundColor = "blue";
        }

        updateGameStatus();
    });

    topMiddle.addEventListener("click", function(){
        topMiddle.style.backgroundColor = "red";
        let playerMove = "B";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.style.backgroundColor = "blue";
        }
        updateGameStatus();
    });
    topRight.addEventListener("click", function(){
        topRight.style.backgroundColor = "red";
        let playerMove = "C";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.style.backgroundColor = "blue";
        }
        updateGameStatus();
        });
    midLeft.addEventListener("click", function(){
        midLeft.style.backgroundColor = "red";
        let playerMove = "D";        
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.style.backgroundColor = "blue";
        }
        updateGameStatus();
    });
    midMiddle.addEventListener("click", function(){
        midMiddle.style.backgroundColor = "red";
        let playerMove = "E";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.style.backgroundColor = "blue";
        }
        updateGameStatus();
    });
    midRight.addEventListener("click", function(){
        midRight.style.backgroundColor = "red";
        let playerMove = "F";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.style.backgroundColor = "blue";
        }
        updateGameStatus();
    });
    botLeft.addEventListener("click",function(){
        botLeft.style.backgroundColor = "red";
        let playerMove = "G";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.style.backgroundColor = "blue";
        }
        updateGameStatus();
    });
    botMiddle.addEventListener("click", function(){
        botMiddle.style.backgroundColor = "red";
        let playerMove = "H";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.style.backgroundColor = "blue";
        }
        updateGameStatus();
    });
    botRight.addEventListener("click", function(){
        botRight.style.backgroundColor = "red";
        let playerMove = "I";
        let computerMove = playGame(playerMove);
        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            computerMoveElement.style.backgroundColor = "blue";
        }
        updateGameStatus();
    })


};

document.addEventListener("DOMContentLoaded",updateUI);
export {updateUI};
