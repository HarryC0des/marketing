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

        return gameStatus;
    }

    
    topLeft.addEventListener("click", function(){
        console.log("Top Left Selected");
        let playText = document.createElement("p");
        playText.textContent = "X";

        topLeft.appendChild(playText);
        let playerMove = "A";
        console.log("playerMove logged");
        let computerMove = playGame(playerMove);
        console.log("computer move logged");

        updateGameStatus();

        setTimeout(() => {
            if(gameStatus === "player"){
                console.log("The game should stop right now")
                return;
            }

        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            let computerText = document.createElement("p");
            computerText.textContent = "O";
            computerMoveElement.appendChild(computerText);
        }

        updateGameStatus();},500)
    });

    topMiddle.addEventListener("click", function(){
        let playText = document.createElement("p");
        playText.textContent = "X";
        topMiddle.appendChild(playText);
        let playerMove = "B";
        let computerMove = playGame(playerMove);

        updateGameStatus();

        setTimeout(() => {
            if(gameStatus === "player"){
                console.log("The game should stop right now")
                return;
            }

        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            let computerText = document.createElement("p");
            computerText.textContent = "O";
            computerMoveElement.appendChild(computerText);
        }

        updateGameStatus();},500)
    });

    topRight.addEventListener("click", function(){
        let playText = document.createElement("p");
        playText.textContent = "X";
        topRight.appendChild(playText);
        let playerMove = "C";
        let computerMove = playGame(playerMove);

        updateGameStatus();

        setTimeout(() => {
            if(gameStatus === "player"){
                console.log("The game should stop right now")
                return;
            }

        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            let computerText = document.createElement("p");
            computerText.textContent = "O";
            computerMoveElement.appendChild(computerText);
        }

        updateGameStatus();},500)
    });
    midLeft.addEventListener("click", function(){
        let playText = document.createElement("p");
        playText.textContent = "X";
        midLeft.appendChild(playText);
        let playerMove = "D";        
        let computerMove = playGame(playerMove);

        updateGameStatus();

        setTimeout(() => {
            if(gameStatus === "player"){
                console.log("The game should stop right now")
                return;
            }

        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            let computerText = document.createElement("p");
            computerText.textContent = "O";
            computerMoveElement.appendChild(computerText);
        }

        updateGameStatus();},500)
    });
    midMiddle.addEventListener("click", function(){
        let playText = document.createElement("p");
        playText.textContent = "X";
        midMiddle.appendChild(playText);
        let playerMove = "E";
        let computerMove = playGame(playerMove);

        updateGameStatus();
        setTimeout(() => {
            if(gameStatus === "player"){
                console.log("The game should stop right now")
                return;
            }

        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            let computerText = document.createElement("p");
            computerText.textContent = "O";
            computerMoveElement.appendChild(computerText);
        }

        updateGameStatus();},500)
    });

    midRight.addEventListener("click", function(){
        let playText = document.createElement("p");
        playText.textContent = "X";
        midRight.appendChild(playText);
        let playerMove = "F";
        let computerMove = playGame(playerMove);

        updateGameStatus();

        setTimeout(() => {
            if(gameStatus === "player"){
                console.log("The game should stop right now")
                return;
            }

        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            let computerText = document.createElement("p");
            computerText.textContent = "O";
            computerMoveElement.appendChild(computerText);
        }

        updateGameStatus();},500)
    });
    botLeft.addEventListener("click",function(){
        let playText = document.createElement("p");
        playText.textContent = "X";
        botLeft.appendChild(playText);
        let playerMove = "G";
        let computerMove = playGame(playerMove);

        updateGameStatus();

        setTimeout(() => {
            if(gameStatus === "player"){
                console.log("The game should stop right now")
                return;
            }

        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            let computerText = document.createElement("p");
            computerText.textContent = "O";
            computerMoveElement.appendChild(computerText);
        }

        updateGameStatus();},500)
    });
    botMiddle.addEventListener("click", function(){
        let playText = document.createElement("p");
        playText.textContent = "X";
        botMiddle.appendChild(playText);
        let playerMove = "H";
        let computerMove = playGame(playerMove);

        updateGameStatus();

        setTimeout(() => {
            if(gameStatus === "player"){
                console.log("The game should stop right now")
                return;
            }

        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            let computerText = document.createElement("p");
            computerText.textContent = "O";
            computerMoveElement.appendChild(computerText);
        }

        updateGameStatus();},500)
    });
    botRight.addEventListener("click", function(){
        let playText = document.createElement("p");
        playText.textContent = "X";
        botRight.appendChild(playText);
        let playerMove = "I";
        let computerMove = playGame(playerMove);

        updateGameStatus();

        setTimeout(() => {
            if(gameStatus === "player"){
                console.log("The game should stop right now")
                return;
            }

        if(computerMove !== null && computerMove !== undefined){
            let elementID = boardElements[computerMove - 1];
            let computerMoveElement = document.getElementById(elementID);
            let computerText = document.createElement("p");
            computerText.textContent = "O";
            computerMoveElement.appendChild(computerText);
        }

        updateGameStatus();},500)
    });


};

document.addEventListener("DOMContentLoaded",updateUI);
export {updateUI};
