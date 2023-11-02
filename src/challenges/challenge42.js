/*
 * Reto #42
 * EL DETECTOR DE HANDLES
 * Fecha publicación enunciado: 05/12/22
 * Fecha publicación resolución: 12/12/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que sea capaz de detectar y retornar todos los handles de un texto usando solamente Expresiones Regulares.
 * Debes crear una expresión regular para cada caso:
 * - Handle usuario: Los que comienzan por "@"
 * - Handle hashtag: Los que comienzan por "#"
 * - Handle web: Los que comienzan por "www.", "https://" y finalizan con un dominio (.com, .es...)
 *
 * Ejemplo:
 * handleDetector('hey @Daniel9822 viste mi web https://miweb.com #programacion') ->
 * respuesta: { mentions: 1, tags: 1, webs: 1 }
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */

const handlesDetector = (handles) => {
  //code here
}

module.exports = handlesDetector
