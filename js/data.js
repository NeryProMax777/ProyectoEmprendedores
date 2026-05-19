//Comentario para guardar en Git hub
const data = {
  fcfm: [
  {
    id: "aritmetica_fcfm",
    nombre: "Aritmética",
    temas: [
      {
        id: "operaciones_basicas_fcfm",
        titulo: "Operaciones básicas y ley de signos",
        tiempo: 360,
        contenido: {
          informacion: `
En el EXANI-II, las operaciones básicas son fundamentales porque aparecen dentro de problemas más largos. No basta con saber sumar, restar, multiplicar o dividir; también es importante respetar la jerarquía de operaciones y la ley de signos.

OPERACIONES BÁSICAS

Las operaciones principales son:

- Suma
- Resta
- Multiplicación
- División

Estas operaciones pueden aparecer con números enteros, decimales y fracciones.

LEY DE SIGNOS

La ley de signos se usa principalmente en multiplicación y división:

+ por + = +
- por - = +
+ por - = -
- por + = -

Ejemplos:

(-4)(-3) = 12

(-5)(2) = -10

(-18) ÷ 3 = -6

JERARQUÍA DE OPERACIONES

Cuando una operación tiene varios signos, se debe seguir un orden:

1. Paréntesis
2. Potencias y raíces
3. Multiplicaciones y divisiones
4. Sumas y restas

Ejemplo:

2 + 3 × 4

Primero se multiplica:

3 × 4 = 12

Después se suma:

2 + 12 = 14

El resultado correcto es 14, no 20.

SIGNOS DE AGRUPACIÓN

Los paréntesis, corchetes y llaves sirven para indicar qué operación se resuelve primero.

Ejemplo:

(2 + 3) × 4 = 5 × 4 = 20

En cambio:

2 + 3 × 4 = 14

Aunque usan los mismos números, el resultado cambia por los paréntesis.

POTENCIAS

Una potencia indica que un número se multiplica por sí mismo.

Ejemplo:

3² = 3 × 3 = 9

(-2)² = (-2)(-2) = 4

Pero:

-2² = -(2²) = -4

Por eso es importante revisar si el signo negativo está dentro o fuera del paréntesis.
          `,
          ejemplo: `
EJEMPLO 1

Resolver:

8 - 3 × 2

Primero se multiplica:

3 × 2 = 6

Después se resta:

8 - 6 = 2

Respuesta: 2


EJEMPLO 2

Resolver:

(8 - 3) × 2

Primero se resuelve el paréntesis:

8 - 3 = 5

Después se multiplica:

5 × 2 = 10

Respuesta: 10


EJEMPLO 3

Resolver:

(-6)(-4)

Como los dos signos son negativos, el resultado es positivo:

(-6)(-4) = 24

Respuesta: 24


EJEMPLO 4

Resolver:

-10 + 4 × 3

Primero se multiplica:

4 × 3 = 12

Después:

-10 + 12 = 2

Respuesta: 2
          `,
          video: "https://www.youtube.com/watch?v=6f40XK7nssY&list=PLnA3yaozLGc4GXueyW31rCAL3MhrYhZ2i"
        },
        preguntas: [
          { pregunta: "¿Cuál es el resultado de (-4)(-3)?", opciones: ["-12", "12", "7"], correcta: 1 },
          { pregunta: "¿Cuál es el resultado de (-5)(2)?", opciones: ["10", "-10", "-7"], correcta: 1 },
          { pregunta: "¿Qué operación se resuelve primero en 2 + 3 × 4?", opciones: ["La suma", "La multiplicación", "La resta"], correcta: 1 },
          { pregunta: "¿Cuál es el resultado de 2 + 3 × 4?", opciones: ["20", "14", "24"], correcta: 1 },
          { pregunta: "¿Cuál es el resultado de (2 + 3) × 4?", opciones: ["20", "14", "9"], correcta: 0 },
          { pregunta: "¿Cuál es el resultado de -18 ÷ 3?", opciones: ["-6", "6", "-15"], correcta: 0 },
          { pregunta: "¿Cuál es el resultado de (-2)²?", opciones: ["4", "-4", "2"], correcta: 0 },
          { pregunta: "¿Cuál es el resultado de 8 - 3 × 2?", opciones: ["10", "2", "5"], correcta: 1 },
          { pregunta: "¿Qué signo tiene el resultado de positivo por negativo?", opciones: ["Positivo", "Negativo", "Cero"], correcta: 1 },
          { pregunta: "¿Para qué sirven los paréntesis en una operación?", opciones: ["Para indicar prioridad", "Para cambiar letras", "Para eliminar números"], correcta: 0 }
        ]
      },

      {
        id: "fracciones_porcentajes_fcfm",
        titulo: "Fracciones, porcentajes y regla de tres",
        tiempo: 420,
        contenido: {
          informacion: `
Las fracciones y porcentajes son temas muy importantes para el EXANI-II porque aparecen en problemas de proporciones, descuentos, aumentos, reparto proporcional y análisis de cantidades.

FRACCIONES

Una fracción representa una parte de un todo.

Ejemplo:

1/2 significa una parte de dos.
3/4 significa tres partes de cuatro.

PARTES DE UNA FRACCIÓN

Numerador: número de arriba.
Denominador: número de abajo.

Ejemplo:

3/5

3 es el numerador.
5 es el denominador.

SUMA Y RESTA DE FRACCIONES

Si las fracciones tienen el mismo denominador, se suman o restan los numeradores.

Ejemplo:

1/5 + 2/5 = 3/5

Si tienen diferente denominador, se busca un denominador común.

Ejemplo:

1/2 + 1/4

Convertimos 1/2 a cuartos:

1/2 = 2/4

Entonces:

2/4 + 1/4 = 3/4

MULTIPLICACIÓN DE FRACCIONES

Se multiplica numerador por numerador y denominador por denominador.

Ejemplo:

2/3 × 4/5 = 8/15

DIVISIÓN DE FRACCIONES

Se multiplica por el inverso de la segunda fracción.

Ejemplo:

1/2 ÷ 3/4

Se convierte en:

1/2 × 4/3 = 4/6 = 2/3

PORCENTAJES

Porcentaje significa “de cada 100”.

Ejemplos:

50% = 50/100 = 0.5 = 1/2

25% = 25/100 = 0.25 = 1/4

10% = 10/100 = 0.1

Para calcular un porcentaje:

Porcentaje × cantidad

Ejemplo:

20% de 80

20/100 = 0.2

0.2 × 80 = 16

REGLA DE TRES

La regla de tres se usa para resolver problemas de proporcionalidad.

Ejemplo:

Si 2 libretas cuestan $30, ¿cuánto cuestan 5 libretas?

2 → 30
5 → x

x = (5 × 30) / 2

x = 150 / 2

x = 75

Respuesta: $75
          `,
          ejemplo: `
EJEMPLO 1

Resolver:

1/2 + 1/4

Convertimos 1/2 a cuartos:

1/2 = 2/4

Entonces:

2/4 + 1/4 = 3/4

Respuesta: 3/4


EJEMPLO 2

Calcular el 15% de 200.

15% = 15/100 = 0.15

0.15 × 200 = 30

Respuesta: 30


EJEMPLO 3

Si 3 boletos cuestan $90, ¿cuánto cuestan 7 boletos?

3 → 90
7 → x

x = (7 × 90) / 3

x = 630 / 3

x = 210

Respuesta: $210


EJEMPLO 4

Resolver:

2/3 × 3/4

Multiplicamos numerador por numerador:

2 × 3 = 6

Multiplicamos denominador por denominador:

3 × 4 = 12

6/12 = 1/2

Respuesta: 1/2
          `,
          video: "https://www.youtube.com/watch?v=DacM0ZJb2CA&list=PLnA3yaozLGc6iUaikrUa1JFbAGD6aaeYR"
        },
        preguntas: [
          { pregunta: "¿Cuánto es 1/2 + 1/4?", opciones: ["3/4", "2/6", "1/8"], correcta: 0 },
          { pregunta: "¿Cuánto es 2/3 × 3/4?", opciones: ["1/2", "5/7", "6/7"], correcta: 0 },
          { pregunta: "¿Cuánto es 1/2 ÷ 3/4?", opciones: ["2/3", "3/2", "1/6"], correcta: 0 },
          { pregunta: "¿Cuál es el equivalente decimal de 50%?", opciones: ["0.5", "5", "50"], correcta: 0 },
          { pregunta: "¿Cuánto es el 25% de 200?", opciones: ["25", "50", "75"], correcta: 1 },
          { pregunta: "¿Cuánto es el 10% de 90?", opciones: ["9", "10", "19"], correcta: 0 },
          { pregunta: "¿Cuánto es 3/4 en decimal?", opciones: ["0.75", "0.5", "1.25"], correcta: 0 },
          { pregunta: "Si 2 libretas cuestan 30, ¿cuánto cuestan 5?", opciones: ["75", "60", "90"], correcta: 0 },
          { pregunta: "¿Qué significa porcentaje?", opciones: ["De cada 100", "De cada 10", "Multiplicar por 2"], correcta: 0 },
          { pregunta: "¿Para qué se usa la regla de tres?", opciones: ["Para resolver proporciones", "Para ordenar textos", "Para sacar raíces"], correcta: 0 }
        ]
      },

      {
        id: "mcm_mcd_fcfm",
        titulo: "MCM, MCD y divisibilidad",
        tiempo: 360,
        contenido: {
          informacion: `
El MCM y el MCD son herramientas importantes para resolver problemas con números enteros, fracciones, repartos y situaciones donde se repiten eventos.

DIVISIBILIDAD

Un número es divisible entre otro cuando la división es exacta, es decir, no sobra residuo.

Ejemplo:

12 es divisible entre 3 porque:

12 ÷ 3 = 4

Reglas comunes de divisibilidad:

Divisible entre 2:
Cuando termina en número par.

Ejemplo:
18, 24, 100

Divisible entre 3:
Cuando la suma de sus cifras es múltiplo de 3.

Ejemplo:
123

1 + 2 + 3 = 6

Como 6 es múltiplo de 3, 123 es divisible entre 3.

Divisible entre 5:
Cuando termina en 0 o 5.

Ejemplo:
25, 100, 135

MCM

MCM significa Mínimo Común Múltiplo.

Es el número más pequeño que es múltiplo común de dos o más números.

Ejemplo:

Múltiplos de 4:

4, 8, 12, 16, 20...

Múltiplos de 6:

6, 12, 18, 24...

El primer múltiplo común es 12.

MCM de 4 y 6 = 12

El MCM se usa en problemas de eventos que se repiten.

MCD

MCD significa Máximo Común Divisor.

Es el número más grande que divide exactamente a dos o más números.

Ejemplo:

Divisores de 8:

1, 2, 4, 8

Divisores de 12:

1, 2, 3, 4, 6, 12

El divisor común más grande es 4.

MCD de 8 y 12 = 4

El MCD se usa para simplificar fracciones o repartir cantidades en partes iguales.
          `,
          ejemplo: `
EJEMPLO 1

Encontrar el MCM de 6 y 8.

Múltiplos de 6:

6, 12, 18, 24, 30...

Múltiplos de 8:

8, 16, 24, 32...

El primer múltiplo común es 24.

Respuesta: MCM = 24


EJEMPLO 2

Encontrar el MCD de 18 y 24.

Divisores de 18:

1, 2, 3, 6, 9, 18

Divisores de 24:

1, 2, 3, 4, 6, 8, 12, 24

El divisor común más grande es 6.

Respuesta: MCD = 6


EJEMPLO 3

Simplificar 12/18 usando MCD.

MCD de 12 y 18 = 6

12 ÷ 6 = 2

18 ÷ 6 = 3

Respuesta: 12/18 = 2/3


EJEMPLO 4

Dos luces parpadean cada 4 y 6 segundos. ¿Cada cuántos segundos parpadean juntas?

MCM de 4 y 6 = 12

Respuesta: cada 12 segundos.
          `,
          video: "https://www.youtube.com/watch?v=2Pxsm91QiRU&list=PLnA3yaozLGc7mGAvNnvXFiGirJaN2OOUi"
        },
        preguntas: [
          { pregunta: "¿Cuál es el MCM de 4 y 6?", opciones: ["12", "24", "6"], correcta: 0 },
          { pregunta: "¿Cuál es el MCD de 8 y 12?", opciones: ["2", "4", "6"], correcta: 1 },
          { pregunta: "¿Cuál es el MCM de 3 y 5?", opciones: ["15", "8", "10"], correcta: 0 },
          { pregunta: "¿Cuál es el MCD de 18 y 24?", opciones: ["6", "12", "3"], correcta: 0 },
          { pregunta: "¿Qué número es divisible entre 5?", opciones: ["35", "32", "18"], correcta: 0 },
          { pregunta: "¿Cuándo un número es divisible entre 2?", opciones: ["Cuando termina en par", "Cuando termina en 5", "Cuando es decimal"], correcta: 0 },
          { pregunta: "¿Para qué se usa el MCM?", opciones: ["Eventos que se repiten", "Ortografía", "Comprensión lectora"], correcta: 0 },
          { pregunta: "¿Para qué se usa el MCD?", opciones: ["Simplificar fracciones", "Calcular velocidad", "Clasificar textos"], correcta: 0 },
          { pregunta: "Simplifica 12/18 usando MCD.", opciones: ["2/3", "3/2", "6/9"], correcta: 0 },
          { pregunta: "Si dos eventos ocurren cada 4 y 6 segundos, ¿cuándo coinciden?", opciones: ["Cada 12 segundos", "Cada 10 segundos", "Cada 6 segundos"], correcta: 0 }
        ]
      }
    ]
  },

  {
    id: "probabilidad_estadistica_fcfm",
    nombre: "Probabilidad y Estadística",
    temas: [
      {
        id: "media_moda_mediana_fcfm",
        titulo: "Media, moda, mediana y variables",
        tiempo: 420,
        contenido: {
          informacion: `
La estadística permite organizar, analizar e interpretar datos. En el EXANI-II puede aparecer en problemas con tablas, listas de datos, gráficas o situaciones donde se pide encontrar promedios y medidas de tendencia central.

POBLACIÓN Y MUESTRA

Población:
Es el conjunto total de elementos que se desea estudiar.

Ejemplo:
Todos los estudiantes de una preparatoria.

Muestra:
Es una parte de la población.

Ejemplo:
50 estudiantes seleccionados de esa preparatoria.

VARIABLES ESTADÍSTICAS

Una variable es una característica que puede cambiar.

Variables cualitativas:
Describen cualidades.

Ejemplo:
Color favorito, tipo de sangre, carrera elegida.

Variables cuantitativas:
Se expresan con números.

Ejemplo:
Edad, estatura, calificación.

MEDIA

La media es el promedio de un conjunto de datos.

Fórmula:

Media = suma de datos / número de datos

Ejemplo:

Datos: 6, 8, 10

Media = (6 + 8 + 10) / 3 = 8

MODA

La moda es el dato que más se repite.

Ejemplo:

Datos: 2, 3, 3, 4, 5

Moda = 3

Puede haber más de una moda o puede no haber moda.

MEDIANA

La mediana es el valor central cuando los datos están ordenados.

Ejemplo impar:

1, 3, 5

Mediana = 3

Ejemplo par:

2, 4, 6, 8

Mediana = (4 + 6) / 2 = 5

IMPORTANTE

Antes de calcular la mediana, siempre se deben ordenar los datos.
          `,
          ejemplo: `
EJEMPLO 1

Calcular la media de:

7, 8, 9

Sumamos:

7 + 8 + 9 = 24

Dividimos entre la cantidad de datos:

24 / 3 = 8

Respuesta: media = 8


EJEMPLO 2

Encontrar la moda:

4, 5, 5, 6, 7

El número que más se repite es 5.

Respuesta: moda = 5


EJEMPLO 3

Encontrar la mediana:

9, 2, 5, 7, 1

Primero ordenamos:

1, 2, 5, 7, 9

El valor central es 5.

Respuesta: mediana = 5


EJEMPLO 4

Encontrar la mediana:

2, 4, 6, 8

Hay dos valores centrales: 4 y 6.

Promediamos:

(4 + 6) / 2 = 5

Respuesta: mediana = 5
          `,
          video: "https://www.youtube.com/watch?v=dfxCsCZ1c3A&list=PLeySRPnY35dFkzBgleLJ5WVFbGdkmCik5"
        },
        preguntas: [
          { pregunta: "¿Qué es la media?", opciones: ["El promedio", "El dato más repetido", "El dato mayor"], correcta: 0 },
          { pregunta: "¿Cuál es la media de 2, 4 y 6?", opciones: ["4", "6", "3"], correcta: 0 },
          { pregunta: "¿Qué es la moda?", opciones: ["El dato que más se repite", "El promedio", "El dato central"], correcta: 0 },
          { pregunta: "¿Cuál es la moda de 1, 2, 2, 3?", opciones: ["1", "2", "3"], correcta: 1 },
          { pregunta: "¿Qué es la mediana?", opciones: ["El valor central", "El valor mayor", "La suma total"], correcta: 0 },
          { pregunta: "¿Qué debes hacer antes de encontrar la mediana?", opciones: ["Ordenar los datos", "Multiplicar todos", "Eliminar datos"], correcta: 0 },
          { pregunta: "¿Cuál es la mediana de 1, 3, 5?", opciones: ["3", "1", "5"], correcta: 0 },
          { pregunta: "¿Cuál es la mediana de 2, 4, 6, 8?", opciones: ["5", "4", "6"], correcta: 0 },
          { pregunta: "¿Qué es una muestra?", opciones: ["Parte de la población", "Toda la población", "Una fórmula"], correcta: 0 },
          { pregunta: "¿Cuál es una variable cuantitativa?", opciones: ["Edad", "Color favorito", "Tipo de sangre"], correcta: 0 }
        ]
      },

      {
        id: "probabilidad_basica_fcfm",
        titulo: "Probabilidad básica y espacio muestral",
        tiempo: 420,
        contenido: {
          informacion: `
La probabilidad permite medir qué tan posible es que ocurra un evento. En el EXANI-II suele aparecer con dados, monedas, urnas, cartas o situaciones con resultados posibles.

PROBABILIDAD

La probabilidad se calcula con la fórmula:

Probabilidad = casos favorables / casos posibles

Casos favorables:
Son los resultados que queremos que ocurran.

Casos posibles:
Son todos los resultados que pueden ocurrir.

Ejemplo:

Al lanzar un dado, los posibles resultados son:

1, 2, 3, 4, 5, 6

Hay 6 resultados posibles.

Si queremos sacar un 4, solo hay 1 caso favorable.

Probabilidad = 1/6

ESPACIO MUESTRAL

El espacio muestral es el conjunto de todos los resultados posibles.

Ejemplo:

Lanzar una moneda:

S = {cara, cruz}

Lanzar un dado:

S = {1, 2, 3, 4, 5, 6}

EVENTO

Un evento es un resultado o conjunto de resultados que nos interesa.

Ejemplo:

Evento: obtener un número par al lanzar un dado.

Números pares:

2, 4, 6

Casos favorables = 3

Casos posibles = 6

Probabilidad = 3/6 = 1/2

TIPOS DE EVENTOS

Evento seguro:
Siempre ocurre.

Ejemplo:
Sacar un número menor que 7 al lanzar un dado.

Evento imposible:
Nunca ocurre.

Ejemplo:
Sacar un 9 al lanzar un dado común.

Evento probable:
Puede ocurrir, pero no es seguro.

Ejemplo:
Sacar cara al lanzar una moneda.

PROBABILIDAD COMO PORCENTAJE

Una probabilidad puede expresarse como fracción, decimal o porcentaje.

Ejemplo:

1/2 = 0.5 = 50%
          `,
          ejemplo: `
EJEMPLO 1

¿Cuál es la probabilidad de sacar un 6 en un dado?

El dado tiene 6 resultados posibles.

Solo hay un 6.

Probabilidad = 1/6


EJEMPLO 2

¿Cuál es la probabilidad de sacar un número par en un dado?

Números pares:

2, 4, 6

Casos favorables = 3

Casos posibles = 6

Probabilidad = 3/6 = 1/2


EJEMPLO 3

¿Cuál es la probabilidad de sacar cara en una moneda?

Resultados posibles:

cara, cruz

Casos favorables = 1

Casos posibles = 2

Probabilidad = 1/2


EJEMPLO 4

Una bolsa tiene 3 bolas rojas y 2 azules. ¿Cuál es la probabilidad de sacar una bola azul?

Total de bolas:

3 + 2 = 5

Bolas azules = 2

Probabilidad = 2/5
          `,
          video: "https://www.youtube.com/watch?v=B1YE6ChdzgM&list=PLeySRPnY35dEtzvR4hUhigwTCHQcxP28l"
        },
        preguntas: [
          { pregunta: "¿Cuál es la fórmula de probabilidad?", opciones: ["Casos favorables / casos posibles", "Casos posibles / casos favorables", "Suma de datos / datos"], correcta: 0 },
          { pregunta: "¿Cuál es la probabilidad de sacar un 6 en un dado?", opciones: ["1/6", "1/2", "6/1"], correcta: 0 },
          { pregunta: "¿Qué es el espacio muestral?", opciones: ["Todos los resultados posibles", "Solo el resultado correcto", "La respuesta final"], correcta: 0 },
          { pregunta: "¿Cuál es el espacio muestral de una moneda?", opciones: ["{cara, cruz}", "{1,2,3}", "{rojo, azul, verde}"], correcta: 0 },
          { pregunta: "¿Cuál es la probabilidad de sacar cara en una moneda?", opciones: ["1/2", "1/6", "2"], correcta: 0 },
          { pregunta: "¿Cuál es la probabilidad de sacar un número par en un dado?", opciones: ["1/2", "1/6", "1/3"], correcta: 0 },
          { pregunta: "¿Qué es un evento imposible?", opciones: ["Un evento que nunca ocurre", "Un evento que siempre ocurre", "Un evento probable"], correcta: 0 },
          { pregunta: "¿Qué es un evento seguro?", opciones: ["Un evento que siempre ocurre", "Un evento que nunca ocurre", "Un evento con 50%"], correcta: 0 },
          { pregunta: "¿Cuál es el porcentaje equivalente a 1/2?", opciones: ["50%", "25%", "75%"], correcta: 0 },
          { pregunta: "Si hay 3 bolas rojas y 2 azules, ¿cuántas bolas hay en total?", opciones: ["5", "3", "2"], correcta: 0 }
        ]
      },

      {
        id: "conteo_combinaciones_fcfm",
        titulo: "Técnicas de conteo, permutaciones y combinaciones",
        tiempo: 480,
        contenido: {
          informacion: `
Las técnicas de conteo ayudan a calcular cuántas formas existen de realizar una acción o formar grupos. Este tema es importante porque se relaciona con probabilidad.

PRINCIPIO MULTIPLICATIVO

Si una acción puede hacerse de varias formas y otra acción también, se multiplican las posibilidades.

Ejemplo:

Tienes 3 camisas y 2 pantalones.

Cada camisa puede combinarse con cada pantalón.

Total de combinaciones:

3 × 2 = 6

Este principio se usa cuando hay eventos seguidos.

DIAGRAMA DE ÁRBOL

Un diagrama de árbol ayuda a representar todas las posibilidades.

Ejemplo:

Moneda y dado.

Primero puede salir cara o cruz.

Después puede salir 1, 2, 3, 4, 5 o 6.

Total:

2 × 6 = 12 resultados posibles.

PERMUTACIONES

Las permutaciones se usan cuando el orden sí importa.

Ejemplo:

Primer, segundo y tercer lugar en una carrera.

No es lo mismo:

Ana - Luis - Pedro

que

Luis - Ana - Pedro

Aunque sean las mismas personas, el orden cambia.

COMBINACIONES

Las combinaciones se usan cuando el orden no importa.

Ejemplo:

Elegir 2 estudiantes para un equipo.

Ana y Luis es lo mismo que Luis y Ana.

Por eso el orden no cambia el grupo.

DIFERENCIA IMPORTANTE

Permutación:
El orden sí importa.

Combinación:
El orden no importa.

CUÁNDO USAR CONTEO

Se usa en problemas donde se pregunta:

- ¿Cuántas formas?
- ¿Cuántas maneras?
- ¿Cuántas combinaciones?
- ¿Cuántos resultados posibles?
          `,
          ejemplo: `
EJEMPLO 1

Tienes 4 playeras y 3 pantalones.

¿Cuántas combinaciones puedes formar?

Multiplicamos:

4 × 3 = 12

Respuesta: 12 combinaciones


EJEMPLO 2

Una contraseña tiene 2 dígitos. Cada dígito puede ser del 0 al 9.

Hay 10 opciones para el primer dígito y 10 para el segundo.

10 × 10 = 100

Respuesta: 100 contraseñas posibles


EJEMPLO 3

¿Importa el orden en una carrera?

Sí.

Primer lugar y segundo lugar no son lo mismo.

Entonces es permutación.


EJEMPLO 4

¿Importa el orden al elegir 2 alumnos para un equipo?

No.

Ana y Luis forman el mismo equipo que Luis y Ana.

Entonces es combinación.
          `,
          video: "https://www.youtube.com/watch?v=ibVhedcvDKs&list=PLnA3yaozLGc4tWqxe3y3Q2QO8RVixamo1"
        },
        preguntas: [
          { pregunta: "Si tienes 3 camisas y 2 pantalones, ¿cuántas combinaciones hay?", opciones: ["6", "5", "3"], correcta: 0 },
          { pregunta: "¿Qué operación se usa en el principio multiplicativo?", opciones: ["Multiplicación", "Resta", "División"], correcta: 0 },
          { pregunta: "¿Qué herramienta representa posibilidades paso a paso?", opciones: ["Diagrama de árbol", "Tabla periódica", "Mapa político"], correcta: 0 },
          { pregunta: "¿Cuántos resultados hay al lanzar una moneda y un dado?", opciones: ["12", "8", "6"], correcta: 0 },
          { pregunta: "¿Cuándo se usa permutación?", opciones: ["Cuando importa el orden", "Cuando no importa el orden", "Cuando se suman datos"], correcta: 0 },
          { pregunta: "¿Cuándo se usa combinación?", opciones: ["Cuando no importa el orden", "Cuando importa el orden", "Cuando hay división"], correcta: 0 },
          { pregunta: "En una carrera, ¿importa el orden de llegada?", opciones: ["Sí", "No", "Solo si hay empate"], correcta: 0 },
          { pregunta: "Al elegir dos alumnos para un equipo, ¿importa el orden?", opciones: ["No", "Sí", "Siempre"], correcta: 0 },
          { pregunta: "Si hay 4 playeras y 3 pantalones, ¿cuántas combinaciones hay?", opciones: ["12", "7", "9"], correcta: 0 },
          { pregunta: "Una clave tiene 2 dígitos del 0 al 9. ¿Cuántas claves posibles hay?", opciones: ["100", "20", "10"], correcta: 0 }
        ]
      }
    ]
  }
],fime: [
  {
    id: "aritmetica_fime",
    nombre: "Aritmética",
    temas: [
      {
        id: "operaciones_basicas_fime",
        titulo: "Operaciones básicas y ley de signos",
        tiempo: 360,
        contenido: {
          informacion: `
En el EXANI-II, las operaciones básicas son fundamentales porque aparecen dentro de problemas matemáticos, de física y de razonamiento. Es importante saber resolver operaciones con números enteros, fracciones, decimales y signos.

OPERACIONES BÁSICAS

Las operaciones básicas son:

- Suma
- Resta
- Multiplicación
- División

Estas operaciones pueden combinarse en una misma expresión.

LEY DE SIGNOS

La ley de signos se usa principalmente en multiplicación y división:

+ por + = +
- por - = +
+ por - = -
- por + = -

Ejemplos:

(-5)(-2) = 10

(-4)(3) = -12

(-18) ÷ 6 = -3

JERARQUÍA DE OPERACIONES

Cuando una expresión tiene varias operaciones, se resuelve en este orden:

1. Paréntesis
2. Potencias y raíces
3. Multiplicación y división
4. Suma y resta

Ejemplo:

4 + 3 × 2

Primero se multiplica:

3 × 2 = 6

Después se suma:

4 + 6 = 10

El resultado correcto es 10.

SIGNOS DE AGRUPACIÓN

Los paréntesis indican qué operación se debe resolver primero.

Ejemplo:

(4 + 3) × 2

Primero:

4 + 3 = 7

Después:

7 × 2 = 14

POTENCIAS

Una potencia indica que un número se multiplica por sí mismo.

Ejemplo:

3² = 3 × 3 = 9

(-2)² = (-2)(-2) = 4

Es importante revisar si el signo negativo está dentro del paréntesis.
          `,
          ejemplo: `
EJEMPLO 1

Resolver:

6 + 2 × 5

Primero se multiplica:

2 × 5 = 10

Después se suma:

6 + 10 = 16

Respuesta: 16


EJEMPLO 2

Resolver:

(6 + 2) × 5

Primero se resuelve el paréntesis:

6 + 2 = 8

Después se multiplica:

8 × 5 = 40

Respuesta: 40


EJEMPLO 3

Resolver:

(-7)(-3)

Como negativo por negativo da positivo:

(-7)(-3) = 21

Respuesta: 21


EJEMPLO 4

Resolver:

-12 + 5 × 2

Primero se multiplica:

5 × 2 = 10

Después:

-12 + 10 = -2

Respuesta: -2
          `,
          video: "https://www.youtube.com/watch?v=6f40XK7nssY&list=PLnA3yaozLGc4GXueyW31rCAL3MhrYhZ2i"
        },
        preguntas: [
          { pregunta: "¿Cuál es el resultado de (-5)(-2)?", opciones: ["-10", "10", "7"], correcta: 1 },
          { pregunta: "¿Cuál es el resultado de (-4)(3)?", opciones: ["12", "-12", "-1"], correcta: 1 },
          { pregunta: "¿Qué operación se resuelve primero en 4 + 3 × 2?", opciones: ["Suma", "Multiplicación", "Resta"], correcta: 1 },
          { pregunta: "¿Cuál es el resultado de 4 + 3 × 2?", opciones: ["14", "10", "20"], correcta: 1 },
          { pregunta: "¿Cuál es el resultado de (4 + 3) × 2?", opciones: ["14", "10", "9"], correcta: 0 },
          { pregunta: "¿Cuál es el resultado de -18 ÷ 6?", opciones: ["-3", "3", "-12"], correcta: 0 },
          { pregunta: "¿Cuál es el resultado de (-3)²?", opciones: ["9", "-9", "6"], correcta: 0 },
          { pregunta: "¿Cuál es el resultado de 9 - 2 × 4?", opciones: ["1", "28", "7"], correcta: 0 },
          { pregunta: "¿Qué signo tiene el resultado de negativo por positivo?", opciones: ["Positivo", "Negativo", "Cero"], correcta: 1 },
          { pregunta: "¿Para qué sirven los paréntesis?", opciones: ["Para indicar prioridad", "Para borrar números", "Para cambiar letras"], correcta: 0 }
        ]
      },

      {
        id: "fracciones_porcentajes_fime",
        titulo: "Fracciones, porcentajes y regla de tres",
        tiempo: 420,
        contenido: {
          informacion: `
Las fracciones, porcentajes y proporciones son muy importantes para FIME porque aparecen en problemas de medición, física, escalas, razones y cálculos prácticos.

FRACCIONES

Una fracción representa una parte de un todo.

Ejemplo:

1/2 representa una mitad.
3/4 representa tres partes de cuatro.

PARTES DE UNA FRACCIÓN

Numerador:
Número de arriba.

Denominador:
Número de abajo.

Ejemplo:

5/8

5 es el numerador.
8 es el denominador.

SUMA Y RESTA DE FRACCIONES

Si tienen el mismo denominador, se suman o restan los numeradores.

Ejemplo:

2/7 + 3/7 = 5/7

Si tienen diferente denominador, se busca un denominador común.

Ejemplo:

1/2 + 1/3

El común denominador es 6.

1/2 = 3/6

1/3 = 2/6

3/6 + 2/6 = 5/6

MULTIPLICACIÓN DE FRACCIONES

Se multiplica numerador por numerador y denominador por denominador.

Ejemplo:

2/5 × 3/4 = 6/20 = 3/10

DIVISIÓN DE FRACCIONES

Se multiplica por el inverso de la segunda fracción.

Ejemplo:

2/3 ÷ 1/4

2/3 × 4/1 = 8/3

PORCENTAJES

Porcentaje significa “de cada 100”.

Ejemplos:

50% = 0.5 = 1/2

25% = 0.25 = 1/4

10% = 0.1

Para sacar porcentaje:

Porcentaje / 100 × cantidad

Ejemplo:

30% de 200

30/100 = 0.3

0.3 × 200 = 60

REGLA DE TRES

Se usa para resolver problemas de proporcionalidad.

Ejemplo:

Si 4 piezas cuestan $80, ¿cuánto cuestan 10 piezas?

4 → 80
10 → x

x = (10 × 80) / 4

x = 800 / 4

x = 200

Respuesta: $200
          `,
          ejemplo: `
EJEMPLO 1

Resolver:

1/2 + 1/3

Buscamos denominador común:

6

1/2 = 3/6

1/3 = 2/6

3/6 + 2/6 = 5/6

Respuesta: 5/6


EJEMPLO 2

Calcular el 30% de 200.

30% = 0.3

0.3 × 200 = 60

Respuesta: 60


EJEMPLO 3

Si 4 piezas cuestan $80, ¿cuánto cuestan 10?

4 → 80
10 → x

x = (10 × 80) / 4

x = 200

Respuesta: $200


EJEMPLO 4

Resolver:

2/5 × 3/4

2 × 3 = 6

5 × 4 = 20

6/20 = 3/10

Respuesta: 3/10
          `,
      video: "https://www.youtube.com/watch?v=DacM0ZJb2CA&list=PLnA3yaozLGc6iUaikrUa1JFbAGD6aaeYR"
        },
        preguntas: [
          { pregunta: "¿Cuánto es 1/2 + 1/3?", opciones: ["5/6", "2/5", "1/6"], correcta: 0 },
          { pregunta: "¿Cuánto es 2/5 × 3/4?", opciones: ["3/10", "6/9", "5/20"], correcta: 0 },
          { pregunta: "¿Cuánto es 2/3 ÷ 1/4?", opciones: ["8/3", "2/12", "3/8"], correcta: 0 },
          { pregunta: "¿Cuál es el equivalente decimal de 25%?", opciones: ["0.25", "2.5", "25"], correcta: 0 },
          { pregunta: "¿Cuánto es el 30% de 200?", opciones: ["30", "60", "90"], correcta: 1 },
          { pregunta: "¿Cuánto es el 10% de 150?", opciones: ["15", "10", "25"], correcta: 0 },
          { pregunta: "¿Cuánto es 1/4 en porcentaje?", opciones: ["25%", "50%", "75%"], correcta: 0 },
          { pregunta: "Si 4 piezas cuestan 80, ¿cuánto cuestan 10?", opciones: ["200", "160", "100"], correcta: 0 },
          { pregunta: "¿Qué significa porcentaje?", opciones: ["De cada 100", "De cada 10", "Dividir entre 2"], correcta: 0 },
          { pregunta: "¿Para qué se usa la regla de tres?", opciones: ["Para resolver proporciones", "Para encontrar verbos", "Para medir ángulos"], correcta: 0 }
        ]
      },

      {
        id: "mcm_mcd_fime",
        titulo: "MCM, MCD y divisibilidad",
        tiempo: 360,
        contenido: {
          informacion: `
El MCM, el MCD y las reglas de divisibilidad ayudan a simplificar cálculos, resolver problemas con fracciones y encontrar coincidencias entre cantidades.

DIVISIBILIDAD

Un número es divisible entre otro cuando la división es exacta.

Ejemplo:

20 es divisible entre 5 porque:

20 ÷ 5 = 4

No sobra residuo.

REGLAS DE DIVISIBILIDAD

Divisible entre 2:
Cuando termina en número par.

Ejemplo:
14, 28, 100

Divisible entre 3:
Cuando la suma de sus cifras es múltiplo de 3.

Ejemplo:

123

1 + 2 + 3 = 6

Como 6 es múltiplo de 3, 123 es divisible entre 3.

Divisible entre 5:
Cuando termina en 0 o 5.

Ejemplo:
25, 50, 135

MCM

MCM significa Mínimo Común Múltiplo.

Es el número más pequeño que es múltiplo común de dos o más números.

Ejemplo:

Múltiplos de 6:

6, 12, 18, 24...

Múltiplos de 8:

8, 16, 24, 32...

MCM de 6 y 8 = 24

MCD

MCD significa Máximo Común Divisor.

Es el número más grande que divide exactamente a dos o más números.

Ejemplo:

Divisores de 18:

1, 2, 3, 6, 9, 18

Divisores de 24:

1, 2, 3, 4, 6, 8, 12, 24

MCD de 18 y 24 = 6

USOS

El MCM se usa en eventos que se repiten.
El MCD se usa para simplificar fracciones y repartir cantidades en partes iguales.
          `,
          ejemplo: `
EJEMPLO 1

Encontrar el MCM de 6 y 8.

Múltiplos de 6:

6, 12, 18, 24

Múltiplos de 8:

8, 16, 24

El primer múltiplo común es 24.

Respuesta: MCM = 24


EJEMPLO 2

Encontrar el MCD de 18 y 24.

Divisores de 18:

1, 2, 3, 6, 9, 18

Divisores de 24:

1, 2, 3, 4, 6, 8, 12, 24

El mayor divisor común es 6.

Respuesta: MCD = 6


EJEMPLO 3

Simplificar 18/24.

MCD de 18 y 24 = 6

18 ÷ 6 = 3

24 ÷ 6 = 4

Respuesta: 18/24 = 3/4


EJEMPLO 4

Dos máquinas se revisan cada 6 y 8 días. ¿Cada cuántos días coinciden?

MCM de 6 y 8 = 24

Respuesta: cada 24 días.
          `,
         video: "https://www.youtube.com/watch?v=2Pxsm91QiRU&list=PLnA3yaozLGc7mGAvNnvXFiGirJaN2OOUi"
        },
        preguntas: [
          { pregunta: "¿Cuál es el MCM de 6 y 8?", opciones: ["24", "12", "48"], correcta: 0 },
          { pregunta: "¿Cuál es el MCD de 18 y 24?", opciones: ["6", "12", "3"], correcta: 0 },
          { pregunta: "¿Cuál es el MCM de 4 y 10?", opciones: ["20", "40", "10"], correcta: 0 },
          { pregunta: "¿Cuál es el MCD de 20 y 30?", opciones: ["10", "20", "5"], correcta: 0 },
          { pregunta: "¿Qué número es divisible entre 5?", opciones: ["45", "42", "38"], correcta: 0 },
          { pregunta: "¿Cuándo un número es divisible entre 2?", opciones: ["Cuando termina en par", "Cuando termina en 5", "Cuando tiene decimal"], correcta: 0 },
          { pregunta: "¿Para qué se usa el MCM?", opciones: ["Eventos que se repiten", "Puntuación", "Lectura"], correcta: 0 },
          { pregunta: "¿Para qué se usa el MCD?", opciones: ["Simplificar fracciones", "Calcular velocidad", "Clasificar textos"], correcta: 0 },
          { pregunta: "Simplifica 18/24 usando MCD.", opciones: ["3/4", "2/3", "6/8"], correcta: 0 },
          { pregunta: "Si dos eventos ocurren cada 6 y 8 días, ¿cuándo coinciden?", opciones: ["Cada 24 días", "Cada 14 días", "Cada 48 días"], correcta: 0 }
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
        tiempo: 480,
        contenido: {
          informacion: `
La mecánica es la rama de la física que estudia el movimiento de los cuerpos y las fuerzas que actúan sobre ellos. Para FIME es un tema importante porque se relaciona con movimiento, fuerza, choques, energía y cantidad de movimiento.

MOVIMIENTO

El movimiento ocurre cuando un cuerpo cambia de posición respecto a un punto de referencia.

Ejemplo:

Un automóvil que avanza en una carretera está en movimiento respecto al suelo.

DISTANCIA Y DESPLAZAMIENTO

Distancia:
Es la longitud total recorrida.

Desplazamiento:
Es el cambio de posición desde el punto inicial hasta el final.

VELOCIDAD

La velocidad indica qué distancia recorre un cuerpo en cierto tiempo.

Fórmula:

v = d / t

Donde:

v = velocidad
d = distancia
t = tiempo

Ejemplo:

Si un objeto recorre 100 metros en 20 segundos:

v = 100 / 20 = 5 m/s

ACELERACIÓN

La aceleración es el cambio de velocidad en un tiempo determinado.

Fórmula:

a = (vf - vi) / t

Donde:

vf = velocidad final
vi = velocidad inicial
t = tiempo

FUERZA

La fuerza es una acción capaz de cambiar el movimiento o la forma de un objeto.

Segunda Ley de Newton:

F = m × a

Donde:

F = fuerza
m = masa
a = aceleración

La unidad de fuerza es el Newton (N).

CANTIDAD DE MOVIMIENTO

La cantidad de movimiento relaciona la masa y la velocidad.

Fórmula:

p = m × v

Mientras mayor sea la masa o la velocidad, mayor será la cantidad de movimiento.

CHOQUES

Un choque ocurre cuando dos cuerpos interactúan durante un tiempo corto.

Choque elástico:
Se conserva la energía cinética.

Choque inelástico:
Parte de la energía se transforma en calor, sonido o deformación.

MOVIMIENTO CIRCULAR

Es el movimiento de un objeto alrededor de un centro.

La fuerza centrípeta apunta hacia el centro y mantiene al objeto girando.
          `,
          ejemplo: `
EJEMPLO 1

Un automóvil recorre 120 km en 2 horas.

v = d / t

v = 120 / 2

v = 60 km/h

Respuesta: 60 km/h


EJEMPLO 2

Un objeto de 5 kg tiene una aceleración de 3 m/s².

F = m × a

F = 5 × 3

F = 15 N

Respuesta: 15 N


EJEMPLO 3

Un cuerpo tiene masa de 4 kg y velocidad de 6 m/s.

p = m × v

p = 4 × 6

p = 24 kg·m/s

Respuesta: 24 kg·m/s


EJEMPLO 4

Si un objeto gira en círculo, la fuerza que apunta al centro es la fuerza centrípeta.
          `,
          video: "https://www.youtube.com/results?search_query=mecanica+fisica+exani+ii"
        },
        preguntas: [
          { pregunta: "¿Qué estudia la mecánica?", opciones: ["Movimiento y fuerzas", "La luz", "La ortografía"], correcta: 0 },
          { pregunta: "¿Cuál es la fórmula de la velocidad?", opciones: ["v = d / t", "F = m × a", "p = m × v"], correcta: 0 },
          { pregunta: "¿Qué es la aceleración?", opciones: ["Cambio de velocidad", "Distancia total", "Cantidad de masa"], correcta: 0 },
          { pregunta: "¿Cuál es la fórmula de la fuerza?", opciones: ["F = m × a", "v = d / t", "E = m × c"], correcta: 0 },
          { pregunta: "¿Cuál es la unidad de fuerza?", opciones: ["Newton", "Metro", "Segundo"], correcta: 0 },
          { pregunta: "¿Qué fuerza mantiene un objeto girando hacia el centro?", opciones: ["Fuerza centrípeta", "Fuerza eléctrica", "Fuerza normal"], correcta: 0 },
          { pregunta: "¿Qué representa p = m × v?", opciones: ["Cantidad de movimiento", "Velocidad", "Energía potencial"], correcta: 0 },
          { pregunta: "¿Qué ocurre en un choque?", opciones: ["Dos cuerpos interactúan", "Un cuerpo desaparece", "No hay fuerza"], correcta: 0 },
          { pregunta: "¿Qué choque conserva la energía cinética?", opciones: ["Choque elástico", "Choque inelástico", "Choque térmico"], correcta: 0 },
          { pregunta: "Si aumenta la masa o la velocidad, ¿qué pasa con la cantidad de movimiento?", opciones: ["Aumenta", "Disminuye", "No cambia"], correcta: 0 }
        ]
      },

      {
        id: "movimiento_energia_fime",
        titulo: "Movimiento circular y energía",
        tiempo: 480,
        contenido: {
          informacion: `
El movimiento circular y la energía son temas importantes en física porque permiten explicar fenómenos como ruedas girando, ventiladores, planetas, poleas y objetos en movimiento.

MOVIMIENTO CIRCULAR

El movimiento circular ocurre cuando un objeto se desplaza siguiendo una trayectoria curva alrededor de un centro.

Ejemplos:

- Una rueda girando
- Un ventilador
- Un planeta orbitando
- Una piedra atada a una cuerda girando

MOVIMIENTO CIRCULAR UNIFORME

En el movimiento circular uniforme, el objeto mantiene rapidez constante, pero cambia continuamente de dirección.

Aunque la rapidez sea constante, existe aceleración porque cambia la dirección del movimiento.

FUERZA CENTRÍPETA

La fuerza centrípeta es la fuerza que apunta hacia el centro del círculo.

Esta fuerza mantiene al objeto en movimiento circular.

Si no existiera fuerza centrípeta, el objeto seguiría en línea recta.

VELOCIDAD ANGULAR

La velocidad angular indica qué tan rápido gira un objeto.

Se relaciona con el ángulo recorrido en cierto tiempo.

ENERGÍA

La energía es la capacidad de realizar trabajo o producir cambios.

ENERGÍA CINÉTICA

La energía cinética es la energía que tiene un cuerpo por estar en movimiento.

Fórmula:

Ec = (m × v²) / 2

Donde:

Ec = energía cinética
m = masa
v = velocidad

Si aumenta la velocidad, la energía cinética aumenta mucho porque la velocidad está elevada al cuadrado.

ENERGÍA POTENCIAL

La energía potencial es la energía que tiene un cuerpo por su posición o altura.

Ejemplo:

Una pelota en una repisa tiene energía potencial porque puede caer.

CONSERVACIÓN DE LA ENERGÍA

La energía no se crea ni se destruye, solo se transforma.

Ejemplo:

Cuando una pelota cae, su energía potencial se transforma en energía cinética.

TRABAJO

En física, el trabajo ocurre cuando una fuerza produce desplazamiento.

Ejemplo:

Empujar una caja y moverla.
          `,
          ejemplo: `
EJEMPLO 1

Un objeto gira atado a una cuerda.

La cuerda ejerce fuerza hacia el centro.

Esa fuerza es centrípeta.


EJEMPLO 2

Un objeto de 2 kg se mueve a 4 m/s.

Ec = (m × v²) / 2

Ec = (2 × 4²) / 2

Ec = (2 × 16) / 2

Ec = 32 / 2

Ec = 16 J

Respuesta: 16 J


EJEMPLO 3

Una pelota está en una mesa alta.

Tiene energía potencial por su altura.

Cuando cae, esa energía se transforma en energía cinética.


EJEMPLO 4

Un ventilador girando es ejemplo de movimiento circular.
          `,
          video: "https://www.youtube.com/results?search_query=movimiento+circular+energia+fisica+exani+ii"
        },
        preguntas: [
          { pregunta: "¿Qué es el movimiento circular?", opciones: ["Movimiento alrededor de un centro", "Movimiento en línea recta", "Movimiento sin dirección"], correcta: 0 },
          { pregunta: "¿Qué fuerza mantiene un objeto girando?", opciones: ["Fuerza centrípeta", "Fuerza de fricción", "Fuerza eléctrica"], correcta: 0 },
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
        tiempo: 520,
        contenido: {
          informacion: `
Este tema estudia fenómenos relacionados con la luz, las ondas, la electricidad y el magnetismo. Es importante porque aparece en problemas conceptuales y de aplicación tecnológica.

ONDAS

Una onda es una perturbación que transmite energía de un lugar a otro sin transportar materia de forma permanente.

Ejemplos:

- Sonido
- Luz
- Olas en el agua
- Vibración de una cuerda

PARTES DE UNA ONDA

Cresta:
Parte más alta de la onda.

Valle:
Parte más baja de la onda.

Amplitud:
Altura de la onda desde la posición de equilibrio.

Longitud de onda:
Distancia entre dos crestas o dos valles consecutivos.

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

REFLEXIÓN

La reflexión ocurre cuando la luz rebota en una superficie.

Ejemplo:

Un espejo refleja la luz.

REFRACCIÓN

La refracción ocurre cuando la luz cambia de dirección al pasar de un medio a otro.

Ejemplo:

Un lápiz dentro de un vaso con agua parece doblado.

LENTES

Las lentes modifican el paso de la luz.

Lente convergente:
Junta los rayos de luz.

Lente divergente:
Separa los rayos de luz.

ELECTROMAGNETISMO

El electromagnetismo estudia la relación entre electricidad y magnetismo.

Una corriente eléctrica puede generar un campo magnético.

Los imanes producen campos magnéticos y pueden atraer ciertos materiales.

CAMPO MAGNÉTICO

Es la región donde actúan fuerzas magnéticas.

Ejemplo:

Alrededor de un imán existe un campo magnético.

APLICACIONES

Estos fenómenos se aplican en:

- Motores eléctricos
- Bocinas
- Micrófonos
- Lentes
- Cámaras
- Fibra óptica
          `,
          ejemplo: `
EJEMPLO 1

Una onda en una cuerda tiene crestas y valles.

La distancia entre dos crestas se llama longitud de onda.


EJEMPLO 2

Un espejo refleja la luz.

Esto es reflexión.


EJEMPLO 3

Un popote dentro de un vaso con agua parece doblado.

Esto ocurre por refracción.


EJEMPLO 4

Una corriente eléctrica puede generar un campo magnético.

Por eso funcionan algunos motores eléctricos.


EJEMPLO 5

Una lupa usa una lente convergente para concentrar rayos de luz.
          `,
          video: "https://www.youtube.com/results?search_query=optica+ondas+electromagnetismo+fisica+exani+ii"
        },
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
  {
    id: "comprension_lectora_general",
    nombre: "Comprensión Lectora",
    temas: [
      {
        id: "ideas_inferencias_general",
        titulo: "Ideas principales, secundarias e inferencias",
        tiempo: 420,
        contenido: {
          informacion: `
La comprensión lectora es la capacidad de entender, interpretar y analizar un texto. En el EXANI-II no solo se pide leer, sino identificar información importante, deducir ideas y reconocer la intención del autor.

IDEA PRINCIPAL

La idea principal es el mensaje más importante del texto. Es aquello de lo que trata principalmente la lectura.

Puede aparecer:
- Al inicio del texto
- En medio
- Al final
- O puede estar implícita

Ejemplo:
Si un texto habla de los beneficios de estudiar con anticipación, la idea principal puede ser:

“Estudiar con tiempo mejora la preparación para un examen.”

IDEAS SECUNDARIAS

Las ideas secundarias explican, amplían o apoyan la idea principal.

Ejemplo:
Si la idea principal es que estudiar con tiempo ayuda al aprendizaje, una idea secundaria puede ser:

“Organizar horarios permite repasar mejor los temas.”

INFERENCIA

Inferir significa deducir información que no aparece escrita directamente, pero que se puede entender por las pistas del texto.

Ejemplo:
Texto:
“Juan llegó empapado a la escuela y olvidó su paraguas.”

Inferencia:
Probablemente estaba lloviendo.

INTENCIÓN DEL AUTOR

Es el propósito con el que fue escrito el texto.

Puede ser:
- Informar
- Explicar
- Convencer
- Narrar
- Describir

TIPOS DE TEXTO

Narrativo:
Cuenta hechos o historias.

Descriptivo:
Describe personas, lugares, objetos o situaciones.

Expositivo:
Explica información de forma clara.

Argumentativo:
Defiende una opinión con razones.

CONSEJOS PARA EL EXAMEN

- Lee primero la pregunta.
- Identifica palabras clave.
- No respondas solo por memoria.
- Busca pistas dentro del texto.
- Diferencia entre opinión e información.
          `,
          ejemplo: `
EJEMPLO 1

Texto:
“El ejercicio físico ayuda a mejorar la salud, fortalece los músculos y reduce el estrés.”

Pregunta:
¿Cuál es la idea principal?

Respuesta:
El ejercicio físico ayuda a mejorar la salud.


EJEMPLO 2

Texto:
“María estudió toda la semana. El día del examen se veía tranquila y segura.”

Pregunta:
¿Qué se puede inferir?

Respuesta:
María se preparó bien para el examen.


EJEMPLO 3

Texto:
“Es importante reciclar porque reduce la contaminación y ayuda a cuidar los recursos naturales.”

Pregunta:
¿Cuál es la intención del autor?

Respuesta:
Convencer sobre la importancia de reciclar.


EJEMPLO 4

Texto:
“El volcán era enorme, con una cima cubierta de nieve y nubes alrededor.”

Pregunta:
¿Qué tipo de texto es?

Respuesta:
Descriptivo.
          `,
          video: "https://www.youtube.com/results?search_query=comprension+lectora+exani+ii"
        },
        preguntas: [
          { pregunta: "¿Qué es la idea principal de un texto?", opciones: ["El mensaje más importante", "Una palabra difícil", "El último párrafo siempre"], correcta: 0 },
          { pregunta: "¿Qué hacen las ideas secundarias?", opciones: ["Apoyan la idea principal", "Contradicen siempre al autor", "Eliminan información"], correcta: 0 },
          { pregunta: "¿Qué significa inferir?", opciones: ["Deducir información con pistas", "Copiar una oración", "Leer más rápido"], correcta: 0 },
          { pregunta: "¿Cuál puede ser la intención de un autor?", opciones: ["Informar o convencer", "Solo entretener", "Siempre confundir"], correcta: 0 },
          { pregunta: "¿Qué tipo de texto cuenta una historia?", opciones: ["Narrativo", "Expositivo", "Argumentativo"], correcta: 0 },
          { pregunta: "¿Qué tipo de texto defiende una opinión?", opciones: ["Argumentativo", "Descriptivo", "Narrativo"], correcta: 0 },
          { pregunta: "¿Qué tipo de texto explica información?", opciones: ["Expositivo", "Narrativo", "Poético"], correcta: 0 },
          { pregunta: "¿Qué ayuda a encontrar la respuesta correcta?", opciones: ["Buscar pistas en el texto", "Responder al azar", "Leer solo el título"], correcta: 0 },
          { pregunta: "Si un texto describe un lugar, ¿qué tipo de texto es?", opciones: ["Descriptivo", "Argumentativo", "Instructivo"], correcta: 0 },
          { pregunta: "¿Qué se debe identificar al leer?", opciones: ["Palabras clave", "Solo signos de puntuación", "El número de letras"], correcta: 0 }
        ]
      }
    ]
  },

  {
    id: "redaccion_indirecta_general",
    nombre: "Redacción Indirecta",
    temas: [
      {
        id: "coherencia_ortografia_general",
        titulo: "Coherencia, cohesión, ortografía y puntuación",
        tiempo: 420,
        contenido: {
          informacion: `
La redacción indirecta evalúa el uso correcto del lenguaje escrito. En el EXANI-II puede aparecer con preguntas donde se debe elegir la mejor forma de escribir una oración, corregir errores o mejorar un párrafo.

COHERENCIA

La coherencia significa que las ideas de un texto tengan sentido y se relacionen entre sí.

Un texto coherente:
- Tiene orden lógico
- No cambia de tema sin razón
- Presenta ideas claras
- Mantiene relación entre sus partes

Ejemplo incorrecto:
“Me gusta estudiar matemáticas. El perro corre rápido. Por eso aprobé el examen.”

No es coherente porque las ideas no se relacionan.

Ejemplo correcto:
“Me gusta estudiar matemáticas. Practico ejercicios todos los días. Por eso mejoré mi calificación.”

COHESIÓN

La cohesión es la unión entre ideas usando palabras adecuadas.

Se logra con conectores.

Conectores comunes:

Adición:
- además
- también
- asimismo

Contraste:
- pero
- sin embargo
- aunque

Consecuencia:
- por lo tanto
- por eso
- en consecuencia

Orden:
- primero
- después
- finalmente

ORTOGRAFÍA

La ortografía es escribir correctamente las palabras.

Ejemplos:
- también
- porque
- haber
- ahí
- hay
- ay

PUNTUACIÓN

Los signos de puntuación organizan las ideas.

Coma:
Separa elementos o pausas breves.

Punto:
Cierra una idea completa.

Punto y coma:
Separa ideas relacionadas, pero más largas.

Dos puntos:
Introducen ejemplos o explicaciones.

ACENTUACIÓN

Las palabras pueden llevar tilde según su pronunciación.

Ejemplos:
- canción
- árbol
- también
- fácil

CONCORDANCIA

Debe existir relación entre género y número.

Ejemplo incorrecto:
“Los alumno estudia.”

Ejemplo correcto:
“Los alumnos estudian.”
          `,
          ejemplo: `
EJEMPLO 1

Oración incorrecta:
“Los estudiante estudian para el examen.”

Error:
No hay concordancia.

Corrección:
“Los estudiantes estudian para el examen.”


EJEMPLO 2

Texto:
“Estudié toda la semana. Por eso, obtuve buena calificación.”

Conector:
“Por eso” indica consecuencia.


EJEMPLO 3

Oración:
“Me gusta leer escribir y estudiar.”

Corrección:
“Me gusta leer, escribir y estudiar.”


EJEMPLO 4

Palabra correcta:

“También”

Incorrectas:
“Tambien”
“Tanbien”


EJEMPLO 5

Oración incorrecta:
“Quería salir sin embargo estaba lloviendo.”

Corrección:
“Quería salir; sin embargo, estaba lloviendo.”
          `,
          video: "https://www.youtube.com/results?search_query=redaccion+indirecta+exani+ii"
        },
        preguntas: [
          { pregunta: "¿Qué evalúa la redacción indirecta?", opciones: ["Uso correcto del lenguaje", "Velocidad al leer", "Cálculo de áreas"], correcta: 0 },
          { pregunta: "¿Qué es la coherencia?", opciones: ["Relación lógica entre ideas", "Uso de colores", "Cantidad de palabras"], correcta: 0 },
          { pregunta: "¿Qué es la cohesión?", opciones: ["Unión entre ideas", "Separación de temas", "Lectura rápida"], correcta: 0 },
          { pregunta: "¿Cuál es un conector de contraste?", opciones: ["Sin embargo", "Además", "Primero"], correcta: 0 },
          { pregunta: "¿Cuál es un conector de consecuencia?", opciones: ["Por lo tanto", "Aunque", "También"], correcta: 0 },
          { pregunta: "¿Qué signo separa elementos en una lista?", opciones: ["Coma", "Punto final", "Signo de interrogación"], correcta: 0 },
          { pregunta: "¿Cuál palabra está bien escrita?", opciones: ["También", "Tambien", "Tanbien"], correcta: 0 },
          { pregunta: "¿Cuál oración tiene concordancia correcta?", opciones: ["Los alumnos estudian", "Los alumno estudian", "Los alumnos estudia"], correcta: 0 },
          { pregunta: "¿Qué hace el punto?", opciones: ["Cierra una idea completa", "Une números", "Elimina palabras"], correcta: 0 },
          { pregunta: "¿Qué palabra completa mejor: 'Estudié, ___ aprobé'?", opciones: ["por eso", "aunque", "pero"], correcta: 0 }
        ]
      }
    ]
  },

  {
    id: "pensamiento_matematico_general",
    nombre: "Pensamiento Matemático",
    temas: [
      {
        id: "razonamiento_problemas_general",
        titulo: "Razonamiento lógico, patrones y problemas matemáticos",
        tiempo: 480,
        contenido: {
          informacion: `
El pensamiento matemático evalúa la capacidad para resolver problemas usando lógica, operaciones básicas, patrones, proporciones y análisis de información.

En el EXANI-II no siempre se trata de aplicar una fórmula directa. Muchas veces primero se debe entender el problema, identificar los datos importantes y elegir la operación correcta.

RAZONAMIENTO LÓGICO

Es la habilidad para analizar información y llegar a una conclusión correcta.

Ejemplo:
Si todos los alumnos que estudian aprueban y Ana estudió, entonces Ana tiene mayor probabilidad de aprobar.

PATRONES NUMÉRICOS

Un patrón es una secuencia que sigue una regla.

Ejemplo:

2, 4, 6, 8, 10

La regla es sumar 2.

Otro ejemplo:

3, 6, 12, 24

La regla es multiplicar por 2.

OPERACIONES BÁSICAS

Las operaciones principales son:

- Suma
- Resta
- Multiplicación
- División

Se usan para resolver problemas cotidianos.

PROPORCIONES

Una proporción compara cantidades.

Ejemplo:

Si 2 lápices cuestan $10, entonces 4 lápices cuestan $20.

PORCENTAJES

Un porcentaje representa una cantidad de cada 100.

Ejemplo:

25% = 25/100 = 0.25

25% de 80 = 20

ECUACIONES SIMPLES

Una ecuación tiene una incógnita.

Ejemplo:

x + 5 = 12

Para encontrar x:

x = 12 - 5

x = 7

ANÁLISIS DE PROBLEMAS

Pasos recomendados:

1. Leer el problema completo.
2. Identificar los datos.
3. Identificar qué se pregunta.
4. Elegir la operación correcta.
5. Resolver paso a paso.
6. Revisar si la respuesta tiene sentido.
          `,
          ejemplo: `
EJEMPLO 1

Secuencia:

5, 10, 15, 20, __

La regla es sumar 5.

Respuesta: 25


EJEMPLO 2

Si 3 cuadernos cuestan $45, ¿cuánto cuestan 6?

3 → 45
6 → x

x = (6 × 45) / 3

x = 270 / 3

x = 90

Respuesta: $90


EJEMPLO 3

Resolver:

x + 8 = 20

x = 20 - 8

x = 12

Respuesta: x = 12


EJEMPLO 4

Calcular el 10% de 150.

10% = 0.10

0.10 × 150 = 15

Respuesta: 15


EJEMPLO 5

Un boleto cuesta $50. Si compro 4 boletos:

50 × 4 = 200

Respuesta: $200
          `,
          video: "https://www.youtube.com/results?search_query=pensamiento+matematico+exani+ii"
        },
        preguntas: [
          { pregunta: "¿Qué evalúa el pensamiento matemático?", opciones: ["Resolver problemas con lógica", "Memorizar textos", "Escribir ensayos"], correcta: 0 },
          { pregunta: "¿Qué sigue en la secuencia 2, 4, 6, 8?", opciones: ["10", "12", "9"], correcta: 0 },
          { pregunta: "¿Qué regla sigue 3, 6, 12, 24?", opciones: ["Multiplicar por 2", "Sumar 2", "Restar 3"], correcta: 0 },
          { pregunta: "Si x + 5 = 12, ¿cuánto vale x?", opciones: ["7", "5", "12"], correcta: 0 },
          { pregunta: "¿Cuánto es el 25% de 80?", opciones: ["20", "25", "40"], correcta: 0 },
          { pregunta: "Si 2 lápices cuestan 10, ¿cuánto cuestan 4?", opciones: ["20", "15", "25"], correcta: 0 },
          { pregunta: "¿Qué se debe hacer primero al resolver un problema?", opciones: ["Leerlo completo", "Responder rápido", "Ignorar datos"], correcta: 0 },
          { pregunta: "¿Cuál es una operación básica?", opciones: ["División", "Inferencia", "Descripción"], correcta: 0 },
          { pregunta: "¿Qué representa un porcentaje?", opciones: ["Una cantidad de cada 100", "Una oración", "Un tipo de texto"], correcta: 0 },
          { pregunta: "Si un boleto cuesta 50 y compras 4, ¿cuánto pagas?", opciones: ["200", "100", "150"], correcta: 0 }
        ]
      }
    ]
  }
]
};