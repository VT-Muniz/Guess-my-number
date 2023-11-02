'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!'

//const element = document.querySelector('.message')
//element.innerHTML = 'Correct'

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/
const num = 0

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent)

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //When there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'Põe um número, arrombado';

    //When player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Você acertou!!!';
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.fontSize = '80px';
    document.querySelector('.number').style.width = '200px';
    if(score > highscore){
    highscore = score
    document.querySelector('.highscore').textContent = highscore;
    }
  }
  //When guess is close
  else if (guess < secretNumber + 3 && guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Errou, mas está perto';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Você perdeu hahahaha!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber - 3 && guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Errou, mas está perto';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Você perdeu hahahaha!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When guess is too high
  else if (guess > secretNumber && guess > secretNumber + 5) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Errou, número muito alto';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Você perdeu hahahaha!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Errou, número alto';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Você perdeu hahahaha!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
  //When guess is too low
  else if (guess < secretNumber && guess < secretNumber - 5) {
    if (score > 1) {
      document.querySelector('.message').textContent =
        'Errou, número muito baixo';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Você perdeu hahahaha!!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Errou, número baixo';
      score -= 1;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent =
        'Você perdeu hahahaha!!!';
      document.querySelector('.score').textContent = 0;
    }
  }
});

    //Play Again
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  
  document.querySelector('.guess').value = ``;

  document.querySelector('.number').textContent = '?';
  document.querySelector('.number').style.fontSize = '6rem';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
});





