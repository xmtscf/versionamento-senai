let saldoInicial = parseInt(prompt("Informe o saldo inicial da peça:"));
let continuarEntrada = true;

while (continuarEntrada) {
  let tipoEntrada = parseInt(prompt("Informe o tipo de entrada (1 para compra ou 2 para venda):"));
  let quantidade = parseInt(prompt("Informe a quantidade de peças:"));

  if (tipoEntrada === 1) {
    saldoInicial += quantidade;
  } else if (tipoEntrada === 2) {
    if (quantidade <= saldoInicial) {
      saldoInicial -= quantidade;
    } else {
      alert("Saldo insuficiente");
    }
  }

  alert("Saldo atualizado: " + saldoInicial);

  let resposta = prompt("Deseja continuar a entrada de dados? (s/n)");
  if (resposta.toLowerCase() !== "s") {
    continuarEntrada = false;
  }
}

alert("Sistema encerrado.");
