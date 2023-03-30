// minimum viable product:
//- add a list of keywords array
// add a keyboard 

// choose one random word and let this be the wordle

// input letters from keyboard into input
//when the length of this array reaches 5...can no longer input

//"enter" button triggers function
//function: check to see if the characters in array 1 match the letters in the wordleturn gren etc)
    // if the position of the char correct, add a class to the key saying correct (and then the class makes chars chage colour)
    // if position of char is incorrect but char is in the word, turn char yellow
    //else, turn char grey.




    const gridContainer = document.getElementById('grid-container');
    let header = document.getElementById('header');
    const userInput = document.getElementById('user-input');
    const enterButton = document.getElementById('enter-button');
    let playAgain = document.createElement('button');
    const keys = document.querySelectorAll('.key');
    playAgain.innerHTML = 'Play Again';
    const words = ['apple', 'table', 'chair', 'house', 'beach'];
    const randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    
    function startGame() {
      // Reset the grid container and user input
      gridContainer.innerHTML = '';
      userInput.value = '';

      document.getElementById('finalMessage');
      finalMessage.innerHTML = "";
    
      // Reset the tries counter
      let triesCounter = document.getElementById('triesCounter');
      triesCounter.textContent = '5';

        // Reset key classes
      let keys2 = document.querySelectorAll('.key');
      for (let i = 0; i < keys2.length; i++) {
      keys2[i].classList.remove('correct', 'close', 'incorrect');
  }

  
      userInput.style.display = 'block';
      enterButton.style.display = 'block';
    
      // Choose a new random word
      randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();

    }

      document.addEventListener('DOMContentLoaded', () => {
      startGame();
    });
    
    function checkWord(inputWord) {
      const row2 = document.createElement('div');
      row2.classList.add('row');
      let isCorrect = true;
    
      // Create a new grid cell for each character of the input word
      for (let i = 0; i < inputWord.length; i++) {
        let gridElement = document.createElement('div');

        gridElement.classList.add('grid-cell');
        gridElement.textContent = inputWord[i];
        row2.appendChild(gridElement);
    
        const inputChar = inputWord[i];
        const randomChar = randomWord[i];
        const gridPos = row2.childNodes[i];
        const keyElement = document.querySelector(`#key-${inputChar.toUpperCase()}`);
    
        // If the characters match, add the 'correct' class to the grid cell and keyboard key
        if (inputChar === randomChar) {
          gridPos.classList.add('correct');
          keyElement.classList.add('correct');
        }
        // If the input character is included in the random word but in a different position, add the 'close' class
        else if (randomWord.includes(inputChar)) {
          gridPos.classList.add('close');
          keyElement.classList.add('close');
          isCorrect = false;
        }
        // If the characters don't match, add the 'incorrect' class
        else {
          gridPos.classList.add('incorrect');
          keyElement.classList.add('incorrect');
          isCorrect = false;
        }
      }
    
      // Append the new row to the grid container
      gridContainer.appendChild(row2);
    
      // Check if the user has won the game
      if (isCorrect) {

        youWin()

      } else {
        let triesCounter = document.getElementById('triesCounter');
    let currentNumber = parseInt(triesCounter.innerHTML);
    let newNumber = currentNumber - 1;
    triesCounter.textContent = newNumber.toString();
  
    if (triesCounter.textContent == 0){
      gameOver();
    }

      }
    }
    
    function endGame() {
      const finalMessage = document.getElementById('finalMessage');
      header.appendChild(playAgain);
    
      userInput.style.display = 'none';
      enterButton.style.display = 'none';
    
      playAgain.addEventListener('click', () => {

        // Remove the "Play Again" button
        playAgain.remove();
        


        // Call the function to start the game again
        startGame();
      });
    }

    function gameOver() {
      const finalMessage = document.getElementById('finalMessage');
      finalMessage.innerHTML = `Game Over! The correct answer was ${randomWord}`;
  endGame();
      endGame();
    }

    function youWin(){
      const finalMessage = document.getElementById('finalMessage');
      finalMessage.innerHTML = `Congratulations!! You WIN!`
      endGame();
    }

  enterButton.addEventListener('click', () => {

    const inputWord = userInput.value.toUpperCase();
    if (inputWord.length === 5) {
      checkWord(inputWord);
      userInput.value = '';
    } else {
      alert('Please enter a 5-letter word');
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


//render row
// update array with guesses
//take most recent item in guess array, pass into render row function. 




  