let json;
const body = document.body;


// Returns a random integer between min and max
//   [min, min+1, min+2, ... , max-1, max]
function randInt(min, max) {
    let rand = Math.random();
    rand = rand * (max - min + 1);
    rand = rand + min;
    rand = Math.floor(rand);
    return rand;
}

function loadGame() {
    fetch('./words_dictionary.json')
        .then(response => response.text())
        .then(text => {
            // Split the text by lines to get individual words
            json = JSON.parse(text);
            console.log('Words loaded!');
            wordsLoaded();
        })
        .catch(error => {
            console.error('Error fetching words: ', error);
        });
        randomBackgroundColor()
}

function randomBackgroundColor(){
    let random = randInt(0,359);
    let colorString = `hsl(${random},100%,90%)`;
    
    body.style.backgroundColor = colorString;
}

const randomWord = document.getElementById("random-word");
let allWords = [];
let fiveLetterWords = [];
function wordsLoaded(){
     allWords = Object.keys(json)
    let randomIndex = randInt(0,allWords.length-1);
    randomWord.innerHTML = allWords[randomIndex];

    for (let i = 0; i < allWords.length;  i++) {
        let word = allWords[i];
        if (word.length != 5) continue;
        fiveLetterWords.push(allWords[i]);

    }
    console.log("all done!");


    randomIndex = randInt(0,fiveLetterWords.length-1);
    secret = fiveLetterWords[randomIndex].toLowerCase();
}

const guessField = document.getElementById("guess-field");
const feedbackText = document.getElementById("report-text")

function changeGuess(){
    let guess = guessField.value.toLowerCase();


    //skip if less than 5 letters
    if (guess.length < 5) return;
    //skip and empty input if greater than 5 letters.
    if (guess.length > 5){
        guessField.value = "";
        return;
    }

    console.log(`Guess: ${guess} and secret: "${secret}"`);

    // SKIP and empty box if guess is not a word
    if(!json.hasOwnProperty(guess)) {
        console.log(`this IS NOT a word!`);
        feedbackText.innerHTML += `<br> "${guess}" is not a word. Try again.<br>`;
        guessCount++;
        guessField.value = "";
        return;
    }

    let correctPlacement = 0;
    let guessCount = 0;
    for (let i = 0; i < 5; i++){
        if (guess[i] == secret[i]){
            correctPlacement++;
            
            feedbackText.innerHTML += `<span class="correct">${guess[i]}</span>`
        }
        else {
            feedbackText.innerHTML += `<span class="incorrect">${guess[i]}</span>`
        }
    }

    if (correctPlacement == 5){
        feedbackText.innerHTML += `<br> is correct! You took "${guessCount}" guesses.<br>`;
    }
    else{
        feedbackText.innerHTML += `<br> has ${correctPlacement} in the correct place.<br>`;
    }
    guessField.value = "";
    }

    const hintButton = document.getElementById("click-button");
    const hintNum = document.getElementById("hintNum");
    const hintText = document.getElementById("hint-text");


    function hintPress(){
        let n = parseInt(hintNum.value);
        let hint = secret.substring(n-1,n);
        hintText.innerHTML += `the ${hintNum.value} letter of the word is ${hint}. <br>`;
    }
    


// TODO: write function isWord(word)

// For checking word:  json.hasOwnProperty("programming")
// For array of words: let arr = Object.keys(json)
// For a random word:  let word = arr[randInt(0, arr.length - 1)];
