function MoedaReal(num1, num2){
  n1 = parseFloat(document.getElementsById("n1").value);
  n1 = parseFloat(document.getElementsById("n2").value);
}

selector = document.getElementsById("selector").value

switch (selector) {
  case 'dólar':
        calculo = (n1 / n2)
        document.getElementById("resultado").innerHTML = `O valor de ${n1} em dólar é = ${calculo}`
        break
}


