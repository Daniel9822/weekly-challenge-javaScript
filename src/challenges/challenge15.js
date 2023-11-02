/*
 * Reto #15
 * ¿ES UN NÚMERO DE ARMSTRONG?
 * Fecha publicación enunciado: 04/04/22
 * Fecha publicación resolución: 11/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe una función que calcule si un número dado es un número de Amstrong (o también llamado narcisista).
 * 
 * Un numero amstrong es un número que se puede expresar como la suma de los cubos de sus dígitos. Por ejemplo, 153 es un número Armstrong, ya que
 1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153.
 *
  Nota: en este ejemplo se eleva a 3 ya que es la longitud total del numero en si 
  si fuera 56 se elevarian todos los numeros a 2

 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const isArmstrong = (n) => {
  //code here
  if (typeof n !== 'number') {
    throw new Error('Debe ser un numero')
  }
  const digits = n.toString().split('')
  const totalDigits = digits.length

  const armstrong = digits.reduce((acc, value) => {
    return acc + Math.pow(value, totalDigits)
  }, 0)

  return armstrong === n
}

module.exports = isArmstrong