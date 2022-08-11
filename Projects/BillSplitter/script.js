const inputPrice = document.querySelector('#price')
const inputPeople = document.querySelector('#people')
const selectTip = document.querySelector('#tip')
const errorMsg = document.querySelector('.error')
const countBtn = document.querySelector('.count')
const costInfo = document.querySelector('.cost-info')
const cost = document.querySelector('.cost')

const chceckForm = () => {
    if(inputPeople.value == '' || inputPrice.value == '' || selectTip.value == 0) {
        errorMsg.textContent = 'Uzupełnij wszystkie pola!'
        costInfo.style.display = 'none';
    } else {
        errorMsg.textContent = ''
        countBill()
    }
}

const countBill = () => {
    const newPrice = parseInt(inputPrice.value);
    const newPeople = parseInt(inputPeople.value);
    const newSelect = parseFloat(selectTip.value);

    const sum = (newPrice + (newPrice * newSelect)) / newPeople;
    costInfo.style.display = 'block';
    cost.textContent = sum.toFixed(2)

}

countBtn.addEventListener('click', chceckForm)


