const fs = require('fs')
const path = require('path')
/*
 * Reto #22
 * CALCULADORA .TXT
 * Fecha publicación enunciado: 23/05/22
 * Fecha publicación resolución: 01/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones suma "+", resta "-", multiplicación "*" y división "/".
 * - El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const calculate = async (pathname) => {
  //code here
  const filePath = path.join(__dirname, pathname)

  const data = await fs.promises.readFile(filePath, 'utf-8')
  const lines = data.split('\r\n').map((line) => line.trim())
  const firt = lines[0]
  const last = lines[lines.length - 1]

  if (isNaN(firt) || isNaN(last)) {
    throw new Error('invalid expression')
  }

  const result = resolveExpression(lines)
  return result
}

const resolveExpression = (arr) => {
  return eval(arr.join(''))
}

module.exports = calculate
