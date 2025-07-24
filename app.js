let listaNumeros = [1,2,3,4,5,6,7,8,9];
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

function asignarContenido(elemento, texto) {
  let elElemento = document.querySelector(elemento);
  elElemento.innerHTML = texto;
}

function generarNumeroSecreto() {
  if (listaNumeros.length >= 10) {
    finDelJuego();
    return null;
  }

  let numeroGenerado = Math.floor(Math.random() * 10) + 1;

  if (listaNumeros.includes(numeroGenerado)) {
    return generarNumeroSecreto();
  } else {
    listaNumeros.push(numeroGenerado);
    console.log(listaNumeros)
    return numeroGenerado;
  }
}

function intentoDeUsuario() {
  if (listaNumeros.length >= 10) {
    finDelJuego();
    return;
  }

  let numeroUsuario = parseInt(document.getElementById("numeroIngresar").value);

  if (numeroUsuario === numeroSecreto) {
    asignarContenido(
      "p",
      `¡Ganaste! Lo intentaste ${intentos} ${intentos === 1 ? "vez" : "veces"}`
    );
    document.getElementById("reiniciar").removeAttribute("disabled");
  } else {
    if (numeroUsuario > numeroSecreto) {
      asignarContenido("p", `El número ${numeroUsuario} es mayor`);
    } else {
      asignarContenido("p", `El número ${numeroUsuario} es menor`);
    }
  }

  limpiarCaja();
  intentos++;
}

function limpiarCaja() {
  document.querySelector("#numeroIngresar").value = "";
}

function reiniciar() {
  if (listaNumeros.length >= 10) {
    finDelJuego();
    return;
  }

  numeroSecreto = generarNumeroSecreto();
  intentos = 1;
  asignarContenido("p", "Elige un número del 1 al 10");
  document.getElementById("reiniciar").setAttribute("disabled", true);
}

function finDelJuego() {
  asignarContenido("p", "¡Ya usaste todos los números! El juego ha terminado.");
  document.getElementById("reiniciar").style.display = "none";  
  document.querySelector("#numeroIngresar").setAttribute("disabled", true);  
}

asignarContenido("h1", "Juego del número secreto");
asignarContenido("p", "Elige un número del 1 al 10");
