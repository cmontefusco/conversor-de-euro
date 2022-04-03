var taxaDeCambio = 5.14

function ConverterEmEuro() {
  var valorElementoEmReal = document.getElementById("valorEmReal");
  var valor = valorElementoEmReal.value;
  var valorEmEuroNumerico = parseFloat(valor);

  var valorEmEuro = (valorEmEuroNumerico) / taxaDeCambio;

  var elementoValorConvertidoEmEuro = document.getElementById(
    "valorConvertidoEmEuro"
  );
  var valorConvertidoEmEuro = "O valor em euro é € " + valorEmEuro;
  elementoValorConvertidoEmEuro.innerHTML = valorConvertidoEmEuro;
}

function ConverterEmReal() {
  var valorElementoEmEuro = document.getElementById("valorEmEuro");
  var valor = valorElementoEmEuro.value;
  var valorEmRealNumerico = parseFloat(valor);

  var valorEmReal = valorEmRealNumerico * taxaDeCambio;

  var elementoValorConvertidoEmReal = document.getElementById(
    "valorConvertidoEmReal"
  );
  var valorConvertidoEmReal = "O valor em real é R$ " + valorEmReal;
  elementoValorConvertidoEmReal.innerHTML = valorConvertidoEmReal;
}