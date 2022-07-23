function conversor(){

  const valorEmReal = document.getElementById("valorEmReal").value;

  switch opcao{
  
    case "US$":
      document.getElementById("valorFinal").innerHTML = (valor/dolarAmericano).toFixed(2);
      break;
  
    case "Euro$":
      document.getElementById("valorFinal").innerHTML = (valor/Euro).toFixed(2);
      break;
  
    default:
      document.getElementById("valorFinal").innerHTML = "<h3 style='color: red'>Erro<h3>";
      break;
  }

}


const converterBotton = document.querySelector('button');
converterBotton.onclick = currencyConverter;

