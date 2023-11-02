/*
 * Reto #25 
 * PIEDRA, PAPEL, TIJERA
 * Fecha publicación enunciado: 20/06/22
 * Fecha publicación resolución: 27/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [["R","S"], ["S","R"], ["P","S"]]. Resultado: "Player 2".
 * En caso de que alguna jugada no sea valida retorna un null
 * - Ejemplo. [['J', 'F'],['P', 'R'],['P', 'S']] -> null ya que J no representa nada en pidra papel y tijera
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const rockScissorsPaper = (plays) => {
  //code here
  let playerOne = 0
  let playerTwo = 0

  const cases = {
    P: 'R',
    R: 'S',
    S: 'P'
  }

  for (let i = 0;i < plays.length;i++) {
    const play = cases[plays[i][0]]
    const play2 = cases[plays[i][1]]

    if (!play || !play2) return null

    if (plays[i][1] === play) playerOne += 1
    if (plays[i][0] === play2) playerTwo += 1
  }

  const tie = playerOne === playerTwo
  const winner = playerOne > playerTwo ? 'player 1' : 'player 2'

  return tie ? 'tie' : winner
}

module.exports = rockScissorsPaper
