function gameChoices(text, choiceAText, nextA, choiceBText, nextB,keyobjects = [], healthChange = 0, gameImage) {
    this.text = text;
    this.choiceA = { text: choiceAText, next: nextA };
    this.choiceB = { text: choiceBText, next: nextB };
    this.keyobjects = keyobjects;
    this.healthChange = healthChange;
    this.gameImage = gameImage;
}

const gameSteps = {
start: new gameChoices(
    "You're sitting at your desk at work staring at your monitor",
    "Check your email", "email",
    "Go to the water fountain", "water",
    [], 0,
    "media/fireplace.webp"
),

email: new gameChoices(
    "You check email and see that you have one new unread email from your boss",
    "Open the email", "email2",
    "Go to the water fountain", "water",
    [],0,
    ""
),

email2: new gameChoices(
    "The email is asking you to work all weekend long on a project",
    "Write a reply", "reply",
    "Leave it for later", "water",
    [],0,
    ""
),

reply: new gameChoices(
    "You craft an email response to your boss",
    "You agree to work the weekend", "weekend",
    "You say that you have a prior engagement", "nowork",
    [],0,
    ""
),

weekend: new gameChoices(
    "You get up to stretch your legs",
    "Head to the water fountain", "water",
    "Take an early lunch", "lunch",
    ["weekend work"], -1,
    ""
),

water: new gameChoices(
    "A coworker is filling up the largest water bottle you've ever seen",
    "Ask them to hurry up", "hurry",
    "cough loudly", "cough",
    [], 0,
    ""
)
}


export {gameSteps};