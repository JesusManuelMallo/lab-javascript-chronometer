const chronometer = new Chronometer();

// get the buttons:
const btnLeftElement = document.getElementById('btnLeft');
const btnRightElement = document.getElementById('btnRight');

// get the DOM elements that will serve us to display the time:
const minDecElement = document.getElementById('minDec');
const minUniElement = document.getElementById('minUni');
const secDecElement = document.getElementById('secDec');
const secUniElement = document.getElementById('secUni');
const milDecElement = document.getElementById('milDec');
const milUniElement = document.getElementById('milUni');
const splitsElement = document.getElementById('splits');

function printTime() {
  chronometer.currentTime;
  printMinutes();
  printSeconds();
}

function printMinutes() {
  let minutes = chronometer.getMinutes();

  minDecElement.innerText = chronometer.computeTwoDigitNumber(minutes)[0];
  minUniElement.innerText = chronometer.computeTwoDigitNumber(minutes)[1];
  console.log(minutes);
  console.log(minDecElement.innerText);
}

function printSeconds() {
  let seconds = chronometer.getSeconds();
  secDecElement.innerText = chronometer.computeTwoDigitNumber(seconds)[0];
  secUniElement.innerText = chronometer.computeTwoDigitNumber(seconds)[1];
  console.log(seconds);
  console.log(secDecElement.innerText);
}

// ==> BONUS
function printMilliseconds() {
  // ... your code goes here
}

function printSplit() {
  let liElement = document.createElement('li');
  liElement.innerText = `${chronometer.split()}`;
  splitsElement.appendChild(liElement);
}

function clearSplits() {
  splitsElement.innerHTML = '';
}

function setStopBtn() {
  btnLeftElement.innerText = 'STOP';
  btnLeftElement.setAttribute('class', 'btn stop');
}

function setSplitBtn() {
  btnRightElement.innerText = 'SPLIT';
  btnRightElement.setAttribute('class', 'btn split');
}

function setStartBtn() {
  btnLeftElement.innerText = 'START';
  btnLeftElement.setAttribute('class', 'btn start');
}
function setResetBtn() {
  btnRightElement.innerText = 'RESET';
  btnRightElement.setAttribute('class', 'btn reset');
}

// Start/Stop Button
btnLeftElement.addEventListener('click', () => {
  if (btnLeftElement.innerText === 'START') {
    setStopBtn();
    setSplitBtn();
    chronometer.start(printTime);
  } else if (btnLeftElement.innerText === 'STOP') {
    setStartBtn();
    setResetBtn();
    chronometer.stop();
  }
});

// Reset/Split Button
btnRightElement.addEventListener('click', () => {
  if (btnRightElement.innerText === 'RESET') {
    chronometer.reset();
    clearSplits();
    printTime() = 0

  } else if (btnRightElement.innerText === 'SPLIT') {
    chronometer.split();
    printSplit();
  }
});
