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
    const userInput = document.getElementById('user-input');
    const enterButton = document.getElementById('enter-button');
    const words = ['apple', 'table', 'chair', 'house', 'beach'];
    const randomWord = words[Math.floor(Math.random() * words.length)].toUpperCase();
    
    enterButton.addEventListener('click', () => {
      const inputWord = userInput.value.toUpperCase();
      if (inputWord.length === 5) {
        checkWord(inputWord);
        userInput.value = '';
      } else {
        alert('Please enter a 5-letter word');
      }
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
        const keyElement = document.querySelector(`#key-${inputChar.toUpperCase()}`);
        const gridPos = row2.childNodes[i];
    
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
        alert('Congratulations! You won!');
      }
    }

//render row
// update array with guesses
//take most recent item in guess array, pass into render row function. 


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


