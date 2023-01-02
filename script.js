'use strict';
// global selections
const total0 = document.querySelector('#score--0');
const total1 = document.querySelector('#score--1');
const diceimg = document.querySelector('.dice');
const btnroll = document.querySelector('.btn--roll');
const playerActive0 = document.querySelector('.player--0');
const playerActive1 = document.querySelector('.player--1');
const btnhold = document.querySelector('.btn--hold');
const current1 = document.querySelector('#current--1');
const current0 = document.querySelector('#current--0');
const btnnew = document.querySelector('.btn--new');

// initial setting
total0.textContent = 0;
total1.textContent = 0;
diceimg.classList.add('hidden');

//Initial Values
let currentScore = 0;
let currentPlayer = 0;
const arr = [0, 0];
let playing = true;

btnroll.addEventListener('click', function () {
  if (playing) {
    let randomNumber = Math.trunc(Math.random() * 6 + 1);

    diceimg.src = `dice-${randomNumber}.png`;
    diceimg.classList.remove('hidden');
    if (randomNumber != 1) {
      currentScore += randomNumber;
      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentScore;
    } else {
      currentScore = 0;
      document.querySelector(`#current--${currentPlayer}`).textContent =
        currentScore;
      currentPlayer = currentPlayer === 1 ? 0 : 1;
      playerActive1.classList.toggle('player--active');
      playerActive0.classList.toggle('player--active');
    }
  }
});

btnhold.addEventListener('click', function () {
  // if (currentPlayer === 0) {
  //   arr[0] += Number(current0.textContent);
  //   total0.textContent = arr[0];
  // } else {
  //   arr[1] += Number(current1.textContent);
  //   total1.textContent = arr[1];
  // }

  if (playing) {
    arr[currentPlayer] = currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent =
      arr[currentPlayer];
    // check >
    if (arr[currentPlayer] >= 10) {
      playing = false;
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${currentPlayer}`)
        .classList.remove('player--active');
    } else {
      // switch player
      document.querySelector(`#current--${currentPlayer}`).textContent = 0;
      currentScore = 0;
      currentPlayer = currentPlayer === 1 ? 0 : 1;
      playerActive1.classList.toggle('player--active');
      playerActive0.classList.toggle('player--active');
    }
  }
});

btnnew.addEventListener('click', function () {
  total0.textContent = 0;
  total1.textContent = 0;
  currentScore = 0;
  currentPlayer = 0;
  playerActive0.classList.remove('player--winner');
  playerActive1.classList.remove('player--winner');
  playerActive0.classList.add('player--active');
  playerActive1.classList.remove('player--active');
  for (let i = 0; i < arr.length; i++) {
    arr[i] = 0;
  }
  let playing = true;
  diceimg.classList.add('hidden');
  document.querySelector(`#current--${currentPlayer}`).textContent =
    currentScore;
  diceimg.classList.add('hidden');
});
