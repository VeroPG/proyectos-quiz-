//Array formado por objetos, cada objeto corresponde a cada pregunta, incluyendo: la pregunta, las respuestas y la respuesta correcta.

const data = [
  {
    question: "Termina la frase: 'Nadie espera___!'",
    choice1: " al FBI",
    choice2: "la Inquisición española",
    choice3: "lo inesperado",
    choice4: "Loro muerto",
    correct: "la Inquisición española",
  },
  {
    question:
      "¿Que miembro de los Monty Phyton fue el responsable de las secuencias de animación?",
    choice1: "Terry Jones",
    choice2: "Erice Idle",
    choice3: "John Cleese",
    choice4: "Terry Gilliam",
    correct: "Terry Gilliam",
  },
  {
    question:
      "¿Quién creó HandMade Films para garantizar que se hiciera Life Of Brian de Monty Python?",
    choice1: "George Harrison", //
    choice2: "John Lennon",
    choice3: "Paul McCartney",
    choice4: "Ringo Starr",
    correct: "George Harrison",
  },
  {
    question:
      "¿Que película de los Monty Python es una versión satírica de las aventuras del Rey Arturo",
    choice1: "El significado de la vida",
    choice2: "La vida de Brian",
    choice3: "Los caballeros de la mesa cuadrada",
    choice4: "Se armó la gorda",
    correct: "Los caballeros de la mesa cuadrada",
  },
  {
    question: "¿A que velocidad vuela una golondrina?",
    choice1: "2 m/s",
    choice2: "4 m/s",
    choice3: "10 km/s",
    choice4: "Africana o Europea?",
    correct: "Africana o Europea?",
  },
  {
    question:
      "¿Que personaje de Los caballeros de la mesa Cuadrada declaraba que solo tenía un rasguño?",
    choice1: "El conejo asesino de Caerbannog",
    choice2: "El caballero negro",
    choice3: "El Rey Arturo",
    choice4: "Sir Robin",
    correct: "El caballero negro",
  },
  {
    question:
      "¿Como se llamaba el musical de Broadway basado en la película Los caballeros de la mesa cuadrada?",
    choice1: "Ham-a-lot",
    choice2: "Holy Grail: El Musical",
    choice3: "Spamalot",
    choice4: "Spam n Ham",
    correct: "Spamalot",
  },
  {
    question:
      "El protagonista de La vida de Brian decide entrar en un grupo de resistencia contra los romanos, ¿en cuál?",
    choice1: "Frente Judaico Popular",
    choice2: "Frente del Pueblo Judaico",
    choice3: "Frente Popular de Judea",
    choice4: "Unión Popular de Judea",
    correct: "Frente Popular de Judea", //brian ok
  },
  {
    question:
      "Que dos miembros de los Monty Python protagonizaron el sketch del loro muerto?",
    choice1: "John Cleese y Eric Idle",
    choice2: "Eric Idle y Terry Jones",
    choice3: "Michael Palin y Graham Chapman",
    choice4: "John Cleese y Michael Palin",
    correct: "John Cleese y Michael Palin", //correct
  },
  {
    question:
      "¿Cuál es el disfraz requerido para que las mujeres asistan a las lapidaciones en La vida de Brian?",
    choice1: "Gafas",
    choice2: "Casco",
    choice3: "Una barba",
    choice4: "Un loro en el hombro",
    correct: "Una barba", //correct
  },
];

//  Creación dinámica del formulario mediante modificación del DOM
let lista = "<section>";
let submitButton = "<submit>";

for (let i = 0; i < data.length; i++) {
  lista += `<article>
  <label for="${data[i].question}">${data[i].question}</label>
  <div class=answers-div>
            <div><input class="answer" type="radio" name="${data[i].question}" value="${data[i].choice1}" required>${data[i].choice1} </div>
            <div><input class="answer" type="radio" name="${data[i].question}" value="${data[i].choice2}" required> ${data[i].choice2}</div>
            <div><input class="answer" type="radio" name="${data[i].question}" value="${data[i].choice3}" required> ${data[i].choice3}</div>
            <div><input class="answer" type="radio" name="${data[i].question}" value="${data[i].choice4}" required> ${data[i].choice4}</div>


</div>
            </article>`;
}
lista += "</section>";
lista += "<p><button id='submitBtn' type='submit'>Envíar</button></p>";
document.getElementById("form").innerHTML = lista;

////////////

document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Evitar el comportamiento predeterminado del botón de envío

    const puntuacionRadio = validarRespuestasRadio();
    mostrarPuntuacion(puntuacionRadio);
  });

function mostrarPuntuacion(puntuacion) {
  const mensaje = document.getElementById("mensajePuntuacion");
  mensaje.innerHTML = "Puntuación con radio inputs: " + puntuacion;
}

function validarRespuestasRadio() {
  let puntuacion = 0;
  const preguntas = document.querySelectorAll(".answers-div");
  let acertadasArray = [];
  let erroneasArray = [];

  preguntas.forEach(function (pregunta, index) {
    const respuestaUsuario = pregunta.querySelector(
      'input[type="radio"]:checked'
    );
    if (respuestaUsuario) {
      if (respuestaUsuario.value === data[index].correct) {
        puntuacion++;
        acertadasArray.push(pregunta);
      } else {
        erroneasArray.push(pregunta);
      }
    }
  });

  acertadasArray.forEach(function (pregunta) {
    pregunta.style.color = "green"; // Marca respuesta acertada en verde
  });

  erroneasArray.forEach(function (pregunta) {
    pregunta.style.color = "red"; // Marca respuesta errónea en rojo
  });

  return puntuacion;
}

//const puntuacionRadio = validarRespuestasRadio();
