
const nameDiv = document.querySelector('.card-name');
const numberDiv = document.querySelector('.card-number-div');
const monthDiv = document.querySelector('.month');
const yearDiv = document.querySelector('.year');
const cvcDiv = document.querySelector('.cvc');

const nameInput = document.querySelector('.name-input');
const numberInput = document.querySelector('.number-input');
const monthInput = document.querySelector('.month-input');
const yearInput = document.querySelector('.year-input');
const cvcInput = document.querySelector('.cvc-input');
const inputArr = [nameInput, numberInput, monthInput, yearInput, cvcInput]

const nameWrite = document.querySelector('#card-name-input');
const expDateMonthWrite = document.querySelector('#exp-date-input-month');
const expDateYearWrite = document.querySelector('#exp-date-input-year');
const cardNumberWrite = document.querySelector('.card-number');
const cardNumberSection = document.querySelector('.card-number-section');
const cvcWrite = document.querySelector('#cvc-input')

const nameRegex = /^[a-zA-Z]+\s[a-zA-Z]+$/;
const numberRegex = /^[0-9]{4}\s[0-9]{4}\s[0-9]{4}\s[0-9]{4}$/;
const monthRegex = /^[0-9]{2}$/;
const yearRegex = /^[0-9]{2}$/;
const cvcRegex = /^[0-9]{3}$/;

const confirmBtn = document.querySelector('.confirm')
confirmBtn.onclick = confirmFunction



numberInput.addEventListener('input', (e)=>{
        if (numberInput.value.length===4||numberInput.value.length===8||numberInput.value.length===12)cardNumberWrite.value = e.target.value
        else cardNumberWrite.value = e.target.value
    
})



nameInput.addEventListener('input', e=>{
    nameWrite.value = e.target.value
})

monthInput.addEventListener('input', e=>{
    if(monthInput.value.replaceAll(' ', '').length<3){
    
    expDateMonthWrite.value = e.target.value
}
})

yearInput.addEventListener('input', e=>{
    if(yearInput.value.replaceAll(' ', '').length<3){
    expDateYearWrite.value = e.target.value  
}
})

cvcInput.addEventListener('input', e=>{
    if(cvcInput.value.replaceAll(' ', '').length <4) cvcWrite.value=e.target.value 
})


function confirmFunction() {
    if(!nameRegex.test(nameInput.value)){
        if (nameDiv.classList.length===1) nameDiv.classList.add('error-div')
    }
    else {
        if (nameDiv.classList.length===2) nameDiv.classList.remove('error-div')
    }

    if(!numberRegex.test(numberInput.value)){
        if (numberDiv.classList.length===1) numberDiv.classList.add('error-div')
    }
    else {
        if (numberDiv.classList.length===2) numberDiv.classList.remove('error-div')
    }

    if(!monthRegex.test(monthInput.value)){
        if (monthDiv.classList.length===1) monthDiv.classList.add('error-div')
    }
    else {
        if (monthDiv.classList.length===2) monthDiv.classList.remove('error-div')
    }

    if(!yearRegex.test(yearInput.value)){
        if (yearDiv.classList.length===1) yearDiv.classList.add('error-div')
    }
    else {
        if (yearDiv.classList.length===2) yearDiv.classList.remove('error-div')
    }

    if(!cvcRegex.test(cvcInput.value)){
        if (cvcDiv.classList.length===1) cvcDiv.classList.add('error-div')
    }
    else {
        if (cvcDiv.classList.length===2) cvcDiv.classList.remove('error-div')
    }

    if (nameDiv.classList.length===1&&numberDiv.classList.length===1&&monthDiv.classList.length===1&&yearDiv.classList.length===1&&cvcDiv.classList.length===1) {
        document.querySelector('section').classList.toggle('none')
        document.querySelectorAll('section')[1].classList.toggle('none')
    }
}