const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');

const infoBtn = document.querySelector('.fa-question');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');

const colorBtn = document.querySelector('.fa-paintbrush');
const colorPanel = document.querySelector('.colors')
const colorOne = document.querySelector('.one');
const colorTwo = document.querySelector('.two');
const colorThree = document.querySelector('.three');
let root = document.documentElement;

let countTime;
let minutes = 0;
let second = 0;

let timeArr = [];

const handleStart = () => {
    clearInterval(countTime)
    countTime = setInterval(() => {
        if(second < 9) {
        second++;
        stopwatch.textContent = `${minutes}:0${second}`;
    } else if(second >=9 && second < 59) {
        second++;
        stopwatch.textContent = `${minutes}:${second}`;
    } else {
        minutes++;
        second = 0;
        stopwatch.textContent = `${minutes}:00`;
    }
    }, 100)
}
const handleStop = () => {

    time.innerHTML = `Ostatni czas: ${stopwatch.textContent}`;

    if (stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        timeArr.push(stopwatch.textContent)
    }
    clearStaff()
}

const handlePause = () => {
    clearInterval(countTime);
}

const handleReset = () => {
    clearStaff()
    time.style.visibility = 'hidden';
    timeArr = [];
}

const clearStaff = () => {
    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    timeList.textContent = '';
    second = 0;
    minutes = 0;
} 

const showHistory = () => {
    timeList.textContent = '';
    let num = 1
    timeArr.forEach(time => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Pomiar nr ${num}: <span>${time}<span>`;
        timeList.appendChild(newTime);
        num++;
    })
}

const showModal = () => {
    if(!(modalShadow.style.display === 'block')) {
        modalShadow.style. display = 'block';
    }  else {
        modalShadow.style. display = 'none';
    };

    modalShadow.classList.toggle('modal-animation');
}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click',handlePause);
stopBtn.addEventListener('click',handleStop);
resetBtn.addEventListener('click',handleReset);
historyBtn.addEventListener('click', showHistory);
infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', e => e.target === modalShadow ? showModal() : false);

colorBtn.addEventListener('click', () => {
    colorPanel.classList.toggle('show-colors')
})

colorOne.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(250, 20, 6)');
    root.style.setProperty('--hover-color', 'rgb(209, 33, 24)');
})
colorTwo.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(6, 173, 250)');
    root.style.setProperty('--hover-color', 'rgb(28, 145, 199)');
})
colorThree.addEventListener('click', () => {
    root.style.setProperty('--first-color', 'rgb(0, 255, 42)');
    root.style.setProperty('--hover-color', 'rgb(28, 209, 58)');
})

