function imprimirTexto() {
  var campoTexto = document.getElementById("campoTxt");
  var texto = campoTexto.value;

  console.log(texto);
}
function borrarTexto() {
  var campoTexto = document.getElementById("campoTxt");
  campoTexto.value = "";

  console.log(texto);
}
