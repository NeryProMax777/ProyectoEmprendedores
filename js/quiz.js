let vidas = 3;
let actual = 0;

const id = localStorage.getItem("materia");
const materia = buscarMateria(id);
const preguntas = materia.preguntas;

function mostrarPregunta() {
  const p = preguntas[actual];

  document.getElementById("pregunta").innerText = p.pregunta;

  const cont = document.getElementById("opciones");
  cont.innerHTML = "";

  p.opciones.forEach((op, i) => {
    cont.innerHTML += `
      <button onclick="responder(${i})">${op}</button>
    `;
  });
}

function responder(i) {
  if (i === preguntas[actual].correcta) {
    actual++;
    if (actual >= preguntas.length) {
      alert("¡Ganaste!");
      window.location.href = "dashboard.html";
    } else {
      mostrarPregunta();
    }
  } else {
    vidas--;
    document.getElementById("vidas").innerText = vidas;

    if (vidas <= 0) {
      alert("Perdiste, vuelve a estudiar");
      window.location.href = "materia.html";
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