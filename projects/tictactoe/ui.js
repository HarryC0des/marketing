import { playGame } from "./game";

function updateGame(){
    let {computerMove} = playGame();
    
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
        playGame("A");
    })
    topMiddle.addEventListener("click", function(){
        topMiddle.style.backgroundColor = "red";
        playGame("B");
    })
    topRight.addEventListener("click", function(){
        topRight.style.backgroundColor = "red";
        playGame("C");
    })
    midLeft.addEventListener("click", function(){
        midLeft.style.backgroundColor = "red";
        playGame("D");
    })
    midMiddle.addEventListener("click", function(){
        midMiddle.style.backgroundColor = "red";
        playGame("E");
    })
    midRight.addEventListener("click", function(){
        midRight.style.backgroundColor = "red";
        playGame("F");
    })
    botLeft.addEventListener("click",function(){
        botLeft.style.backgroundColor = "red";
        playGame("G")
    })
    botMiddle.addEventListener("click", function(){
        botMiddle.style.backgroundColor = "red";
        playGame("H");
    })
    botRight.addEventListener("click", function(){
        botRight.style.backgroundColor = "red";
        playGame("I");
    })

    computerMove.style.backgroundColor = "red";
    
    return updateGame

}

export {updateUI};