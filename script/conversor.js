document.getElementById('btn-converter').onclick = moneyConvert;
document.getElementById('btn-clear').onclick = clearForm;


function moneyConvert(){

  let USS = document.getElementById("dolar").value;
  let BRL = document.getElementById("real").value;

  if(isNaN(dolar) || isNaN(real)){
    alert("Digite um valor válido!");
    return
}else if(dolar === ''){
    dolar = (parseFloat(real) / 5,25);
} else if(celsius === ''){
    real = (parseFloat(dolar) * 5,25);
} 
document.getElementById("dolar").value = parseFloat(dolar).toFixed(2);
document.getElementById("real").value = parseFloat(real).toFixed(2);
}

selector = document.getElementsById("selector").value

switch (selector) {
  case 'dólar':
        calculo = (n1 / n2)
        document.getElementById("resultado").innerHTML = `O valor de ${n1} em dólar é = ${calculo}`
        break
}

function clearForm(){
  document.getElementById("dolar").value = "";
  document.getElementById("real").value = "";
}

