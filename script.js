'use strict';

let buubleString = '';
let time = 45;
let hitOn;
const timerUpdater = document.querySelector('.timer');
const hitNum = document.querySelector('.hit-num');
const scoreUpdater = document.querySelector('.score');
const buubleContainer = document.querySelector('.bubbles');
const retry = document.querySelector('.reset');
const scoreDisplay = document.querySelector('.final-score');
const makeBubble = function () {
  buubleString = '';
  buubleContainer.innerHTML = '';
  for (let i = 0; i < 152; i++) {
    const rn = Math.floor(Math.random() * 9 + 1);
    buubleString += `<span class="bubble">${rn}</span>`;
  }
  buubleContainer.insertAdjacentHTML('afterbegin', buubleString);
  hitNumUpdater();
};

const hitNumUpdater = function () {
  hitOn = Math.floor(Math.random() * 9 + 1);
  hitNum.textContent = hitOn;
};
makeBubble();
function timerCount() {
  setTimeout(() => {
    time--;
    timerUpdater.textContent = time;
  }, 1000);
  const timeInt = setInterval(() => {
    if (timerUpdater.textContent === '0') {
      buubleContainer.classList.add('hidden');
      document.querySelector('.time-up').classList.remove('hidden');
      scoreDisplay.textContent = scoreUpdater.textContent;
    }
    if (time < 0) clearInterval(timeInt);
    else {
      timerUpdater.textContent = time;
    }
    time--;
  }, 1000);
}
timerCount();
buubleContainer.addEventListener('click', function (e) {
  if (!e.target.classList.contains('bubble')) return;

  if (
    Number(e.target.textContent) === hitOn &&
    timerUpdater.textContent !== '0'
  ) {
    makeBubble();
    scoreUpdater.textContent = Number(scoreUpdater.textContent) + 10;
  }
});

retry.addEventListener('click', function () {
  buubleContainer.classList.remove('hidden');
  document.querySelector('.time-up').classList.add('hidden');
  makeBubble();
  scoreUpdater.textContent = 0;
  timerUpdater.textContent = 45;
  time = 45;
  timerCount();
});
