let billAmount = document.querySelector('#fbill');
let tipPercent = document.querySelector('#ftip');
let tipTotal = document.querySelector('.tip.total-amount');
let billTotal = document.querySelector('.bill.total-amount');
let btnCalculate = document.querySelector('#btn-calculate');

let addButton = document.querySelector('#plusButton');
let subtractButton = document.querySelector('#minusButton');


addButton.addEventListener('click', ()=> {
    let splitStringPercentage = tipPercent.value.split('%');
    let count = Number(splitStringPercentage[1]);
    let newNumber = `%${count + 1}`

    tipPercent.value = newNumber;
}); 

subtractButton.addEventListener('click', () => {
    let splitStringPercentage = tipPercent.value.split('%');
    let count = Number(splitStringPercentage[1]);
    let newNumber = `%${count - 1}`;
    if(count > 1) {
        tipPercent.value = newNumber;
    }
});

btnCalculate.addEventListener('click', () => {
    let amount = Number(billAmount.value);
    let tipAmount;
    let totalAmount;
    let splitPercentage = tipPercent.value.split('%');
    let tipNumber = Number(splitPercentage[1]);
    
    let displayTip = document.querySelector('#tip-amount');
    let displayBill = document.querySelector('#bill-amount');

    if(!isNaN(amount) && amount > 0) {
        tipAmount = (amount/100) * tipNumber;
        totalAmount = tipAmount + amount;
    } else {
        alert('Enter a valid bill and tip amount');
        return;
    }
    
    displayTip.textContent = `${tipAmount.toFixed(2)}`;
    displayBill.textContent = `${totalAmount.toFixed(2)}`;

})