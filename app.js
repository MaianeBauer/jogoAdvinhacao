alert("Boas vindas ao jogo do número secreto!");
let numMaximo = 101;
let numeroSecreto = parseInt(Math.random() * numMaximo) + 1;
let chute;
let tentativas = 1;
while (chute != numeroSecreto) {
  //while= enquanto
  chute = prompt("Digite um número entre 1 e " + numMaximo + ":");
  if (chute == numeroSecreto) {
    break;
  } else {
    if (numeroSecreto > chute) {
      alert("O numero secreto é maior que " + chute);
    } else {
      alert("O número secreto é menor que  " + chute);
    }
    tentativas++;
  }
}
let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  "Parabens você descobriu o numero secreto " +
    numeroSecreto +
    " com  " +
    " " +
    tentativas +
    " " +
    palavraTentativa +
    "."
);

//uso de operador ternario
//if (tentativas > 1){
//alert("Parabens você descobriu o numero secreto " + numeroSecreto + " com " + tentativas + " tentativas")
//else{
// alert("Parabens você descobriu o numero secreto " + numeroSecreto + "com " + tentativas + " tentativa")
//}
