// se declaran las variables
var i;
var contador_empate = 0;
var contador_pc = 0;
var contador_usuario = 0;
var piedra = "piedra";
var papel = "papel";
var tijeras = "tijeras";
var empate = 0;
var ganar = 1;
var perder = 2;
// se le asignan botones a piedra, papel y tijeras
var piedraBtn = document.getElementById("piedra");
var papelBtn = document.getElementById("papel");
var tijerasBtn = document.getElementById("tijeras");
// Se le asina un evento a los botones
piedraBtn.addEventListener("click", () => {
  juego(piedra);
});
papelBtn.addEventListener("click", () => {
  juego(papel);
});
tijerasBtn.addEventListener("click", () => {
  juego(tijeras);
});
// se realiza el cambio de numeros a string a math.random
function resultado_pc() {
  var resultado_pc = Math.floor(Math.random() * 3);

  switch (resultado_pc) {
    case 0:
      return piedra;
    case 1:
      return papel;
    case 2:
      return tijeras;
  }
}

function cal_resultado(opcion_jugador, opcion_pc) {
  if (opcion_jugador === opcion_pc) {
    return empate;
  } else if (opcion_jugador === piedra) {
    if (opcion_pc === papel) return perder;
    if (opcion_pc === tijeras) return ganar;
  } else if (opcion_jugador === papel) {
    if (opcion_pc === tijeras) return perder;
    if (opcion_pc === piedra) return ganar;
  } else if (opcion_jugador === tijeras) {
    if (opcion_pc === piedra) return perder;
    if (opcion_pc === papel) return ganar;
  }
}

for (i = 0; i <= cantidadJugadas; );
{
  var cantidadJugadas = parseInt(
    prompt(
      "-----------------BIENVENIDOS AL JUEGO DEL CACHIPÚN-----------------\n ¿Cuantas veces desea jugar?: "
    )
  );

  // se realiza una funcion para el resultado de la partida

  function juego(opcion_jugador) {
    var opcion_pc = resultado_pc();
    var resultado = cal_resultado(opcion_jugador, opcion_pc);

    switch (resultado) {
      case empate:
        alert(`EMPATE \n tu has escogido: ${opcion_jugador}  
      \n La pc escogio: ${opcion_pc}.`);
        contador_empate++;
        i++;

        break;
      case ganar:
        alert(`GANASTE \n tu has escogido: ${opcion_jugador}  
      \n La pc escogio: ${opcion_pc}.`);
        contador_usuario++;
        i++;

        break;
      case perder:
        alert(`PERDISTE \n tu has escogido: ${opcion_jugador}  
      \n La pc escogio: ${opcion_pc}.`);
        contador_pc++;
        i++;
        break;
    }
    if (cantidadJugadas <= i) {
      alert(
        `has jugado decidido jugar: ${cantidadJugadas} \n has ganado: ${contador_usuario} \n has perdido: ${contador_pc} \n has jugado: ${i} `
      );
      $(function () {
        $("#botones").toggle(function () {
          $("#piedra, #papel, #tijeras").hide();
        });
      });
    }
  }
}
