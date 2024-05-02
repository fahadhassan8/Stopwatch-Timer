let timeInterval;
let seconds = 300; // 60 * 5
let isRunning = false;
let startStopBtn = document.getElementById("startStop");
let resetTime = document.getElementById("reset");
startStopBtn.type = "button";
let timer = document.getElementById("timer");

let updateTimer = () => {
  seconds--;
  let minutes = Math.floor(seconds / 60);
  let remainderSeconds = seconds % 60;
  const display = `<span>${
    minutes < 10 ? "0" : ""
  }</span><span>${minutes}</span>   <span class="span-zero">${
    remainderSeconds < 10 ? "0" : ""
  }</span><span class="span-zero">${remainderSeconds}</span>`;
  timer.innerHTML = display;
};
let timerStart = () => {
  if (isRunning) {
    clearInterval(timeInterval);
    seconds = 300;
    isRunning = false;
    startStopBtn.innerText = "Start";
  } else {
    timeInterval = setInterval(updateTimer, 1000);
    isRunning = true;
    startStopBtn.innerText = "Stop";
  }
};
startStopBtn.addEventListener("click", timerStart);

let resetTimer = () => {
  seconds = 300;
  clearInterval(timeInterval);
  isRunning = false;
  timer.innerHTML = `<span>5</span> <sub>m</sub> <span class="span-zero">00</span>`;
  startStopBtn.innerText = "Stop";
};
resetTime.addEventListener("click", resetTimer);

                    // Stopwatch
let startStopWatchBtn = document.getElementById("startStopWatchBtn");
let resetWatchBtn = document.getElementById("resetWatchBtn");
let hoursSpan = document.getElementById("hours");
let minutesSpan = document.getElementById("minutes");
let secondsSpan = document.getElementById("seconds");
let millisecondsSpan = document.getElementById("milliseconds");
let startStopwatch = document.getElementById("stopwatch");
let isRun = false;
let elapsedTime = 0;
let currentTime = 0;
let startTime = 0;
let interval;

let updateStopWatch = () => {
  currentTime = Date.now();
  elapsedTime = currentTime - startTime;
  let milliSeconds = Math.floor((elapsedTime % 1000) / 10);
  let seconds = Math.floor((elapsedTime / 1000) % 60);
  let minutes = Math.floor((elapsedTime / (1000 * 60)) % 60);
  let hours = Math.floor((elapsedTime / (1000 * 60 * 60)) % 24);

  let formattedHours = hours < 10 ? "0" + hours : hours;
  let formattedMinutes = minutes < 10 ? "0" + minutes : minutes;
  let formattedSeconds = seconds < 10 ? "0" + seconds : seconds;
  let formattedMilliSeconds =
    milliSeconds < 10 ? "0" + milliSeconds : milliSeconds;

    hoursSpan.textContent = formattedHours;
    minutesSpan.textContent = formattedMinutes;
    secondsSpan.textContent = formattedSeconds;
    millisecondsSpan.textContent = formattedMilliSeconds;
    startStopwatch.innerHTML = `<span>${formattedHours}</span><sub>h</sub> 
    <span>${formattedMinutes}</span><sub>m</sub>
    <span>${formattedSeconds}</span><sub>s</sub>
    <span class="span-zero">${formattedMilliSeconds}</span>`;

};

let startWatch = () => {
  startTime = Date.now() - elapsedTime;
  if (!isRun) {
    isRun = true;
    interval = setInterval(updateStopWatch, 10);
    startStopWatchBtn.innerText = "Stop";
  } else {
    isRun = false;
    clearInterval(interval);
    startStopWatchBtn.innerText = "Start";
  }
};

startStopWatchBtn.addEventListener("click", startWatch);

let resetStopwatch = () => {
  isRun = false;
  clearInterval(interval);
  elapsedTime = 0;
  startStopwatch.innerHTML = `<div id="stopwatch">
                                        <span id="hours">00</span><sub>h</sub>
                                        <span id="minutes">0</span><sub>m</sub>
                                        <span id="seconds">00</span><sub>s</sub>
                                        <span class="span-zero" id="milliseconds">00</span>
                                    </div>`;
};

resetWatchBtn.addEventListener("click", resetStopwatch);
