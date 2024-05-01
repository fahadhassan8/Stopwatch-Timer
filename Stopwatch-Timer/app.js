let timeInterval;
let seconds = 300; // 60 * 5
let isRunning = false;
let startStopBtn = document.getElementById('startStopTimer');
let resetTime = document.getElementById('resetTimer');
startStopBtn.type = 'button';
let timer = document.getElementById('timer');

let updateTimer = () => {
    seconds--;
    let minutes = Math.floor(seconds / 60);
    let remainderSeconds = seconds % 60;
    const display = `<span>${minutes < 10 ? '0' : ''}</span><span>${minutes}</span>   <span class="span-zero">${remainderSeconds < 10 ? '0' : ''}</span><span class="span-zero">${remainderSeconds}</span>`;
    timer.innerHTML = display;
}
let timerStart = () => {
    if(isRunning){
        clearInterval(timeInterval);
        seconds = 300;
        isRunning = false;
        startStopBtn.innerText = 'Start'; 
    }else{
        timeInterval = setInterval(updateTimer,1000)
        isRunning = true;
        startStopBtn.innerText = 'Stop'; 
    }
}
startStopBtn.addEventListener('click',timerStart);

let resetTimer = () => {
    seconds = 300;
    clearInterval(timeInterval);
    isRunning = false;
    timer.innerHTML = `<span>5</span> <sub>s</sub> <span class="span-zero">00</span>`;
    startStopBtn.innerText = 'Stop';
}
resetTime.addEventListener('click',resetTimer);