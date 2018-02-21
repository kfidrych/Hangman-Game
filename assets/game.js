var alphabet = "abcdefghijklmnopqrstuvwxyz";
var wins = 0;
var guesses = 15;
var words = ["pikachu", "bulbasaur", "charmander", "squirtle", "charizard", "venasaur", "blastoise", "meowth", "staryu", "dragonite", "psyduck", "mewtwo", "vileplume", "slowpoke", "raichu"];
var usedWords = [];
var lettersGuessed = [];
var currentWord = "";
var blanks = "";
var images = ["assets/images/pikachu.png", "assets/images/bulbasaur.png", "assets/images/charmander.png", "assets/images/squirtle.png", "assets/images/charizard.png", "assets/images/venasaur.png", "assets/images/blastoise.png", "assets/images/meowth.png", "assets/images/staryu.png", "assets/images/dragonite.png", "assets/images/psyduck.png", "assets/images/mewtwo.png", "assets/images/vileplume.png", "assets/images/slowpoke.png", "assets/images/raichu.png"];
var randomIndex = Math.floor(Math.random() * words.length);


// Choose a currentWord from words array
function chooseWord() {
    var selectWord = words[randomIndex];
    return selectWord;
}

// Set matching picture with currentWord
function selectImg() {
    var img = document.getElementById("header");
    img.src = images[randomIndex];
    img.alt = img.src.slice(img.src.indexOf("images/"), img.src.indexOf("."));
}

// Create the number of blanks for characters in currentWord
function blank(word) {
    var blankWord = "";
    for (var i=0; i<word.length; i++) {
        blankWord += "_";
    };
    return blankWord;
}

// Replace blank with correctly gussed userGuess
function replaceAt(str, index, chr) {
    if (index > str.length) return str;
    return str.substr(0, index) + chr + str.substr(index+1);
}

// Create a game
function game() {
    currentWord = chooseWord();
    blanks = blank(currentWord);
    guesses = 15;
    lettersGuessed = [];
}
game();

// Show initial blank word
document.getElementById("shown").innerHTML = blanks;

// Set keypress event functionality
document.onkeypress = function(event) {
    var userGuess = event.key.toLowerCase();
    // Checking if there is an unused game word, 
    // if the key pressed is an alpha key,
    // if userGuess was already guessed
    if (usedWords.length >= words.length) {
        alert("You have played all of words already! Check back after the next update, coming soon!!")
    } else if (alphabet.indexOf(userGuess) == -1) {
        alert("Please type a letter to guess!");
    } else if (new String(lettersGuessed).indexOf(userGuess) != -1) {
        alert(`You already guessed ${userGuess}!`);
    }

    // Push userGuess into lettersGuessed array
    lettersGuessed.push(userGuess);
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    
    // Call the replace function on the key pressed
    for (var i = 0; currentWord[i]; i++) {
        if (userGuess === currentWord[i]) {
            blanks = replaceAt(blanks, i, userGuess);
        }
    }

    // Game Win
    if (blanks === currentWord) {
        alert("You guessed the Pokemon!")
        usedWords.push(currentWord);
        console.log(usedWords);
        wins++;
        selectImg();
    } else {
        guesses--;
    }

    // Game Loss
    if (guesses <= 0) {
        alert("You are out of guesses! You lose...");
        usedWords.push(currentWord);
        game();
    }

    document.getElementById("shown").innerHTML = blanks;
    document.getElementById("wins").innerHTML = wins;
    document.getElementById("guesses").innerHTML = guesses;
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;     
}   
