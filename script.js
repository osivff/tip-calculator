let billAmount = document.querySelector('#fbill');
let tipPercent = document.querySelector('#ftip');
let tipTotal = document.querySelector('.tip.total-amount');
let billTotal = document.querySelector('.bill.total-amount');

let addButton = document.querySelector('#plusButton');
let subtractButton = document.querySelector('#minusButton');


addButton.addEventListener('click', (e)=> {
    let splitStringPercentage = tipPercent.value.split('%');
    let count = Number(splitStringPercentage[1]);
    let newNumber = `%${count + 1}`

    tipPercent.setAttribute('value', newNumber);
}); 

subtractButton.addEventListener('click', (e) => {
    let splitStringPercentage = tipPercent.value.split('%');
    let count = Number(splitStringPercentage[1]);
    let newNumber = `%${count - 1}`;
    if(count > 15) {
        tipPercent.setAttribute('value', newNumber);
    }
});