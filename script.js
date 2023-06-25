'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.number').textContent = '#';
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  // when there is no input
  if (!guess) {
    displayMessage(' no number');
    // when player wins the game
  } else if (guess === secretNumber) {
    displayMessage('correct number');

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '28rem';
    // To determine the highscore
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too high' : 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('you lost the game');
      displayMessage(0);
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage(' start guessing...');
  document.querySelector('.number').textContent = '#';
  document.querySelector('.number').style.width = '13rem';
  document.querySelector('body').style.backgroundColor = '#222';
  const guess = Number(document.querySelector('.guess').value);
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
});
