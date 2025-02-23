function gameChoices(text,choiceA,ChoiceB){
    this.text = text;
    this.choiceA = choiceA;
    this.ChoiceB = ChoiceB;
}

const start = new gameChoices(
    "You're sitting by a cozy fire but hear an argument brewing at the bar between two patrons.",
    "Stay by the fire",
    "Get up and head towards the bar"
);