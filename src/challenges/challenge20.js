/*
 * Reto #20
 * CONVERSOR TIEMPO
 * Fecha publicación enunciado: 09/05/22
 * Fecha publicación resolución: 16/05/22
 * Dificultad: FACIL
 *
 * Enunciado: Crea una función que reciba días, horas, minutos y segundos (como enteros) y retorne su resultado en milisegundos.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const timeToMillis = (dias, horas, minutos, segundos) => {
  //code here

  if (!dias || !horas || !minutos || !segundos) return null
  const checkeType = check({ dias, horas, minutos, segundos })
  if (!checkeType) throw new Error('type error')

  const days = dias * 24 * 60 * 60 * 1000
  const hours = horas * 60 * 1000
  const min = minutos * 60 * 1000
  const seg = segundos * 1000

  return days + hours + min + seg
}

const check = (arg) => {
  for (const key in arg) {
    if (typeof arg[key] !== 'number') {
      return false
    }
  }

  return true
}

module.exports = timeToMillis
