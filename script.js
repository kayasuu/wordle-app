
//Declarations and obtaining global elements, setting attributes
  const gridContainer = document.getElementById('grid-container');
  let h3 = document.getElementById('buttonAppend');
  const userInput = document.getElementById('user-input');
  const enterButton = document.getElementById('enter-button');
  let playAgain = document.createElement('button');
    playAgain.setAttribute('id','playAgain');
    playAgain.innerHTML = 'Play Again';
  const keys = document.querySelectorAll('.key');
  let score = document.getElementById('score');
  let triesCounter = document.getElementById('triesCounter');
  let finalMessage = document.getElementById('finalMessage');
  
  let randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

const popupContainer = document.getElementById('popup-container');
const popupBtn = document.getElementById('popup-btn');
const closeBtn = document.getElementById('close-btn');

popupBtn.addEventListener('click', () => {
  popupContainer.style.display = 'flex';
});

closeBtn.addEventListener('click', () => {
  popupContainer.style.display = 'none';
});

//Funtion to Start New Game, resetting the contents of various elements
  function startGame() {
    // Reset the grid container, user input and any messages
      gridContainer.innerHTML = '';
      userInput.value = '';
      finalMessage.innerHTML = '';
    
    // Reset the tries counter
      triesCounter.textContent = '6';

    // Reset key classes
      let keys2 = document.querySelectorAll('.key');
      for (let i = 0; i < keys2.length; i++) {
      keys2[i].classList.remove('correct', 'close', 'incorrect');
      }
    // Re-display user input and enter button
      userInput.style.display = 'block';
      enterButton.style.display = 'block';
    
    // Choose a new random word
      randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
      console.log(randomWord);
    }

startGame();


//Function to Check Word
    function checkWord(inputWord) {
    //Create Row element for the user input
      const rowElement = document.createElement('div');
      rowElement.classList.add('row');
    
    // Create a new grid cell element for each character of the input word, and append this to the row
      for (let i = 0; i < inputWord.length; i++) {
        let gridElement = document.createElement('div');
        gridElement.classList.add('grid-cell');
        gridElement.textContent = inputWord[i];
        rowElement.appendChild(gridElement);

        //access the i'th character in inputWord and randomWord
        const inputChar = inputWord[i];
        const randomChar = randomWord[i];

        //access the i'th grid cell in the row that we created for color changing
        const gridPos = rowElement.childNodes[i];

        //select the exact key for the HTML keyboard
        const keyElement = document.querySelector(`#key-${inputChar.toUpperCase()}`);

    
        // If the the characters match and are in the right positions, add the 'correct' class to the grid cell and keyboard key.
        if (inputChar === randomChar) {
          gridPos.classList.add('correct');
          keyElement.classList.add('correct');
        }

        // If the input character is included in the random word but in a different position, add the 'close' class
        else if (randomWord.includes(inputChar)) {
          gridPos.classList.add('close');
          keyElement.classList.add('close');
          // isCorrect = false;
        }

        // Otherwise, add the 'incorrect' class
        else {
          gridPos.classList.add('incorrect');
          keyElement.classList.add('incorrect');
          // isCorrect = false;
        }
      }
    
      // Append the new row to the grid container
        gridContainer.appendChild(rowElement);
    
      // Check if the user has won the game.
        //if the user input matches the random word, go to function youWin()
          if (inputWord === randomWord){
            youWin()
        //otherwise, deduct 1 from the tries counter
        } else {
          let currentNumber = parseInt(triesCounter.innerHTML); //turns into integer
          let newNumber = currentNumber - 1;
          triesCounter.textContent = newNumber.toString(); //back to string to append to page
          
          //if tries counter is zero, game over
            if (triesCounter.textContent == 0){
              gameOver();
            }
          }
      }
    
    //When the game has ended:
    function endGame() {
      //append button to play again
        h3.appendChild(playAgain); 

      //remove the option to input or enter a new word
        userInput.style.display = 'none';
        enterButton.style.display = 'none';
    
      //when playAgain is clicked, remove the Play Again button and call the function to start again
      playAgain.addEventListener('click', () => {
        playAgain.remove();
        startGame();
      });
    }

    //When the player loses, change message to game over and reveal answer and trigger enddGame function
    function gameOver() {
        finalMessage.innerHTML = `Game Over! The correct answer was ${randomWord}`;
        endGame();
    }

    //When the player wins, display a winning message before triggering endGame function
    function youWin(){
      finalMessage.innerHTML = `Congratulations! You WIN!`;

      let currentScore = parseInt(score.innerHTML); //turns into integer
      let newScore = currentScore + 1;
      score.textContent = newScore.toString(); //back to string to append to page
    
      endGame();
    
  }

    //When the enter button is clicked, convert input value to uppercase. 
    //only pass through input as a parameter in function if it is a valid word (ie if it is in the list of words)
    enterButton.addEventListener('click', () => {

      const inputWord = userInput.value.toUpperCase();
      if (words.includes(inputWord)){
        checkWord(inputWord);
        userInput.value = '';

      //if it is 5 chars long but not in the list of words, alert not a valid word
      } else if (inputWord.length === 5){
          alert('Not a valid word');

      //otherwise prompt user to enter 5 letter word
      } else {
        alert('Please enter a 5 letter word');
      }
  
  });


//obtained from W4D1, changed textContent to value
let type = () => {
    for (let key of keys) {
      key.addEventListener('click', function() {
        let keyValue = this.textContent; // get the text content of the clicked key
        switch (keyValue) {
          case '␡':
            userInput.value = userInput.value.slice(0, -1); // remove the last character from the input value
            break;
          case '␡ all':
            userInput.value = ''; // clear the input value
            break;
          default:
            userInput.value += keyValue; // add the clicked key value to the input value
        }
      });
    }
  }; 

type();


  