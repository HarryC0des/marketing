import { progressGame } from "./game.js";
import { getGameState } from "./game.js";

function updateUI(){

    let { currentStep, inventory, currentHealth } = getGameState();

    let instructions = document.getElementById("gameInstructions");
    let choiceA = document.getElementById("choiceA");
    let choiceB = document.getElementById("choiceB");
    let photo = document.getElementById("backgroundImage");
    let inventoryDisplay = document.getElementById("inventoryDisplay");
    let healthDisplay = document.getElementById("healthDisplay");

    instructions.textContent = currentStep.text;
    photo.src = currentStep.gameImage || "";
    inventoryDisplay.textContent = inventory;
    healthDisplay.textContent = currentHealth;

    choiceB.textContent = currentStep.choiceB.text;

    if(currentStep.choiceA.next){
        choiceA.textContent =currentStep.choiceA.text;
        choiceA.onclick = () => progressGame("A");
        } else {
            choiceA.style.display = "none";
        }

        if(currentStep.choiceB.next){
            choiceB.textContent =currentStep.choiceB.text;
            choiceB.onclick = () => progressGame("B");
            } else {
                choiceB.style.display = "none";
            }
    }

document.addEventListener("DOMContentLoaded",updateUI);
export {updateUI};


