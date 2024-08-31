var usuarioTxt = document.getElementById("usuarioTxt");
var passwordTxt = document.getElementById("passwordTxt");

var parrafo = document.querySelector("p");

function iniciarSesion() {
  var usuarioValor = usuarioTxt.value;
  parrafo.innerHTML = `Registro con éxito ${usuarioValor}`;
}

function registro() {
  var usuarioValor = usuarioTxt.value;
  parrafo.innerHTML = "Registro con exito" + usuarioValor;
}
