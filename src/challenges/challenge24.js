/*
 * Reto #23
 * MÁXIMO COMÚN DIVISOR Y MÍNIMO COMÚN MÚLTIPLO
 * Fecha publicación enunciado: 07/06/22
 * Fecha publicación resolución: 13/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea dos funciones, una que calcule el máximo común divisor (MCD) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const greatestCommonDivisor = (n1, n2) => {
  //code here
  let max = Math.max(n1, n2)
  let min = Math.min(n1, n2)
  let residuo = max % min
  if (residuo === 0) return min
  return greatestCommonDivisor(min, residuo)

}


const leatCommonMultiple = (n1, n2) => {
  //code here
  return n1 * n2 / greatestCommonDivisor(n1, n2)

}

module.exports = {
  greatestCommonDivisor,
  leatCommonMultiple
}