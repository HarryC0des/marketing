document.addEventListener("DOMContentLoaded",counterTally);
document.addEventListener("DOMContentLoaded",trueOrFalse);
document.addEventListener("DOMContentLoaded", createQuote);
document.addEventListener("DOMContentLoaded",rockPaper);

function counterTally() {
    let plus = document.getElementById("plusBtn");
    let minus = document.getElementById("minusBtn");
    let number = document.getElementById("counter");
    let random = document.getElementById("randBtn");

    let initialRand = Math.round(Math.random()*10);
    number.textContent = initialRand;
    trueOrFalse();

    plus.addEventListener("click", function(){
        let tally = parseInt(number.textContent);
        number.textContent = tally + 1;
        trueOrFalse();
    })
    
    minus.addEventListener("click", function(){
        let tally = parseInt(number.textContent);
        number.textContent = tally - 1;
        trueOrFalse();
    })

    random.addEventListener("click", function(){
        let numRand = 10*(Math.random());
        number.textContent = Math.round(numRand);
        trueOrFalse();
    })
}

function trueOrFalse(){
    let response = document.getElementById("answer");
    let number = document.getElementById("counter");

    if (number.textContent > 5){
        response.textContent = "Your number is bigger than 5";
    } else {
        response.textContent = "Your number is smaller than 5!";
    }
}

function createQuote(){
    let quoteBtn = document.getElementById("quoteBtn");
    let quoteHolder = document.getElementById("quoteHolder");
    const quoteArray = ["I think, therefore I am", 
        "The unexamined life is not worth living",
        "One cannot step twice in the same river.",
        "The price of greatness is responsibility.",
        "This is another quote that is not as good"]

    quoteBtn.addEventListener("click", function(){
        let randArray = Math.floor(Math.random()*quoteArray.length);
        
        quoteHolder.textContent = quoteArray[Math.round(randArray)];
    })
}

function rockPaper(){
    let rockBtn = document.getElementById("rockBtn");
    let paperBtn = document.getElementById("paperBtn");
    let scissorBtn = document.getElementById("ScissorBtn");
    let result = document.getElementById("rockPaperResult");
    let robotChoice = document.getElementById("rockPaperRobot");
    let myScore = document.getElementById("myScore");
    let robotScore = document.getElementById("robotScore");

    const gameOptions = ["Rock", "Paper", "Scissors"];

    function playGame(playerChoice) {
        let robotRound = Math.floor(Math.random() * gameOptions.length);
        let robotPick = gameOptions[robotRound]; // Store the randomly chosen move
        robotChoice.textContent = robotPick; // Display the robot's choice

        if (robotPick === playerChoice) {
            result.textContent = "It's a draw!";
        } else if (
            (playerChoice === "Rock" && robotPick === "Scissors") ||
            (playerChoice === "Paper" && robotPick === "Rock") ||
            (playerChoice === "Scissors" && robotPick === "Paper")
        ) {
            result.textContent = "Yay - You won!";
            let score = parseInt(myScore.textContent);
            myScore.textContent = score + 1;
        } else {
            result.textContent = "Sorry - You lost!";
            let roboScore = parseInt(robotScore.textContent);
            robotScore.textContent = roboScore + 1;
        }
    }

    rockBtn.addEventListener("click", function(){ playGame("Rock"); });
    paperBtn.addEventListener("click", function(){ playGame("Paper"); });
    scissorBtn.addEventListener("click", function(){ playGame("Scissors"); });
}