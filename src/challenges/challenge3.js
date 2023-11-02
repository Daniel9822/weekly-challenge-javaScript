/*
 * Reto #3
 * LA SUCESIÓN DE FIBONACCI
 * Fecha publicación enunciado: 10/01/22
 * Fecha publicación resolución: 17/01/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Escribe una funcion que retore la secuencia fibonacci segun el parametro pasado (number)
 * 
 * La serie Fibonacci se compone por una sucesión de números en la que el siguiente siempre es la suma de los dos anteriores.
 * 
 * EJEMPLO:
 * console.log(fibonacci(7)) [0, 1, 1, 2, 3, 5, 8]
 * console.log(fibonacci(8)) [0, 1, 1, 2, 3, 5, 8, 13]
 
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const fibonacci = (n, sequence = [0, 1]) => {
  if (n <= 2) return sequence

  const nextFib = sequence[sequence.length - 1] + sequence[sequence.length - 2]
  sequence.push(nextFib)

  return fibonacci(n - 1, sequence)
}

module.exports = fibonacci
