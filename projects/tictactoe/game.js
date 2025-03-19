import { updateUI } from "./ui.js";

let boardChoices = [1,2,3,4,5,6,7,8,9];
let playerChoices = [];
let computerChoices = [];
let gameStatus = "play";

function playerTurn(choice){
        let mapping = { "A": 1, "B": 2, "C": 3, "D": 4, "E": 5, "F": 6, "G": 7, "H": 8, "I": 9 };
        let value = mapping[choice];
        let index = boardChoices.indexOf(value);

        if (index !== -1) {
            let picked = boardChoices.splice(index, 1)[0];
            playerChoices.push(picked);
        } else {
            console.log("Invalid move! Choose an available spot.");
        }

        return playerChoices;
    }

    function findBlockingMove(playerChoices, boardChoices) {
        let winConditions = [
            [1, 2, 3], [4, 5, 6], [7, 8, 9], // Rows
            [1, 4, 7], [2, 5, 8], [3, 6, 9], // Columns
            [1, 5, 9], [3, 5, 7]            // Diagonals
        ];
    
        for (let condition of winConditions) {
            let matchCount = 0;
            let missingNumber = null;
    
            for (let num of condition) {
                if (playerChoices.includes(num)) {
                    matchCount++; // Player has this spot
                } else if (boardChoices.includes(num)) {
                    missingNumber = num; // Empty spot available
                } else {
                    missingNumber = null; // If a number isn't free, stop checking this condition
                    break;
                }
            }
    
            if (matchCount === 2 && missingNumber !== null) {
                console.log(`Blocking at: ${missingNumber}`);
                return missingNumber; // Found a blocking move
            }
        }
    
        return null; // No immediate block needed
    };


    function computerTurn(){
        let missingNumber = findBlockingMove(playerChoices, boardChoices);
        if (boardChoices.length === 0) return;  // Stop if no moves are left
        if(missingNumber !==null){
            let move = missingNumber;
            computerChoices.push(move);
            return move;
        } else {
            let randomChoice = Math.floor(Math.random()*boardChoices.length);
            let move = boardChoices.splice(randomChoice,1)[0];
            computerChoices.push(move);
            return move;
        }
    };

    function arrayCheck(choices,winningChoices){
        return winningChoices.some(picks =>
            picks.every(pick => choices.includes(pick))
        );
    }

    let winningPicks = [
        [1,2,3],
        [4,5,6],
        [7,8,9],
        [1,4,7],
        [2,5,8],
        [3,6,9],
        [1,5,9],
        [3,5,7]
    ];

    function winStatus(){
        if(arrayCheck(playerChoices,winningPicks)){
             return "player";
        } else if(arrayCheck(computerChoices,winningPicks)){
           return "computer";
        } else if(boardChoices.length === 0){
            return "draw"
        } return "play";
    }

    function checkStatus(){
        return gameStatus;
    }


    function playGame(choice){
        console.log("playgame from game script");
        if (gameStatus !== "play") return null; // Stop if game is already over

        let playerMove = choice;
        playerTurn(choice);

        console.log("player: "+ choice);

         if (gameStatus !== "play"){
            updateUI(playerMove, null);
            return gameStatus
        }

        let missingNumber = findBlockingMove(playerChoices, boardChoices);


        let computerMove = computerTurn();
        gameStatus = winStatus();

        if(gameStatus ==="player"){
            return
        }
        
        console.log(boardChoices);
        console.log(playerChoices);

        if(missingNumber !== null){
            console.log("the missing number is "+missingNumber);
        } else {
            console.log("There are no missing numbers yet");
        };

        console.log(gameStatus);
        console.log(computerMove);

        return computerMove;
        }


export {playGame, checkStatus};
