const button = document.getElementsByClassName('convert-button')
const select = document.getElementsByClassName('currency-select')


const dolar = 5.4
const euro = 5.9

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

    currencyValueText.innerHTML = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency:"EUR",
    }).format(inputReais / euro);


}

changeCurrency = () => {
    const currencyName = document.getElementById("currency-name")

    if(select.value === '€ Euro'){
        currencyName.innerHTML = "Euro"
    }
}

button.addEventListner('click', convertValues)
select.addEventListner("change", changeCurrency )