
function gameChoices(text, choiceAText, nextA, choiceBText, nextB) {
    this.text = text;
    this.choiceA = { text: choiceAText, next: nextA };
    this.choiceB = { text: choiceBText, next: nextB };
}

const gameSteps = {
start: new gameChoices(
    "You're sitting by a cozy fire but hear an argument brewing at the bar between two patrons.",
    "Stay by the fire", "fire",
    "Get up and head towards the bar", "bar"
),

fire: new gameChoices(
    "You stay by the fire and hear the argument escalate but you are so distracted that you don't notice a man who sits down across from you and asks, 'You seem like a serious man. Could you do me a favor?'",
    "You politely decline", "nofavor",
    "You ask what the man needs", "favor"
),

nofavor: new gameChoices(
    "The man immediately becomes disgruntled and leaves. The disagreement at the bar escalates into a full fight with one man being shoved into you, knocking you over. The bar tender has had enough and kicks everyone associated, including you, out onto the street.",
    "You cirlce around to the back of the bar", "backofbar",
    "You head down the street", "downstreet"
),

favor: new gameChoices(
    "The man is immediately pleased and beckons you to follow him out the back of the bar. As you leave you hear the arugment turn into a full fledged fight. The man tells you that he has heard of a treasure buried in a nearby cave but fears that it is too dangerous to go alone.",
    "Agree to go with the man to the cave", "cavestart",
    "Change your mind and say you aren't interested", "downstreet"
),

bar: new gameChoices(
    "You get up to the bar right as one patron grabs another by the collar and pulls an arm back to swing",
    "You shout at the men to clam down", "shout",
    "You grab the man's arm so he can't swing", "fight"
),

shout: new gameChoices(
    "The men stop for a moment to look at you before letting go of each other. Then both men approach you and tell you to 'Stay out of this!'",
    "You tell everyone to relax and offer to buy a round",
    "You step into the men's airspace"
)
};

let currentStep = gameSteps.start;

function updateGame() {
    console.log("updateGame function is running!"); // Debugging step
    let instructions = document.getElementById("gameInstructions");
    let choiceA = document.getElementById("choiceA");
    let choiceB = document.getElementById("choiceB");

    let step = currentStep;
    
    choiceA.textContent = "";
    choiceB.textContent = "";

    instructions.textContent = step.text;

    if(step.choiceA.next){
        choiceA.textContent = step.choiceA.text;
        choiceA.onclick = function(){
            currentStep = gameSteps[step.choiceA.next];
            updateGame();
        }
    } else {
        choiceA.style.display = "none";
    }

    if(step.choiceB.next){
        choiceB.textContent = step.choiceB.text;
        choiceB.onclick = function(){
            currentStep = gameSteps[step.choiceB.next];
            updateGame();
        }
    } else {
        choiceB.style.display = "none";
    }
}

document.addEventListener("DOMContentLoaded",updateGame);
