const b5 = document.getElementById('5');
const b10 = document.getElementById('10');
const b15 = document.getElementById('15');
const b25 = document.getElementById('25');
const b50 = document.getElementById('50');
const bcustom = document.getElementById('custom');
const bill = document.getElementById('input1');
const people = document.getElementById('people');
const calcul = document.getElementById('calcul');
const reset = document.getElementById('resetBtn');
const amoutNB = document.getElementById('amoutNB');
const totalNB = document.getElementById('totalNB');

let billValue = '';
let peopleValue = '';
let customValue = '';
let tipValue = 0;
let tipAmout = 0;
let total = 0;
let arr = [b5, b10, b15, b25, b50];
let percentSelect = [5, 10, 15, 25, 50];


bill.addEventListener('input', (e) => {
    billValue = e.target.value;
    billValue = parseInt(billValue, 10)
})
people.addEventListener('input', (e) => {
    peopleValue = e.target.value;
    peopleValue = parseInt(peopleValue, 10)
    console.log(peopleValue)
})
bcustom.addEventListener('input', (e) => {
    customValue = e.target.value;
    customValue = parseInt(customValue, 10)
    console.log(customValue)
})
calcul.addEventListener('click', () => {
    if (tipValue === 0) {
        tipValue = customValue;
    }
    tipAmout = calculTip(billValue, tipValue, peopleValue)
    total = tipAmout * peopleValue;
    total = total.toFixed(2)
    appendResult(tipAmout, total, amoutNB, totalNB)
    console.log(total)
})
reset.addEventListener('click', () => {
    removeResult(amoutNB, totalNB)
    bill.value = '';
    people.value = '';
    bcustom.value = '';
    console.log(people.value)
    billValue = '';
    peopleValue = '';
    customValue = '';
    tipValue = 0;
    tipAmout = 0;
    total = 0;
})

for (let i = 0; i <= 5; i++) {
    arr[i].addEventListener('click', () => {
        arr[i].style.background = '#23C4AF';
        tipValue = percentSelect[i];
        for (let y = 0; y <= 5; y++) {
            if (y !== i) {
                arr[y].style.background = '#02484B'
            }
        }
    })
}

function calculTip(bill, percent, people) {
    return (bill * (percent / 100)) / people;
}

function appendResult(tip, total, amoutNB, totalNB) {
    amoutNB.innerHTML = '$' + tip;
    totalNB.innerHTML = '$' + total;
}

function removeResult(amoutNB, totalNB) {
    amoutNB.innerHTML = '$ 0.00';
    totalNB.innerHTML = '$ 0.00';
}