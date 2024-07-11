// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

const numField = document.getElementById("num-field");
const messageText = document.getElementById("message-text");
const newMin = document.getElementById("num-min");
const newMax = document.getElementById("num-max");

let secret;
let min = 1;
let max = 1000;
let guessCount = 0;


var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
});

function changeMin(){
    min = parseInt(newMin.value);
    console.log(min);
    loadGame();
}

function changeMax(){
    max = parseInt(newMax.value);
    console.log(max);
    loadGame();
}

function loadGame() {
    numField.min = min;
    numField.max = max;
    numField.value = max;
    secret = Math.random();
    secret= secret * (max-min+1);
    secret = secret + min;
    secret = Math.floor(secret); 
}
 
function makeGuess() {
    let guess = parseInt(numField.value)
    console.log(`Guess: ${guess}`);
    if(guess < secret){
        messageText.innerHTML = `${guess} is too low`;
        guessCount++;
    }
    else if(guess > secret){
        messageText.innerHTML = `${guess} is too high`;
        guessCount++;
    }
    else if(guess == secret){
        messageText.innerHTML = `${guess} is correct`;
        guessCount++;
        for(let i = 0; i < guessCount; i++){
            myConfetti({
                particleCount: 2000,
                spread: 4000,
            });
        }
        
    }
    else{
        messageText.innerHTML = `invalid guess`;
    }
    

    
}
 