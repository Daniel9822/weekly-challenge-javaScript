/*
 * Reto #40
 * VOCAL MÁS COMÚN
 * Fecha publicación enunciado: 21/11/22
 * Fecha publicación resolución: 28/11/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un función que reciba un texto y retorne la vocal que más veces se repita.
 * - Ten cuidado con algunos casos especiales.
 * - Si no hay vocales podrá devolver vacío.
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */

const mostRepeatedVowel = (str) => {
  //code here

  if (typeof str !== 'string' || !str) {
    throw new Error()
  }

  let vowels = {
    a: 0,
    e: 0,
    i: 0,
    o: 0,
    u: 0
  }

  let toLowel = str.toLowerCase()
  for (let i in toLowel) {
    if (vowels.hasOwnProperty(toLowel[i])) {
      vowels[toLowel[i]]++
    }
  }
  const values = Object.values(vowels)
  const max = Math.max(...values)
  return ['a', 'e', 'i', 'o', 'u'][values.findIndex((e) => e === max)]
}

module.exports = mostRepeatedVowel
