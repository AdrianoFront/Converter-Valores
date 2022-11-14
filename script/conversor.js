const button = document.getElementsByClassName('convert-button')

const dolar = 5.4

const convertValues = () =>{
    const inputReais = document.getElementById('input-real').value
    const realValue = document.getElementById('real-value')
    const currencyValue = document.getElementById('currency-value')
    
    realValue.innerHTML = inputReais
    currencyValue.innerHTML = inputReais / dolar
}

button.addEventListner('click', convertValues)