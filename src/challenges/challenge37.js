/*
 * Reto #37
 * BINARIO A DECIMAL
 * Fecha publicación enunciado: 19/09/22
 * Fecha publicación resolución: 27/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa se encargue de transformar un número binario a decimal sin utilizar
 * funciones propias del lenguaje que lo hagan directamente.
 *
 * la funcion recibe como parametro un binario este puede ser un array de binarios o un solo binario '111' ['111', '10110']
 *
 * En caso de recibir un array debes retornar un array con los decimales en el orden correspondiente
 *
 * En caso de ser un numero binario deberias retornar el resultado en numero '111' -> 7
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */

const decimalToBinary = (num) => {
  // code here

  const isArray = Array.isArray(num)
  if (isNaN(num) && !isArray) {
    return null
  }

  if (!isArray) {
    return decimal(num)
  }
  return num.map((n) => {
    return decimal(n)
  })
}

let decimal = (num) => {
  let sum = 0
  for (let i = 0; i < num.length; i++) {
    sum += num[i] * Math.pow(2, num.length - 1 - i)
  }
  return sum
}

module.exports = decimalToBinary
