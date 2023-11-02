/*
 * Reto #35
 * LOS NÚMEROS PERDIDOS
 * Fecha publicación enunciado: 22/08/22
 * Fecha publicación resolución: 29/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un array de enteros ordenado y sin repetidos, crea una función que calcule
 * y retorne todos los que faltan entre el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto o si no se pasa nada por parametro (el mensaje del error puede esta vacio).
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */

const lostNumbers = (numbers) => {
  // code here
  if (!Array.isArray(numbers)) throw new Error()

  const isNotValid = numbers.some((e) => typeof e !== 'number')
  if (isNotValid) throw new Error()

  const max = Math.max(...numbers)
  const min = Math.min(...numbers)
  const result = []

  for (let i = min + 1; i < max; i++) {
    if (!numbers.includes(i)) {
      result.push(i)
    }
  }
  return result
}

module.exports = lostNumbers
