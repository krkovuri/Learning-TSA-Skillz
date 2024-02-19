'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 202;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

let numToGuess = Math.floor(Math.random() * (20 - 1 + 1) + 1);
// document.querySelector('.number').textContent = numToGuess;

document.querySelector('.check').addEventListener('click', function () {
  let guess = Number(document.querySelector('.guess').value);
  if (Number(document.querySelector('.score').textContent) > 0) {
    if (!guess) {
      document.querySelector('.message').textContent = 'No number!';
    } else if (guess === numToGuess) {
      document.querySelector('.number').textContent = numToGuess;
      document.querySelector('.message').textContent = '🥳 Correct Number!';
      document.querySelector('.score').textContent =
        Number(document.querySelector('.score').textContent) - 1;
      document.body.style.backgroundColor = '#71eb34';
      if (
        Number(
          document.querySelector('.score').textContent >
            Number(document.querySelector('.highscore').textContent)
        )
      ) {
        document.querySelector('.highscore').textContent =
          document.querySelector('.score').textContent;
      }
    } else {
      document.querySelector('.score').textContent =
        Number(document.querySelector('.score').textContent) - 1;
      if (guess < numToGuess) {
        if (guess < 1) {
          document.querySelector('.message').textContent =
            'You lost the game 😟';
          document.body.style.backgroundColor = '#eb3434';
          document.querySelector('.score').textContent = '0';
        } else {
          document.querySelector('.message').textContent =
            'Too low. Guess higher 👆';
        }
      } else if (guess > numToGuess) {
        if (guess > 20) {
          document.querySelector('.message').textContent =
            'You lost the game 😟';
          document.body.style.backgroundColor = '#eb3434';
          document.querySelector('.score').textContent = '0';
        } else {
          document.querySelector('.message').textContent =
            'Too high. Guess lower 👇';
        }
      }
    }

    if (Number(document.querySelector('.score').textContent) === 0) {
      document.querySelector('.message').textContent = 'You lost the game 😟';
      document.body.style.backgroundColor = '#eb3434';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = '?';
  document.querySelector('.score').textContent = '20';
  document.querySelector('.message').textContent = 'Start guessing...';
  numToGuess = Math.floor(Math.random() * 20 + 1);
  document.body.style.backgroundColor = '#222222';
  // document.querySelector('.number').textContent = numToGuess;
});
