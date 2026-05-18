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
  tiempo: 200,
  contenido: {
    informacion: `
Las fracciones representan partes de un todo.

Ejemplo:
1/2 = la mitad
3/4 = tres partes de cuatro

El porcentaje significa “de cada 100”.
50% = 50/100 = 0.5
25% = 25/100 = 0.25
    `,
    ejemplo: `
Ejemplo 1:
¿Cuánto es el 20% de 50?

20% = 20/100 = 0.2
0.2 × 50 = 10

Respuesta: 10

Ejemplo 2:
1/2 + 1/4

Convertimos a mismo denominador:
1/2 = 2/4

Entonces:
2/4 + 1/4 = 3/4
    `,
   video: "https://youtu.be/Aq5WXmQQooo?si=o0gtI1IRf0YVEJue"
  },
  preguntas: [
    { pregunta: "¿Cuánto es 1/2 + 1/2?", opciones: ["1", "2", "1/2"], correcta: 0 },
    { pregunta: "¿Cuál es el equivalente de 50%?", opciones: ["0.5", "5", "50"], correcta: 0 }
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
  tiempo: 200,
  contenido: `
MEDIA (PROMEDIO)

La media es el promedio de un conjunto de datos.

Fórmula:
Media = suma de los datos / cantidad de datos

Ejemplo:
2, 4, 6  
Media = (2 + 4 + 6) / 3 = 4


MODA

La moda es el número que más se repite.

Ejemplo:
1, 2, 2, 3  
Moda = 2


MEDIANA

La mediana es el valor central cuando los datos están ordenados.

Ejemplo:
1, 3, 5  
Mediana = 3

Si hay cantidad par:
1, 2, 3, 4  
Mediana = (2 + 3) / 2 = 2.5


IMPORTANTE:
- Ordena los datos antes de encontrar la mediana
- Puede haber más de una moda
`,
  preguntas: [

    { pregunta: "¿Cuál es la media de 2, 4, 6?", opciones: ["4", "6", "3"], correcta: 0 },
    { pregunta: "¿Cuál es la moda de 1, 2, 2, 3?", opciones: ["1", "2", "3"], correcta: 1 },
    { pregunta: "¿Cuál es la mediana de 1, 3, 5?", opciones: ["3", "1", "5"], correcta: 0 },
    { pregunta: "¿Cuál es la media de 3, 3, 3?", opciones: ["3", "6", "1"], correcta: 0 },
    { pregunta: "¿Cuál es la mediana de 2, 4, 6, 8?", opciones: ["5", "4", "6"], correcta: 0 },
    { pregunta: "¿Cuál es la moda de 5, 5, 5, 2?", opciones: ["5", "2", "No hay"], correcta: 0 },
    { pregunta: "¿Cuál es la media de 10, 20?", opciones: ["15", "30", "10"], correcta: 0 },
    { pregunta: "¿Qué es la moda?", opciones: ["El número que más se repite", "El promedio", "El mayor número"], correcta: 0 },
    { pregunta: "¿Qué es la mediana?", opciones: ["El valor central", "El promedio", "La suma"], correcta: 0 },
    { pregunta: "¿Qué debes hacer antes de sacar la mediana?", opciones: ["Ordenar datos", "Multiplicar", "Restar"], correcta: 0 }

  ]
},

        {
  id: "probabilidad_basica",
  titulo: "Probabilidad básica",
  tiempo: 200,
  contenido: `
PROBABILIDAD

La probabilidad mide qué tan posible es que ocurra un evento.

FÓRMULA:

Probabilidad =
Casos favorables / Casos posibles

Ejemplo:
En un dado hay 6 resultados posibles.

Probabilidad de sacar un 3:
1/6


TIPOS DE EVENTOS

Evento seguro:
Siempre ocurre.

Evento imposible:
Nunca ocurre.

Evento probable:
Puede ocurrir.


PROBABILIDAD EN PORCENTAJE

Se puede convertir a porcentaje.

Ejemplo:
1/2 = 0.5 = 50%


ESPACIO MUESTRAL

Es el conjunto de todos los resultados posibles.

Ejemplo:
Lanzar una moneda:
{cara, cruz}


IMPORTANTE:
La probabilidad siempre está entre 0 y 1.
`,
  preguntas: [

    { pregunta: "¿Cuál es la probabilidad de sacar un 6 en un dado?", opciones: ["1/6", "1/2", "6/1"], correcta: 0 },
    { pregunta: "¿Qué representa el espacio muestral?", opciones: ["Todos los resultados posibles", "Solo resultados correctos", "Los errores"], correcta: 0 },
    { pregunta: "¿Cuál es la probabilidad de sacar cara en una moneda?", opciones: ["1/2", "1/6", "2"], correcta: 0 },
    { pregunta: "¿Qué valor puede tener una probabilidad?", opciones: ["Entre 0 y 1", "Entre 1 y 10", "Negativo"], correcta: 0 },
    { pregunta: "¿Qué es un evento imposible?", opciones: ["Nunca ocurre", "Siempre ocurre", "Ocurre dos veces"], correcta: 0 },
    { pregunta: "¿Qué es un evento seguro?", opciones: ["Siempre ocurre", "Nunca ocurre", "Tiene 50%"], correcta: 0 },
    { pregunta: "¿Cuál es el porcentaje equivalente a 1/2?", opciones: ["50%", "25%", "75%"], correcta: 0 },
    { pregunta: "¿Cuántos resultados posibles tiene un dado?", opciones: ["6", "3", "12"], correcta: 0 },
    { pregunta: "¿Cuál es la probabilidad de sacar un número par en un dado?", opciones: ["1/2", "1/6", "1/3"], correcta: 0 },
    { pregunta: "¿Qué mide la probabilidad?", opciones: ["Qué tan posible es un evento", "La velocidad", "El peso"], correcta: 0 }

  ]
},

        {
  id: "conteo_combinaciones",
  titulo: "Conteo y combinaciones",
  tiempo: 220,
  contenido: `
PRINCIPIO DE CONTEO

Se usa para calcular cuántas formas hay de realizar algo.

Ejemplo:
3 camisas y 2 pantalones

3 × 2 = 6 combinaciones


COMBINACIONES

Se forman grupos SIN importar el orden.

Ejemplo:
Elegir 2 personas de un grupo.


PERMUTACIONES

El orden SÍ importa.

Ejemplo:
1°, 2° y 3° lugar en una carrera.


DIAGRAMA DE ÁRBOL

Ayuda a representar posibilidades.

Ejemplo:
Cara o cruz
Rojo o azul


IMPORTANTE:
- Multiplica posibilidades cuando son eventos seguidos.
- Las combinaciones ayudan a contar resultados posibles.
`,
  preguntas: [

    { pregunta: "Si tienes 2 camisas y 3 pantalones, ¿cuántas combinaciones hay?", opciones: ["6", "5", "3"], correcta: 0 },
    { pregunta: "¿Qué se usa para representar posibilidades?", opciones: ["Diagrama de árbol", "Tabla periódica", "Plano cartesiano"], correcta: 0 },
    { pregunta: "¿En qué importa el orden?", opciones: ["Permutaciones", "Combinaciones", "Fracciones"], correcta: 0 },
    { pregunta: "¿Qué operación se usa normalmente en conteo?", opciones: ["Multiplicación", "Resta", "División"], correcta: 0 },
    { pregunta: "¿Qué son combinaciones?", opciones: ["Grupos donde no importa el orden", "Operaciones", "Porcentajes"], correcta: 0 },
    { pregunta: "¿Cuántas combinaciones hay con 4 playeras y 2 pantalones?", opciones: ["8", "6", "4"], correcta: 0 },
    { pregunta: "¿Qué ayudan a calcular las permutaciones?", opciones: ["Ordenamientos", "Promedios", "Probabilidades imposibles"], correcta: 0 },
    { pregunta: "¿Qué se hace cuando hay eventos seguidos?", opciones: ["Multiplicar posibilidades", "Restar posibilidades", "Dividir posibilidades"], correcta: 0 },
    { pregunta: "¿Qué herramienta organiza resultados posibles?", opciones: ["Diagrama de árbol", "Calculadora", "Regla"], correcta: 0 },
    { pregunta: "Si hay 2 opciones y luego 5, ¿cuántos resultados hay?", opciones: ["10", "7", "5"], correcta: 0 }

  ]
}

      ]
    }

  ],
  fime: [
    // ===== ARITMÉTICA =====
  {
    id: "aritmetica_fime",
    nombre: "Aritmética",
    temas: [
      
        {
  id: "operaciones_basicas_fime",
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
  id: "fracciones_porcentajes_fime",
  titulo: "Fracciones y porcentajes",
  tiempo: 200,
  contenido: `
FRACCIONES

Una fracción representa una parte de un todo.

Ejemplo:
1/2 = la mitad  
3/4 = tres partes de cuatro  

OPERACIONES CON FRACCIONES

Suma y resta:
Se necesita el mismo denominador.

Ejemplo:
1/4 + 1/4 = 2/4 = 1/2

Multiplicación:
Se multiplica numerador con numerador y denominador con denominador.

Ejemplo:
1/2 × 3/4 = 3/8

División:
Se multiplica por el inverso.

Ejemplo:
1/2 ÷ 3/4 = 1/2 × 4/3 = 4/6 = 2/3


PORCENTAJES

Porcentaje significa "de cada 100".

Ejemplo:
50% = 50/100 = 0.5  
25% = 1/4  

FÓRMULA:
(Parte / Total) × 100

Ejemplo:
¿Cuánto es el 20% de 50?
(20/100) × 50 = 10


REGLA DE 3

Se usa cuando hay proporciones.

Ejemplo:
Si 2 cuadernos cuestan $10  
¿Cuánto cuestan 4?

2 → 10  
4 → x  

x = (4 × 10) / 2 = 20
`,
  preguntas: [

    { pregunta: "¿Cuánto es 1/2 + 1/2?", opciones: ["1", "2", "1/2"], correcta: 0 },
    { pregunta: "¿Cuánto es 1/2 × 3/4?", opciones: ["3/8", "3/6", "1/2"], correcta: 0 },
    { pregunta: "¿Cuánto es 1/2 ÷ 3/4?", opciones: ["2/3", "3/2", "1/6"], correcta: 0 },
    { pregunta: "¿Cuál es el equivalente de 50%?", opciones: ["0.5", "5", "50"], correcta: 0 },
    { pregunta: "¿Cuánto es el 25% de 100?", opciones: ["25", "50", "75"], correcta: 0 },
    { pregunta: "¿Cuánto es el 10% de 200?", opciones: ["10", "20", "30"], correcta: 1 },
    { pregunta: "¿Cuánto es 3/4 en decimal?", opciones: ["0.75", "0.5", "1.25"], correcta: 0 },
    { pregunta: "¿Cuánto es 20% de 50?", opciones: ["5", "10", "20"], correcta: 1 },
    { pregunta: "Si 2 cuadernos cuestan 10, ¿cuánto cuestan 4?", opciones: ["20", "15", "10"], correcta: 0 },
    { pregunta: "¿Cuál es la mitad de 80?", opciones: ["20", "40", "60"], correcta: 1 }

  ]
},

        {
  id: "mcm_mcd_fime",
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

  {
  id: "fisica_fime",
  nombre: "Física",
  temas: [
    {
      id: "mecanica_fime",
      titulo: "Mecánica",
      tiempo: 300,
      contenido: `
La mecánica es la rama de la física que estudia el movimiento de los cuerpos y las fuerzas que actúan sobre ellos.

VELOCIDAD

La velocidad indica qué distancia recorre un cuerpo en cierto tiempo.

Fórmula:
v = d / t

Ejemplo:
Si un automóvil recorre 100 km en 2 horas:
v = 100 / 2 = 50 km/h


ACELERACIÓN

La aceleración es el cambio de velocidad de un cuerpo en un tiempo determinado.

Fórmula:
a = (vf - vi) / t

Si un objeto aumenta su velocidad, tiene aceleración positiva.
Si disminuye su velocidad, tiene aceleración negativa.


FUERZA

La fuerza es una acción capaz de cambiar el movimiento o la forma de un objeto.

Segunda Ley de Newton:
F = m × a

Donde:
F = fuerza
m = masa
a = aceleración

La unidad de fuerza es el Newton (N).


MOVIMIENTO CIRCULAR

El movimiento circular ocurre cuando un objeto se mueve alrededor de un punto.

La fuerza centrípeta es la fuerza que apunta hacia el centro y mantiene al objeto girando.


CANTIDAD DE MOVIMIENTO

La cantidad de movimiento relaciona la masa y la velocidad de un cuerpo.

Fórmula:
p = m × v

Mientras mayor sea la masa o la velocidad, mayor será la cantidad de movimiento.


CHOQUES

Un choque ocurre cuando dos cuerpos interactúan durante poco tiempo.

Tipos:
- Choque elástico: se conserva la energía cinética.
- Choque inelástico: parte de la energía se transforma en calor, sonido o deformación.
      `,
      preguntas: [
        { pregunta: "¿Qué estudia la mecánica?", opciones: ["Movimiento y fuerzas", "La luz", "La escritura"], correcta: 0 },
        { pregunta: "¿Cuál es la fórmula de la velocidad?", opciones: ["v = d / t", "F = m × a", "p = m × v"], correcta: 0 },
        { pregunta: "¿Qué es la aceleración?", opciones: ["Cambio de velocidad", "Distancia total", "Cantidad de masa"], correcta: 0 },
        { pregunta: "¿Cuál es la fórmula de la fuerza?", opciones: ["F = m × a", "v = d / t", "E = m × c"], correcta: 0 },
        { pregunta: "¿Cuál es la unidad de fuerza?", opciones: ["Newton", "Metro", "Segundo"], correcta: 0 },
        { pregunta: "¿Qué fuerza mantiene un objeto girando?", opciones: ["Fuerza centrípeta", "Fuerza eléctrica", "Fuerza normal"], correcta: 0 },
        { pregunta: "¿Qué representa p = m × v?", opciones: ["Cantidad de movimiento", "Velocidad", "Energía potencial"], correcta: 0 },
        { pregunta: "¿Qué ocurre en un choque?", opciones: ["Dos cuerpos interactúan", "Un cuerpo desaparece", "No hay fuerza"], correcta: 0 },
        { pregunta: "¿Qué choque conserva la energía cinética?", opciones: ["Choque elástico", "Choque inelástico", "Choque térmico"], correcta: 0 },
        { pregunta: "Si aumenta la masa o la velocidad, ¿qué pasa con la cantidad de movimiento?", opciones: ["Aumenta", "Disminuye", "No cambia"], correcta: 0 }
      ]
    },

    {
      id: "movimiento_energia_fime",
      titulo: "Movimiento circular y energía",
      tiempo: 300,
      contenido: `
El movimiento circular ocurre cuando un objeto se desplaza siguiendo una trayectoria curva alrededor de un centro.

MOVIMIENTO CIRCULAR UNIFORME

En el movimiento circular uniforme, el objeto mantiene rapidez constante, pero su dirección cambia todo el tiempo.

Ejemplo:
- Una rueda girando
- Un ventilador
- Un planeta alrededor del Sol


FUERZA CENTRÍPETA

Es la fuerza que apunta hacia el centro del círculo y permite que el objeto siga girando.

Si no existiera esta fuerza, el objeto seguiría en línea recta.


VELOCIDAD ANGULAR

Indica qué tan rápido gira un objeto.

Se relaciona con el ángulo recorrido en cierto tiempo.


ENERGÍA

La energía es la capacidad de realizar trabajo o producir cambios.

ENERGÍA CINÉTICA

Es la energía que tiene un cuerpo por estar en movimiento.

Fórmula:
Ec = (m × v²) / 2

Donde:
Ec = energía cinética
m = masa
v = velocidad


ENERGÍA POTENCIAL

Es la energía que tiene un cuerpo por su posición o altura.

Ejemplo:
Una pelota elevada tiene energía potencial porque puede caer.


CONSERVACIÓN DE LA ENERGÍA

La energía no se crea ni se destruye, solo se transforma.

Ejemplo:
Cuando una pelota cae, su energía potencial se transforma en energía cinética.
      `,
      preguntas: [
        { pregunta: "¿Qué es el movimiento circular?", opciones: ["Movimiento alrededor de un centro", "Movimiento en línea recta", "Movimiento sin dirección"], correcta: 0 },
        { pregunta: "¿Qué mantiene un objeto girando?", opciones: ["Fuerza centrípeta", "Fuerza de fricción", "Fuerza eléctrica"], correcta: 0 },
        { pregunta: "¿Hacia dónde apunta la fuerza centrípeta?", opciones: ["Al centro", "Hacia afuera", "Hacia arriba"], correcta: 0 },
        { pregunta: "¿Qué es la velocidad angular?", opciones: ["Qué tan rápido gira un objeto", "Qué tan pesado es", "Qué tan alto está"], correcta: 0 },
        { pregunta: "¿Qué es la energía cinética?", opciones: ["Energía por movimiento", "Energía por altura", "Energía por temperatura"], correcta: 0 },
        { pregunta: "¿Cuál es la fórmula de energía cinética?", opciones: ["Ec = (m × v²) / 2", "F = m × a", "v = d / t"], correcta: 0 },
        { pregunta: "¿Qué es la energía potencial?", opciones: ["Energía por posición o altura", "Energía por velocidad", "Energía por sonido"], correcta: 0 },
        { pregunta: "¿Qué dice la conservación de la energía?", opciones: ["La energía se transforma", "La energía desaparece", "La energía se destruye"], correcta: 0 },
        { pregunta: "Cuando una pelota cae, ¿qué ocurre?", opciones: ["La energía potencial se transforma en cinética", "La energía desaparece", "No hay energía"], correcta: 0 },
        { pregunta: "¿Cuál es un ejemplo de movimiento circular?", opciones: ["Una rueda girando", "Un libro quieto", "Una regla sobre la mesa"], correcta: 0 }
      ]
    },

    {
      id: "optica_ondas_electromagnetismo_fime",
      titulo: "Óptica, ondas y electromagnetismo",
      tiempo: 320,
      contenido: `
Este tema estudia fenómenos relacionados con la luz, las ondas, la electricidad y el magnetismo.

ONDAS

Una onda es una perturbación que transmite energía de un lugar a otro.

Ejemplos:
- Sonido
- Luz
- Olas en el agua


PARTES DE UNA ONDA

Cresta:
Parte más alta de una onda.

Valle:
Parte más baja de una onda.

Amplitud:
Altura de la onda.

Longitud de onda:
Distancia entre dos crestas o dos valles.

Frecuencia:
Número de ondas que pasan por un punto en un segundo.


MOVIMIENTO ARMÓNICO SIMPLE

Es un movimiento repetitivo alrededor de una posición de equilibrio.

Ejemplos:
- Un péndulo
- Un resorte
- Una cuerda vibrando


ÓPTICA

La óptica estudia la luz y sus fenómenos.

Fenómenos importantes:
- Reflexión: la luz rebota en una superficie.
- Refracción: la luz cambia de dirección al pasar de un medio a otro.


LENTES

Las lentes modifican el paso de la luz.

Tipos:
- Convergentes: juntan los rayos de luz.
- Divergentes: separan los rayos de luz.


ELECTROMAGNETISMO

El electromagnetismo estudia la relación entre electricidad y magnetismo.

Una corriente eléctrica puede generar un campo magnético.

Los imanes producen campos magnéticos y pueden ejercer fuerzas sobre ciertos materiales.
      `,
      preguntas: [
        { pregunta: "¿Qué es una onda?", opciones: ["Una perturbación que transmite energía", "Un objeto sólido", "Una fórmula matemática"], correcta: 0 },
        { pregunta: "¿Cuál es la parte más alta de una onda?", opciones: ["Cresta", "Valle", "Centro"], correcta: 0 },
        { pregunta: "¿Qué es la amplitud?", opciones: ["Altura de la onda", "Peso de la onda", "Velocidad de la luz"], correcta: 0 },
        { pregunta: "¿Qué mide la frecuencia?", opciones: ["Número de ondas por segundo", "Altura de un objeto", "Masa de un cuerpo"], correcta: 0 },
        { pregunta: "¿Qué estudia la óptica?", opciones: ["La luz", "Los números", "Las fuerzas sociales"], correcta: 0 },
        { pregunta: "¿Qué es la reflexión?", opciones: ["La luz rebota", "La luz desaparece", "La luz se convierte en sonido"], correcta: 0 },
        { pregunta: "¿Qué es la refracción?", opciones: ["Cambio de dirección de la luz", "Choque de dos cuerpos", "Movimiento circular"], correcta: 0 },
        { pregunta: "¿Qué lente junta rayos de luz?", opciones: ["Convergente", "Divergente", "Plana"], correcta: 0 },
        { pregunta: "¿Qué estudia el electromagnetismo?", opciones: ["Electricidad y magnetismo", "Historia y filosofía", "Fracciones"], correcta: 0 },
        { pregunta: "¿Qué puede generar una corriente eléctrica?", opciones: ["Campo magnético", "Una fracción", "Una oración"], correcta: 0 }
      ]
    }
  ]
}
],
general: [

  // ===== COMPRENSIÓN LECTORA =====
  {
    id: "comprension_lectora_general",
    nombre: "Comprensión Lectora",
    temas: [

      {
        id: "ideas_principales",
        titulo: "Ideas principales e inferencias",
        tiempo: 240,
        contenido: `
La comprensión lectora evalúa la capacidad de entender, analizar e interpretar textos.

IDEA PRINCIPAL

Es el mensaje más importante del texto.

Las ideas secundarias ayudan a explicar la idea principal.


INFERENCIAS

Inferir significa obtener información que no aparece directamente escrita, usando pistas del texto.


TIPOS DE TEXTO

- Narrativo
- Descriptivo
- Expositivo
- Argumentativo


CONSEJOS

- Lee con atención.
- Identifica palabras clave.
- Relaciona ideas.
- Analiza el contexto.
        `,
        preguntas: [

          { pregunta: "¿Qué es la idea principal?", opciones: ["La idea más importante", "El título", "La última oración"], correcta: 0 },
          { pregunta: "¿Qué hacen las ideas secundarias?", opciones: ["Explican la idea principal", "Cambian el tema", "Eliminan información"], correcta: 0 },
          { pregunta: "¿Qué significa inferir?", opciones: ["Deducir información", "Copiar texto", "Memorizar"], correcta: 0 },
          { pregunta: "¿Qué tipo de texto cuenta una historia?", opciones: ["Narrativo", "Expositivo", "Descriptivo"], correcta: 0 },
          { pregunta: "¿Qué ayuda a comprender un texto?", opciones: ["Palabras clave", "Ignorar párrafos", "Leer rápido"], correcta: 0 },
          { pregunta: "¿Qué evalúa la comprensión lectora?", opciones: ["Entender textos", "Resolver ecuaciones", "Memorizar fechas"], correcta: 0 },
          { pregunta: "¿Qué tipo de texto explica información?", opciones: ["Expositivo", "Narrativo", "Poético"], correcta: 0 },
          { pregunta: "¿Qué debe hacer el lector?", opciones: ["Analizar el contexto", "Ignorar detalles", "Solo leer títulos"], correcta: 0 },
          { pregunta: "¿Qué es una inferencia?", opciones: ["Conclusión basada en pistas", "Opinión personal", "Resumen"], correcta: 0 },
          { pregunta: "¿Qué ayuda a identificar la idea principal?", opciones: ["Relacionar ideas", "Leer solo el inicio", "Contar palabras"], correcta: 0 }

        ]
      }

    ]
  },

  // ===== REDACCIÓN INDIRECTA =====
  {
    id: "redaccion_indirecta_general",
    nombre: "Redacción Indirecta",
    temas: [

      {
        id: "ortografia_coherencia",
        titulo: "Ortografía y coherencia",
        tiempo: 240,
        contenido: `
La redacción indirecta evalúa el uso correcto del lenguaje escrito.

ORTOGRAFÍA

Consiste en escribir correctamente las palabras.

Ejemplos:
- Haber
- Porque
- También


COHERENCIA

La coherencia permite que las ideas tengan sentido y estén conectadas.


COHESIÓN

La cohesión usa conectores para unir ideas.

Ejemplos:
- Además
- Sin embargo
- Por lo tanto


PUNTUACIÓN

Los signos de puntuación ayudan a organizar las ideas.

Ejemplos:
- Coma
- Punto
- Punto y coma
        `,
        preguntas: [

          { pregunta: "¿Qué evalúa la redacción indirecta?", opciones: ["Uso correcto del lenguaje", "Velocidad", "Fuerza"], correcta: 0 },
          { pregunta: "¿Qué es la ortografía?", opciones: ["Escribir correctamente", "Leer rápido", "Resolver operaciones"], correcta: 0 },
          { pregunta: "¿Qué permite la coherencia?", opciones: ["Que las ideas tengan sentido", "Que el texto sea largo", "Que no tenga puntos"], correcta: 0 },
          { pregunta: "¿Qué une ideas en un texto?", opciones: ["Conectores", "Números", "Imágenes"], correcta: 0 },
          { pregunta: "¿Cuál es un conector?", opciones: ["Además", "Velocidad", "Fracción"], correcta: 0 },
          { pregunta: "¿Qué ayudan a organizar las ideas?", opciones: ["Signos de puntuación", "Colores", "Tablas"], correcta: 0 },
          { pregunta: "¿Cuál es un signo de puntuación?", opciones: ["Coma", "Multiplicación", "Fracción"], correcta: 0 },
          { pregunta: "¿Qué es la cohesión?", opciones: ["Conexión entre ideas", "Cantidad de texto", "Resumen"], correcta: 0 },
          { pregunta: "¿Qué palabra está bien escrita?", opciones: ["También", "Tambien", "Tanbien"], correcta: 0 },
          { pregunta: "¿Qué mejora un texto?", opciones: ["Coherencia y cohesión", "Más errores", "Menos ideas"], correcta: 0 }

        ]
      }

    ]
  },

  // ===== PENSAMIENTO MATEMÁTICO =====
  {
    id: "pensamiento_matematico_general",
    nombre: "Pensamiento Matemático",
    temas: [

      {
        id: "razonamiento_logico",
        titulo: "Razonamiento lógico",
        tiempo: 260,
        contenido: `
El pensamiento matemático evalúa la capacidad para resolver problemas usando lógica y razonamiento.

PATRONES

Los patrones son secuencias que siguen una regla.

Ejemplo:
2, 4, 6, 8...


PROBLEMAS MATEMÁTICOS

Es importante:
- Analizar datos
- Identificar operaciones
- Resolver paso a paso


RAZONAMIENTO

El razonamiento lógico permite llegar a conclusiones correctas.


OPERACIONES BÁSICAS

- Suma
- Resta
- Multiplicación
- División

También pueden aparecer porcentajes, proporciones y ecuaciones simples.
        `,
        preguntas: [

          { pregunta: "¿Qué evalúa el pensamiento matemático?", opciones: ["Resolución lógica de problemas", "Memorización", "Ortografía"], correcta: 0 },
          { pregunta: "¿Qué es un patrón?", opciones: ["Secuencia con regla", "Texto largo", "Imagen"], correcta: 0 },
          { pregunta: "¿Qué sigue en 2,4,6,8?", opciones: ["10", "12", "9"], correcta: 0 },
          { pregunta: "¿Qué ayuda a resolver problemas?", opciones: ["Analizar datos", "Adivinar", "Ignorar operaciones"], correcta: 0 },
          { pregunta: "¿Qué permite el razonamiento lógico?", opciones: ["Llegar a conclusiones", "Escribir poemas", "Traducir idiomas"], correcta: 0 },
          { pregunta: "¿Cuál es una operación básica?", opciones: ["Multiplicación", "Narración", "Descripción"], correcta: 0 },
          { pregunta: "¿Qué aparece frecuentemente en el examen?", opciones: ["Porcentajes", "Ondas electromagnéticas", "Imperialismo"], correcta: 0 },
          { pregunta: "¿Qué se recomienda hacer al resolver problemas?", opciones: ["Resolver paso a paso", "Saltar operaciones", "Memorizar resultados"], correcta: 0 },
          { pregunta: "¿Qué ayuda a identificar la operación correcta?", opciones: ["Analizar el problema", "Leer rápido", "Ignorar datos"], correcta: 0 },
          { pregunta: "¿Qué usa el pensamiento matemático?", opciones: ["Lógica", "Opiniones", "Colores"], correcta: 0 }

        ]
      }

    ]
  }

] 
};