import { updateUI } from "./ui";

let boardChoices = [
    [1,2,3]
    [4,5,6]
    [7,8,9]
];

function playGame() {
    let gameStatus = "play";
    let turnCount = 1;

    function playerTurn(choice){
        if (choice === "A"){

        } else if (choice === "B"){

        } else if (chocie === "C"){

        }else if(choice === "D"){

        } else if (choice === "E"){

        } else if (choice === "F"){

        }else if (choice === "G"){

        } else if (choice === "H"){

        } else;

    }

    function computerTurn(){
        let row = Math.floor(Math.random()*boardChoices.length);
        let col = Math.floor(Math.random()*boardChoices[row].length);

        let computerChoice = boardChoices[row, col];

        boardChoices[row, col] = null;

        return computerChoice;
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