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
let keys = document.getElementsByClassName('key');
const row = document.createElement('div');
row.classList.add('row');

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

// Function to check the input word against the random word
function checkWord(inputWord) {
      // Create a new row element for the grid
      const row = document.createElement('div');
      row.classList.add('row');

      

  for (let i = 0; i < 5; i++) {
    const char = document.createElement('p');

    //declariing vars for each character at certain position eg. inputWord[a] and randomWord[a]
    let inputChar = inputWord[i];
    let randomChar = randomWord[i];

    

    //checks same position
    if (inputChar === randomChar) {
      char.classList.add('correct');

    //check includes
    } else if (randomWord.includes(inputChar)) {
      char.classList.add('close');


    } else {
      char.classList.add('incorrect');

    }

    char.textContent = inputChar;
    row.appendChild(char);
  }

  gridContainer.appendChild(row);
};

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


