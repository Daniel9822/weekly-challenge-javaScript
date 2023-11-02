const products = require('../helpers/vendingMachine')
/*
 * Reto #27
 * MÁQUINA EXPENDEDORA
 * Fecha publicación enunciado: 11/07/22
 * Fecha publicación resolución: 18/07/22
 * Dificultad: MEDIA
 *
 * Enunciado: Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección del producto. 
 * Los productos se requiren arriba, tendras que buscar la forma de que las posiciones del objeto coincidan con los numeros pasados por parametros.
 * pista: Object.entries() 
 * 
 * - El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor
 *   número de monedas).
 * 
 * Ejemplo: vendingMachine(4, [100, 200, 10]) -> ['rice', [50, 200, 10]]
 * - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje 'error when making purchase'

 * - Si no hay dinero de vuelta, el array se retornará vacío con el nombre del producto. 

 * Ejemplo: vendingMachine(1, [50] -> ['water', []]

 * - Para que resulte más simple, trabajaremos en céntimos con monedas de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas. ⬆️
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const vendingMachine = (n, money) => {
  // code here
}

module.exports = vendingMachine
