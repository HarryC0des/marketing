import { updateUI } from "./ui";

let boardChoices = [1,2,3,4,5,6,7,8,9];
let playerChoices = [];
let computerChoices = [];

function playGame() {
    let gameStatus = "play";
    let turnCount = 1;

    function playerTurn(choice){
        if (choice === "A"){
            playerChoices = boardChoices.splice(0);
        } else if (choice === "B"){
            playerChoices = boardChoices.splice(1);
        } else if (chocie === "C"){
            playerChoices = boardChoices.splice(2);
        }else if(choice === "D"){
            playerChoices = boardChoices.splice(3);
        } else if (choice === "E"){
            playerChoices = boardChoices.splice(4);
        } else if (choice === "F"){
            playerChoices = boardChoices.splice(5);
        }else if (choice === "G"){
            playerChoices = boardChoices.splice(6);
        } else if (choice === "H"){
            playerChoices = boardChoices.splice(7);

        } else(playerChoices = boardChoices.splice(8));

        return playerChoices;
    }

    function computerTurn(){
        let randomChoice = Math.floor(Math.random()*boardChoices.length);
        let computerChoices = boardChoices.splice(randomChoice);

        return computerChoices;
    }

    function nextTurn(){
        if(turnCount % 2 === 0){
            computerTurn();
        } else {playerTurn();}

        turnCount++;       
    };

    function winStatus(){
        if(player );
    }


    while(gameStatus === "play"){
        nextTurn();
        updateUI();
        gameStatus = winStatus();
    }
    return gameStatus;


};