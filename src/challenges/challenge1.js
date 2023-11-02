/*
 * EL FAMOSO "FIZZ BUZZ"
 * Fecha publicación enunciado: 27/12/21
 * Fecha publicación resolución: 03/01/22
 * Dificultad: FÁCIL
 * Enunciado: Escribe una funcion que retorne las palabras fizz, buzz, woof, segun corresponda:
 
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 * - Múltiplos de 3 de 5 y 7 a la vez por la palabra "fizzbuzzwoof".
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const fizzBuzz = (number) => {
  if (!number) return null
  const response = {
    3: 'fizz',
    5: 'buzz',
    7: 'woof'
  }

  let result = ''
  for (const key in response) {
    if (number % key === 0) {
      result += response[key]
    }
  }

  return result
}

module.exports = fizzBuzz
