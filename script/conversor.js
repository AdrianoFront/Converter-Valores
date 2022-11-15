const button = document.getElementsByClassName('convert-button')

const dolar = 5.4

const convertValues = () =>{
    const inputReais = document.getElementById('input-real').value
    const realValue = document.getElementById('real-value')
    const currencyValue = document.getElementById('currency-value')
        
    currencyValueText.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency:"BRL",
    }).format(inputReais);

    currencyValueText.innerHTML = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency:"USD",
    }).format(inputReais / dolar);


};

button.addEventListner('click', convertValues)
button.addEventListner("change", )