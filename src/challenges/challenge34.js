/*
 * Reto #32
 * EL SEGUNDO
 * Fecha publicación enunciado: 08/08/22
 * Fecha publicación resolución: 15/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un listado de números, encuentra el SEGUNDO más grande.
 * En caso de no recibir nada retorna null
 * No deberias usar metodos del lenguaje que resuelven el problema
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en https://retosdeprogramacion.com/semanales2022.
 *
 */

const findSecondGreater = (numbers) => {
  if (!numbers) return null

  let max = numbers[0]
  let second = 0

  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      second = max
      max = numbers[i]
    }
    if (numbers[i] > second && numbers[i] < max) {
      second = numbers[i]
    }
  }
  return second
}

module.exports = findSecondGreater
