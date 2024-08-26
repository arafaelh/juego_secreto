let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
  let elementoHTML = document.querySelector(elemento);
  elementoHTML.innerHTML = texto;
  return;
}

function verificarIntento() {
  let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

  if (numeroDeUsuario === numeroSecreto) {
      asignarTextoElemento('p', `Has adivinado el número secreto en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
      document.getElementById('reiniciar').removeAttribute('disabled');
  }else{
    if (numeroDeUsuario > numeroSecreto) {
      asignarTextoElemento('p', 'El número secreto es menor');
    } else {
      asignarTextoElemento('p', 'El número secreto es mayor');
    }  
    intentos++;
    limpiarCaja();
  }
  return;
}
/+ comentario */
function limpiarCaja() {
  document.getElementById('valorUsuario').value = '';
}

function generarNumeroSecreto() {
  let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
  //console.log(numeroGenerado ${numeroGenerado});
  if (listaNumerosSorteados.length === numeroMaximo) {
    asignarTextoElemento('p', 'Se han agotado los intentos');
  }
  if (listaNumerosSorteados.includes(numeroGenerado)){
    return generarNumeroSecreto();
  } else {
    listaNumerosSorteados.push(numeroGenerado);
    return numeroGenerado;
  }
}

function condicionesIniciales() {
  asignarTextoElemento('h1', 'Juego del número secreto!');
  asignarTextoElemento('p', `Indica un número entre 1 y ${numeroMaximo}`);
  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
}

function reiniciarJuego() { 
  //Limpiar la caja
  limpiarCaja();
  //Indicar el mensaje
  condicionesIniciales(); 
  //Habilitar el boton de reiniciar
  document.getElementById('reiniciar').setAttribute('disabled', true);
}

condicionesIniciales();
