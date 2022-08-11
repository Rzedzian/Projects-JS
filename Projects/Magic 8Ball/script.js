const ballImg = document.querySelector('.ball-img img');
const input = document.querySelector('.question-area input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');
const answerArr = ['Tak', 'Nie', 'Może', 'Nie chcesz znać odpowiedzi..', 'Trudno powiedzieć..']

const shakeBall = () => {
    ballImg.classList.add('shake-animation');
    setTimeout(checkInput, 1000)
}

const generateAnswer = () => {
    const number = Math.floor(Math.random() * ((answerArr.length) - 0) ) + 0;
    answer.innerHTML = `<span>Odpowiedź:</span> ${answerArr[number]}`
    error.textContent = '';
}

const checkInput = () => {
    if(input.value === '') {
        answer.textContent = '';
        error.textContent = 'Zadaj pytanie'
        ballImg.classList.remove('shake-animation')
    } else if(input.value.slice(-1) !== '?'){
        answer.textContent = '';
        error.textContent = 'Pytanie musi być zakończone znakiem "?"';
        ballImg.classList.remove('shake-animation')
    } else {
        generateAnswer()
        ballImg.classList.remove('shake-animation')
    }
}



ballImg.addEventListener('click', shakeBall)


