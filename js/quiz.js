let vidas = 3;
let actual = 0;

const id = localStorage.getItem("materia");
const materia = buscarMateria(id);
const preguntas = materia ? materia.preguntas : [];

function mostrarPregunta() {
  if (!preguntas.length) {
    document.getElementById("pregunta").innerText = "No hay preguntas disponibles.";
    document.getElementById("opciones").innerHTML = "";
    return;
  }

  const p = preguntas[actual];

  document.getElementById("pregunta").innerText = p.pregunta;
  document.getElementById("contadorPregunta").innerText = `${actual + 1} / ${preguntas.length}`;

  const cont = document.getElementById("opciones");
  cont.innerHTML = "";

  p.opciones.forEach((op, i) => {
    cont.innerHTML += `
      <button onclick="responder(${i})">${op}</button>
    `;
  });
}

function responder(i) {
  const estadoJugador = document.getElementById("estadoJugador");

  if (i === preguntas[actual].correcta) {
    estadoJugador.innerText = "¡Correcto! El jugador sigue avanzando.";
    actual++;

    if (actual >= preguntas.length) {
      setTimeout(() => {
        alert("¡Ganaste! Completaste este bloque.");
        window.location.href = "dashboard.html";
      }, 300);
    } else {
      setTimeout(() => {
        mostrarPregunta();
      }, 300);
    }
  } else {
    vidas--;
    document.getElementById("vidas").innerText = vidas;
    estadoJugador.innerText = "Fallaste una pregunta. El jugador perdió una vida.";

    if (vidas <= 0) {
      setTimeout(() => {
        alert("Perdiste tus 3 vidas. Debes volver a estudiar.");
        window.location.href = "materia.html";
      }, 300);
    }
  }
}

function buscarMateria(id) {
  for (let f in data) {
    const m = data[f].find(x => x.id === id);
    if (m) return m;
  }
}

mostrarPregunta();