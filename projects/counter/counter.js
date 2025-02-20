document.addEventListener("DOMContentLoaded",counterTally);
document.addEventListener("DOMContentLoaded",trueOrFalse);

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
