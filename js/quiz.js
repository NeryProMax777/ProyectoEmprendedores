let vidas = 3;
let actual = 0;

const idMateria = localStorage.getItem("materia");
const temaIndex = Number(localStorage.getItem("temaActual"));

const materia = buscarMateria(idMateria);
const tema = materia && materia.temas ? materia.temas[temaIndex] : null;
const preguntas = tema && tema.preguntas ? tema.preguntas : [];

const personaje = document.getElementById("personaje");
const estadoJugador = document.getElementById("estadoJugador");

const progresoQuiz = JSON.parse(localStorage.getItem("progresoQuizTema")) || {};
const claveTema = `${idMateria}_tema_${temaIndex}`;

if (progresoQuiz[claveTema]) {
  actual = progresoQuiz[claveTema].preguntaActual || 0;
  vidas = progresoQuiz[claveTema].vidasRestantes || 3;
  document.getElementById("vidas").innerText = vidas;
}

function guardarProgresoQuiz() {
  progresoQuiz[claveTema] = {
    preguntaActual: actual,
    vidasRestantes: vidas,
    completado: false
  };

  localStorage.setItem("progresoQuizTema", JSON.stringify(progresoQuiz));
}

function marcarQuizCompletado() {
  progresoQuiz[claveTema] = {
    preguntaActual: 0,
    vidasRestantes: 3,
    completado: true
  };

  localStorage.setItem("progresoQuizTema", JSON.stringify(progresoQuiz));

  const progresoMateria = JSON.parse(localStorage.getItem("progresoMateria")) || {};

  if (!progresoMateria[idMateria]) {
    progresoMateria[idMateria] = {
      temaActual: null,
      tiempoRestante: 0,
      temasEstudiados: []
    };
  }

  if (!progresoMateria[idMateria].temasEstudiados.includes(temaIndex)) {
    progresoMateria[idMateria].temasEstudiados.push(temaIndex);
  }

  localStorage.setItem("progresoMateria", JSON.stringify(progresoMateria));
}

function mostrarPregunta() {
  if (!tema) {
    document.getElementById("pregunta").innerText = "No se encontró el tema seleccionado.";
    document.getElementById("opciones").innerHTML = "";
    return;
  }

  if (!preguntas.length) {
    document.getElementById("pregunta").innerText = "No hay preguntas disponibles para este tema.";
    document.getElementById("opciones").innerHTML = "";
    return;
  }

  if (actual >= preguntas.length) {
    actual = 0;
  }

  const p = preguntas[actual];

  document.getElementById("pregunta").innerText = p.pregunta;
  document.getElementById("contadorPregunta").innerText = `${actual + 1} / ${preguntas.length}`;
  document.getElementById("estadoJugador").innerText = `Tema actual: ${tema.titulo}`;

  const cont = document.getElementById("opciones");
  cont.innerHTML = "";

  p.opciones.forEach((op, i) => {
    cont.innerHTML += `
      <button onclick="responder(${i})">${op}</button>
    `;
  });
}

function animarPersonaje(tipo) {
  personaje.classList.remove("correcto", "error");
  void personaje.offsetWidth;

  if (tipo === "correcto") {
    personaje.textContent = "🏃";
    personaje.classList.add("correcto");
  } else {
    personaje.textContent = "💥";
    personaje.classList.add("error");

    setTimeout(() => {
      personaje.textContent = "🏃";
    }, 500);
  }
}

function responder(i) {
  if (i === preguntas[actual].correcta) {
    estadoJugador.innerText = "¡Correcto! El jugador sigue avanzando.";
    animarPersonaje("correcto");
    actual++;
    guardarProgresoQuiz();

    if (actual >= preguntas.length) {
      marcarQuizCompletado();

      setTimeout(() => {
        alert(`¡Ganaste! Completaste el quiz de ${tema.titulo}.`);
        window.location.href = "materia.html";
      }, 400);
    } else {
      setTimeout(() => {
        mostrarPregunta();
      }, 350);
    }
  } else {
    vidas--;
    document.getElementById("vidas").innerText = vidas;
    estadoJugador.innerText = "Fallaste una pregunta. El jugador perdió una vida.";
    animarPersonaje("error");
    guardarProgresoQuiz();

    if (vidas <= 0) {
      progresoQuiz[claveTema] = {
        preguntaActual: 0,
        vidasRestantes: 3,
        completado: false
      };

      localStorage.setItem("progresoQuizTema", JSON.stringify(progresoQuiz));

      setTimeout(() => {
        alert("Perdiste tus 3 vidas. Debes volver a estudiar este tema.");
        window.location.href = "materia.html";
      }, 400);
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