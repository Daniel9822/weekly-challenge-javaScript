/*
 * Reto #38
 * CONVERSOR DE TEMPERATURA
 * Fecha publicación enunciado: 17/10/22
 * Fecha publicación resolución: 24/10/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que transforme grados Celsius en Fahrenheit y viceversa.
 * - Para que un dato de entrada sea correcto debe poseer un símbolo "°" y su unidad ("C" o "F").
 * - En caso contrario retornará un error.
 * - ¿Quieres emplear lo aprendido en este reto?
 *   Revisa el reto mensual y crea una App: https://retosdeprogramacion.com/mensuales2022
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */

const temperatureConverter = (temperature) => {
  //code here
  const verify = temperature.endsWith('°C') || temperature.endsWith('°F')
  const number = Number(temperature.split('°').shift())

  if (!temperature || !verify || isNaN(number)) {
    throw new Error()
  }

  const convert = {
    '°C': (num) => {
      const cal = (num * 9) / 5 + 32
      return Math.round(cal) + '°F'
    },
    '°F': (num) => {
      const cal = ((num - 32) * 5) / 9
      return Math.round(cal) + '°C'
    }
  }

  const end = temperature.slice(-2)
  return convert[end](number)
}

module.exports = temperatureConverter
