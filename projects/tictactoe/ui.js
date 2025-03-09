import { playGame } from "./game.js";

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


    const boardElements = [
        "rowOneLeft", "rowOneCenter", "rowOneRight",
        "rowTwoLeft", "rowTwoCenter", "rowTwoRight",
        "rowThreeLeft", "rowThreeCenter", "rowThreeRight"
    ];

    
    topLeft.addEventListener("click", function(){
        topLeft.style.backgroundColor = "red";
        let playerMove = "A";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
        console.log("Top Left Selected");
    });
    topMiddle.addEventListener("click", function(){
        topMiddle.style.backgroundColor = "red";
        let playerMove = "B";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });
    topRight.addEventListener("click", function(){
        topRight.style.backgroundColor = "red";
        let playerMove = "C";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
        });
    midLeft.addEventListener("click", function(){
        midLeft.style.backgroundColor = "red";
        let playerMove = "D";        
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });
    midMiddle.addEventListener("click", function(){
        midMiddle.style.backgroundColor = "red";
        let playerMove = "E";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });
    midRight.addEventListener("click", function(){
        midRight.style.backgroundColor = "red";
        let playerMove = "F";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });
    botLeft.addEventListener("click",function(){
        botLeft.style.backgroundColor = "red";
        let playerMove = "G";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });
    botMiddle.addEventListener("click", function(){
        botMiddle.style.backgroundColor = "red";
        let playerMove = "H";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });
    botRight.addEventListener("click", function(){
        botRight.style.backgroundColor = "red";
        let playerMove = "I";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    })

};

document.addEventListener("DOMContentLoaded",updateUI);
export {updateUI};
