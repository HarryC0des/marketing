import { playGame } from "./game";

function updateUI(){
    let {computerMove, playerMove} = playGame();
    
    let topLeft = document.getElementById("rowOneLeft");
    let topMiddle = document.getElementById("rowOneMiddle");
    let topRight = document.getElementById("rowOneRight");
    let midLeft = document.getElementById("rowTwoLeft");
    let midMiddle = document.getElementById("rowTwoMiddle");
    let midRight = document.getElementById("rowTwoRight");
    let botLeft = document.getElementById("rowThreeLeft");
    let botMiddle = document.getElementById("rowThreeMiddle");
    let botRight = document.getElementById("rowThreeRight");

    topLeft.addEventListener("click", function(){
        topLeft.style.backgroundColor = "red";
        playerMove = function(){playGame("A")};
        console.log("Top Left Selected");
    })
    topMiddle.addEventListener("click", function(){
        topMiddle.style.backgroundColor = "red";
        playerMove = playGame("B");
        console.log("Top Middle Selected");
    })
    topRight.addEventListener("click", function(){
        topRight.style.backgroundColor = "red";
        playerMove = playGame("C");
        console.log("Top Right Selected");
    })
    midLeft.addEventListener("click", function(){
        midLeft.style.backgroundColor = "red";
        playerMove = playGame("D");
    })
    midMiddle.addEventListener("click", function(){
        midMiddle.style.backgroundColor = "red";
        playerMove = playGame("E");
    })
    midRight.addEventListener("click", function(){
        midRight.style.backgroundColor = "red";
        playerMove = playGame("F");
    })
    botLeft.addEventListener("click",function(){
        botLeft.style.backgroundColor = "red";
        playerMove = playGame("G")
    })
    botMiddle.addEventListener("click", function(){
        botMiddle.style.backgroundColor = "red";
        playerMove = playGame("H");
    })
    botRight.addEventListener("click", function(){
        botRight.style.backgroundColor = "red";
        playerMove = playGame("I");
    })

    
    let changeColor = computerMove.style.backgroundColor;
    changeColor = "blue";

}

document.addEventListener("DOMContentLoaded",updateUI);
export {updateUI};
