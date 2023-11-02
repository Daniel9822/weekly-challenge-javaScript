/*
 * Reto #16
 * ¿CUÁNTOS DÍAS?
 * Fecha publicación enunciado: 11/04/22
 * Fecha publicación resolución: 18/04/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const daysBetween = (date1, date2) => {
  //code here
  const regex = /^([0-9]){2}[/]([0-9]){2}[/]([0-9]){4}$/
  if (!regex.test(date1) || !regex.test(date2)) {
    throw new Error('Cadena de fecha no valida')
  }

  const check = validateDate(date1, date2)
  if (!check) {
    throw Error('Cadena de fecha no valida')
  }

  const unDia = 24 * 60 * 60 * 1000

  const fecha1Parts = date1.split('/').reverse().join('/')
  const fecha2Parts = date2.split('/').reverse().join('/')

  const fecha1Ms = new Date(fecha1Parts).getTime()
  const fecha2Ms = new Date(fecha2Parts).getTime()

  if (isNaN(fecha1Ms) || isNaN(fecha2Ms)) {
    throw new Error('Cadena de fecha no valida')
  }

  return Math.abs(Math.round((fecha1Ms - fecha2Ms) / unDia))
}

const validateDate = (d1, d2) => {
  const [dayOne, monthOne] = d1.split('/')
  const [dayTwo, monthTwo] = d2.split('/')

  const maxDay = 31
  const maxMonth = 12
  const febraryExect = 29

  if (dayOne > maxDay || dayTwo > maxDay) {
    return false
  }
  if (monthOne > maxMonth || monthTwo > maxMonth) {
    return false
  }

  if (
    (monthOne === '02' && Number(dayOne) > febraryExect) ||
    (monthTwo === '02' && Number(dayTwo) > febraryExect)
  ) {
    return false
  }

  return true
}

module.exports = daysBetween
