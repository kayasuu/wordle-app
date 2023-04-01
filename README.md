# Word Guesser
This is a word guessing game which has taken inspiration from Wordle and Hangman. The player has to guess a randomly selected word by entering a 5-letter word. The game provides feedback on the accuracy of the guess by displaying the guessed word on a grid, with correct letters highlighted in green, close letters in yellow, and incorrect letters in red.

## How to play:
- Each guess must be a valid 5 letter word.
- The color of the tiles will change to show how close your guess was to the word.
- Get 6 chances to guess a 5-letter word. 

## Examples:
- **C**, **V** and **E** are in the word, and in the correct spot

![Example1](https://i.imgur.com/GhqKaCQ.png)

- **R** and **A** are in the word, but in the wrong spot. 

- **O**, **L**, **D** and **S** are not in the word.

![Example2](https://i.imgur.com/lNncpJD.png)


The correct answer is: **CRAVE**

## Reflections:
### How I found the project:
I found the project challenging, but stimulating. I liked that we were able to inject our own creativity into the overall look, feel and functionality of the game. I liked being able to apply what we'd learned into creating a project that will be relevant once the course ends. 

### What I'm proud of:
I'm proud of the final result of the project. The game works well and has a functional and engaging user interface which provides feedback to the player on the accuracy of their guesses. There are also no bugs or glitches.

### Challenges
- As I had worked on the js functionality first using an input bar, instead of appending my characters to an exisiting grid like in the Wordle game, I found it tricky to go back and adapt my code to fit the mould of the original game. I also wanted to use my computer keyboard as well as the HTML keyboard like the original Wordle app, so I kept the input and just created gridcells through JS with every word the user guessed.
- Initially I found it tricky to figure out a way to check to see if the input word and randomWord characters lined up. 
- As I was creating new elements for my character tiles on js within a loop, what I found tricky was the process of isolating each character element I'd created depending on whether it was correct, close or incorrect, and then assigning it to a class before the loop had finished. 

### Room for improvement
Although I'm proud of the final result of the project, there are still some areas where I could improve. For example, I could add more features to the game, such as the ability to select different difficulty levels or to choose a category of words to guess. 

### What I've learned
Through this project, I learned a lot about working with dynamic elements in JavaScript, and also gained a deeper understanding of how to manipulate the DOM. I also learned the importance of planning and organizing my code before diving into implementation, as this helped me to avoid potential pitfalls and make the development process smoother.