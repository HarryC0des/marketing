import { gameSteps } from "./story.js";
import { updateUI } from "./UI.js";

let currentStep = gameSteps.start;
let currentHealth = 10;
let inventory = [];

function progressGame(choice) {
    let nextStep = choice === "A" ? currentStep.choiceA.next:currentStep.choiceB.next;
    currentStep = gameSteps[nextStep];
    currentHealth = currentHealth + currentStep.healthChange;
    inventory = [...inventory,...currentStep.keyobjects];

    updateUI();
}

function getGameState(){
    return{
        currentStep,
        currentHealth,
        inventory
    };
};


export {progressGame, getGameState};
