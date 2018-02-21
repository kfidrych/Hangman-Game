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


// Choose a random word from word array.
function chooseWord() {
    var selectWord = words[randomIndex];
    return selectWord;
}

// Select matching picture
function selectImg() {
    var img = document.getElementById("header");
    img.src = images[randomIndex];
    img.alt = img.src.slice(img.src.indexOf("images/"), img.src.indexOf("."));
}

// Convert a word into blanks.
function blank(word) {
    var blankWord = "";
    for (var i=0; i<word.length; i++) {
        blankWord += "_ ";
    };
    return blankWord;
}

// Change a blank into the appropriate letter.
function setCharAt(str,index,chr) {
    return str.substr(0,index) + chr + str.substr(index+1);
}

// function replaceAt(str, index, chr) {
//     if (index > str.length-1) return str;
//     return str.substr(0, index) + chr + str.substr(index+1);
// }

// Initiating first word to guess.
function game() {
    currentWord = chooseWord();
    blanks = blank(currentWord);
    guesses = 15;
    lettersGuessed = [];
}
game();

// Sending new blanked word to HTML document.
document.getElementById("shown").innerHTML = blanks;

document.onkeypress = function(event) {
    var userGuess = event.key.toLowerCase();
    if (usedWords.length >= words.length) {
        alert("You have played all of words already! Check back after the next update, coming soon!!")
    } else if (alphabet.indexOf(userGuess) == -1) {
        alert("Please type a letter to guess!")
    } else if (new String(lettersGuessed).indexOf(userGuess) != -1) {
        alert(`You already guessed ${userGuess}!`);
    }

    lettersGuessed.push(userGuess);
    document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
    
    for (var i=0; currentWord.indexOf(userGuess); i++) {
        function updateLetter() {
            var str = currentWord;
            str = replaceAt(str, currentWord.indexOf(userGuess), userGuess);
            return str;
        }
    }
}    
//     if (currentWord.indexOf(userGuess) > -1) {
        // blanks.replaceAt((currentWord.indexOf(userGuess)), userGuess);
//         for (var i=0; currentWord.indexOf(userGuess) == -1; i++) {
//             function replaceAt(string, i, guessedLetter) {
//                 return string.substring(0, i) + userGuess + string.substring(i + 1);
                
//             } replaceAt(currentWord, currentWord.indexOf(userGuess), userGuess);
//         } 
//     }
// }