document.getElementById('btn-pesagem').onclick = pesoTeste;
document.getElementById('btn-clear').onclick = limpaBalanca;


function pesoTeste(){

  let peso = document.getElementById("btn-pesagem").value;
  
  if(isNaN(Peso)){
    alert("Digite um valor válido!");
    return
} else if(Peso === ''){
    Peso = (parseFloat(limiteX) / 80);
} 
document.getElementById("dolar").value = parseFloat(Peso).toFixed(2);
}

function clearForm(){
  document.getElementById("peso").value = "";
}