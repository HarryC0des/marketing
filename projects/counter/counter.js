document.addEventListener("DOMContentLoaded",counterTally);

function counterTally() {
    let plus = document.getElementById("plusBtn");
    let minus = document.getElementById("minusBtn");
    let number = document.getElementById("counter");
    let random = document.getElementById("randBtn");

    plus.addEventListener("click", function(){
        let tally = parseInt(number.textContent);
        number.textContent = tally + 1;
    })
    
    minus.addEventListener("click", function(){
        let tally = parseInt(number.textContent);
        number.textContent = tally - 1;
    })

    random.addEventListener("click", function(){
        let numRand = 10*(Math.random());
        number.textContent = Math.round(numRand);
    })
}

