//Comentario para guardar en Git hub
const data = {
  fcfm: [

    // ===== ARITMÉTICA =====
    {
      id: "aritmetica_fcfm",
      nombre: "Aritmética",
      temas: [

        {
  id: "operaciones_basicas",
  titulo: "Operaciones básicas y ley de signos",
  tiempo: 180,
  contenido: `
Operaciones básicas:
Suma, resta, multiplicación y división.

Ley de signos:
+ × + = +
- × - = +
+ × - = -
- × + = -

Ejemplos:
(-3)(-2) = 6
(-5)(2) = -10

Jerarquía de operaciones:
1. Paréntesis
2. Potencias
3. Multiplicación y división
4. Suma y resta

Ejemplo:
2 + 3 × 4 = 14
`,
  preguntas: [

    { pregunta: "¿Cuánto es (-4)(-2)?", opciones: ["-8", "8", "6"], correcta: 1 },
    { pregunta: "¿Cuánto es (-3)(5)?", opciones: ["15", "-15", "8"], correcta: 1 },
    { pregunta: "¿Cuánto es 6 ÷ 2?", opciones: ["3", "2", "4"], correcta: 0 },
    { pregunta: "¿Cuánto es 2 + 3 × 4?", opciones: ["20", "14", "24"], correcta: 1 },
    { pregunta: "¿Cuánto es (2 + 3) × 4?", opciones: ["20", "14", "10"], correcta: 0 },
    { pregunta: "¿Cuánto es -10 + 5?", opciones: ["-5", "5", "15"], correcta: 0 },
    { pregunta: "¿Cuánto es -6 ÷ 2?", opciones: ["-3", "3", "4"], correcta: 0 },
    { pregunta: "¿Cuánto es (-2)^2?", opciones: ["4", "-4", "2"], correcta: 0 },
    { pregunta: "¿Cuánto es 8 - 3 × 2?", opciones: ["10", "2", "14"], correcta: 1 },
    { pregunta: "¿Cuánto es 5 × 0?", opciones: ["0", "5", "1"], correcta: 0 }

  ]
},

        {
          id: "fracciones_porcentajes",
          titulo: "Fracciones y porcentajes",
          tiempo: 180,
          contenido: `
Las fracciones representan partes de un todo.

Ejemplo:
1/2 = 0.5 = 50%

Porcentaje:
Para sacar porcentaje:
(Parte / Total) × 100

Ejemplo:
20% de 50 = 10

Muy importante en examen:
Regla de 3
          `,
          preguntas: [
            {
              pregunta: "¿Cuánto es el 50% de 20?",
              opciones: ["5", "10", "15"],
              correcta: 1
            }
          ]
        },

        {
  id: "mcm_mcd",
  titulo: "Mínimo Común Múltiplo y Máximo Común Divisor",
  tiempo: 180,
  contenido: `
MÍNIMO COMÚN MÚLTIPLO (MCM)

El MCM es el número más pequeño que es múltiplo de dos o más números.

Ejemplo:
Múltiplos de 4: 4, 8, 12, 16...
Múltiplos de 6: 6, 12, 18...

MCM de 4 y 6 = 12


MÁXIMO COMÚN DIVISOR (MCD)

El MCD es el número más grande que divide exactamente a dos o más números.

Ejemplo:
Divisores de 8: 1, 2, 4, 8  
Divisores de 12: 1, 2, 3, 4, 6, 12  

MCD de 8 y 12 = 4


MÉTODO CON FACTORES PRIMOS

Ejemplo con 12 y 18:

12 = 2 × 2 × 3  
18 = 2 × 3 × 3  

MCM = 2 × 2 × 3 × 3 = 36  
MCD = 2 × 3 = 6


USOS IMPORTANTES

MCM:
- Problemas de tiempo
- Eventos que se repiten

MCD:
- Simplificar fracciones
- Dividir en partes iguales
`,
  preguntas: [

    { pregunta: "¿Cuál es el MCM de 4 y 6?", opciones: ["12", "24", "6"], correcta: 0 },
    { pregunta: "¿Cuál es el MCD de 8 y 12?", opciones: ["2", "4", "6"], correcta: 1 },
    { pregunta: "¿Cuál es el MCM de 3 y 5?", opciones: ["15", "8", "10"], correcta: 0 },
    { pregunta: "¿Cuál es el MCD de 9 y 6?", opciones: ["3", "6", "9"], correcta: 0 },
    { pregunta: "¿Cuál es el MCM de 2 y 7?", opciones: ["14", "9", "7"], correcta: 0 },
    { pregunta: "¿Cuál es el MCD de 10 y 5?", opciones: ["5", "10", "2"], correcta: 0 },
    { pregunta: "¿Cuál es el MCM de 8 y 12?", opciones: ["24", "12", "48"], correcta: 0 },
    { pregunta: "¿Cuál es el MCD de 15 y 20?", opciones: ["5", "10", "15"], correcta: 0 },
    { pregunta: "¿Para qué se usa el MCM?", opciones: ["Eventos que coinciden", "Dividir números", "Sumar fracciones"], correcta: 0 },
    { pregunta: "¿Para qué se usa el MCD?", opciones: ["Simplificar", "Multiplicar", "Elevar"], correcta: 0 }

  ]
}

      ]
    },

    // ===== PROBABILIDAD Y ESTADÍSTICA =====
    {
      id: "probabilidad_fcfm",
      nombre: "Probabilidad y Estadística",
      temas: [

        {
          id: "media_moda_mediana",
          titulo: "Media, moda y mediana",
          tiempo: 180,
          contenido: `
Media: promedio de los datos  
Moda: número que más se repite  
Mediana: valor central  

Ejemplo:
2, 2, 3, 5, 8  

Media = 4  
Moda = 2  
Mediana = 3
          `,
          preguntas: [
            {
              pregunta: "¿Cuál es la moda de 1,2,2,3?",
              opciones: ["1", "2", "3"],
              correcta: 1
            }
          ]
        },

        {
          id: "probabilidad_basica",
          titulo: "Probabilidad básica",
          tiempo: 180,
          contenido: `
Probabilidad = casos favorables / casos posibles

Ejemplo:
Dado (1-6)

Probabilidad de sacar 3:
1/6

Siempre es un valor entre 0 y 1
          `,
          preguntas: [
            {
              pregunta: "Probabilidad de sacar un 6 en un dado:",
              opciones: ["1/3", "1/6", "1/2"],
              correcta: 1
            }
          ]
        },

        {
          id: "conteo_combinaciones",
          titulo: "Conteo y combinaciones",
          tiempo: 200,
          contenido: `
Se usa para saber cuántas formas hay de hacer algo.

Ejemplo:
3 camisas y 2 pantalones

Total combinaciones:
3 × 2 = 6

También incluye permutaciones.
          `,
          preguntas: [
            {
              pregunta: "Si tienes 2 opciones y luego 3, ¿cuántas combinaciones hay?",
              opciones: ["5", "6", "3"],
              correcta: 1
            }
          ]
        }

      ]
    }

  ]
};