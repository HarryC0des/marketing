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
        console.log("Top Left Selected");

     // Prevent clicking an already selected spot
        if (topLeft.style.backgroundColor === "red") {
        console.log("Invalid Move! Spot already taken.");
        return;
    }

        topLeft.style.backgroundColor = "red";
        let playerMove = "A";
        console.log("playerMove logged");
        let computerMove = playGame(playerMove);
        console.log("computer move logged");
        if (computerMove === null || computerMove === undefined) {
            console.log("No computer move possible.");
            return;
        }
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });

    topMiddle.addEventListener("click", function(){
        if (topMiddle.style.backgroundColor === "red") {
        console.log("Invalid Move! Spot already taken.");
        return;
        }

        topMiddle.style.backgroundColor = "red";
        let playerMove = "B";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });
    topRight.addEventListener("click", function(){
        if (topRight.style.backgroundColor === "red") {
            console.log("Invalid Move! Spot already taken.");
            return;
            }
        topRight.style.backgroundColor = "red";
        let playerMove = "C";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
        });
    midLeft.addEventListener("click", function(){
        if (midLeft.style.backgroundColor === "red") {
            console.log("Invalid Move! Spot already taken.");
            return;
            }
        midLeft.style.backgroundColor = "red";
        let playerMove = "D";        
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });
    midMiddle.addEventListener("click", function(){
        if (midMiddle.style.backgroundColor === "red") {
            console.log("Invalid Move! Spot already taken.");
            return;
            }
        midMiddle.style.backgroundColor = "red";
        let playerMove = "E";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });
    midRight.addEventListener("click", function(){
        if (midRight.style.backgroundColor === "red") {
            console.log("Invalid Move! Spot already taken.");
            return;
            }
        midRight.style.backgroundColor = "red";
        let playerMove = "F";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });
    botLeft.addEventListener("click",function(){
        if (botLeft.style.backgroundColor === "red") {
            console.log("Invalid Move! Spot already taken.");
            return;
            }
        botLeft.style.backgroundColor = "red";
        let playerMove = "G";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });
    botMiddle.addEventListener("click", function(){
        if (botMiddle.style.backgroundColor === "red") {
            console.log("Invalid Move! Spot already taken.");
            return;
            }
        botMiddle.style.backgroundColor = "red";
        let playerMove = "H";
        let computerMove = playGame(playerMove);
        let elementID = boardElements[computerMove - 1];
        let computerMoveElement = document.getElementById(elementID);
        computerMoveElement.style.backgroundColor = "blue";
    });
    botRight.addEventListener("click", function(){
        if (botRight.style.backgroundColor === "red") {
            console.log("Invalid Move! Spot already taken.");
            return;
            }
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
