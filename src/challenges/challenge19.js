/*
 * Reto #18
 * TRES EN RAYA
 * Fecha publicación enunciado: 02/05/22
 * Fecha publicación resolución: 09/05/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "null" si la proporción de "X", de "O", o de la matriz no es correcta. O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const checkTicTacToe = (tictactoe) => {
  //code here
  if (tictactoe.length < 3) return null
  const [top, meddle, bottom] = tictactoe

  const cases = [
    top,
    meddle,
    bottom,
    [top[0], meddle[0], bottom[0]],
    [top[1], meddle[1], bottom[1]],
    [top[2], meddle[2], bottom[2]],
    [top[0], meddle[1], bottom[2]],
    [top[2], meddle[1], bottom[0]]
  ]

  let winners = []
  cases.forEach((element) => {
    const winer = checkRows(element)
    if (winer) winners.push(winer)
  })

  const twoWinners = winners.length === 2 && winners[0] !== winners[1]
  if (!winners?.length) return 'Empate'
  return twoWinners ? null : winners[0]
}

const checkRows = (row) => {
  const firt = row[0]
  const checkEquals = row.every((ele) => {
    return ele === firt
  })

  return checkEquals ? firt : false
}

module.exports = checkTicTacToe
