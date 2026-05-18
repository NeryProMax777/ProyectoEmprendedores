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
          video: "https://www.youtube.com/results?search_query=operaciones+basicas+ley+de+signos+exani+ii"
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
          video: "https://www.youtube.com/results?search_query=fracciones+porcentajes+regla+de+tres+exani+ii"
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
          video: "https://www.youtube.com/results?search_query=mcm+mcd+divisibilidad+exani+ii"
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
          video: "https://www.youtube.com/results?search_query=media+moda+mediana+estadistica+exani+ii"
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
          video: "https://www.youtube.com/results?search_query=probabilidad+basica+espacio+muestral+exani+ii"
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
          video: "https://www.youtube.com/results?search_query=tecnicas+de+conteo+permutaciones+combinaciones+exani+ii"
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