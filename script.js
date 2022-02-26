//the word to guess will be chosen by the user
//function that returns the word to guess
function getInputWordFromUser() {
	let input = document.getElementById("inputWord").value;
  return input;
}

//function that returns the letter provided by the user
function getInputLetterFromUser() {
	let input = document.getElementById("guessLetter").value;
  document.getElementById("guessLetter").value = "";
  return input;
}

let guessField;
//once you get 5 letter wrong you lose
let playerLives = 5;
//variable that stores the number of correct letters provided
let countCorrectLetters = 0;
//array that stores the correct letters provided more than one time from the user
let existingLetters = new Array();

//every letter in the word is symbolized by an underscore in the guess field
function generateGuessField() {
  let inputWord = getInputWordFromUser();
  guessField = new Array(inputWord.length);
  for (let i = 0; i < guessField.length; i++) {
      guessField[i] = "_ ";
    }
    //prints the initial guess field
    updateGuessField();
}
//prints the guess field and updates it every time the user guesses a correct letter
function updateGuessField() {
  let node = document.getElementById("guessedLetters");
	for (let i = 0; i < guessField.length; i++) {
		let text = document.createTextNode(guessField[i]);
		node.appendChild(text);
	}
  document.getElementById("playerLives").innerHTML = "You have " + playerLives + " lives."
}

//checks if the letter provided by the user matches one or more in the word
function verifyLetterFromUser() {
	let inputWord = getInputWordFromUser();
	let inputLetter = getInputLetterFromUser();
  if (inputWord.includes(inputLetter) && !existingLetters.includes(inputLetter)) {
    existingLetters.push(inputLetter);
  	for (let i = 0; i < inputWord.length; i++) {
    	if (inputWord[i] == inputLetter) {
      	guessField[i] = inputLetter + " ";
        countCorrectLetters++;
      }
    }
    //deletes the guess field
    document.getElementById("guessedLetters").innerHTML = "";
    //and replaces it with the new one resulted
    updateGuessField();
  } else {
  	playerLives--;
    document.getElementById("guessedLetters").innerHTML = "";
    updateGuessField();
  }
  displayResult();
}

//display results
function displayResult() {
	let message = document.getElementById("resultMessage");
	if (countCorrectLetters == guessField.length) {
  	message.innerHTML = "You win!"
  } else if (playerLives == 0) {
  	message.innerHTML = "You lose!"
  }
}

function restartGame() {
  location.reload();
}



