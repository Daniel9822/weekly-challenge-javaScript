/*
 * Reto #41
 * TRUCO O TRATO
 * Fecha publicación enunciado: 24/10/22
 * Fecha publicación resolución: 02/11/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Este es un reto especial por Halloween.
 * Debemos crear una funcion que recibe dos parametros (str, list) str indica si queremos realizar "Truco o Trato" y
 * un listado (array) de personas con las siguientes propiedades:
 * - Nombre de la niña o niño
 * - Edad
 * - Altura en centímetros
 *
 * Si las personas han pedido truco, la funcion retornará sustos (aleatorios)
 * siguiendo estos criterios:
 * - Un susto por cada 2 letras del nombre por persona
 * - Dos sustos por cada edad que sea un número par
 * - Tres sustos por cada 100 cm de altura entre todas las personas
 * - Sustos: 🎃 👻 💀 🕷 🕸 🦇
 *
 * Si las personas han pedido trato, la funcion retornará dulces (aleatorios)
 * siguiendo estos criterios:
 * - Un dulce por cada letra de nombre
 * - Un dulce por cada 3 años cumplidos hasta un máximo de 10 años por persona
 * - Dos dulces por cada 50 cm de altura hasta un máximo de 150 cm por persona
 * - Dulces: 🍰 🍬 🍡 🍭 🍪 🍫 🧁 🍩
 *
 * Ejemplo:
 *  let childrens = [
 *     {
 *        nombre: 'Daiana',
 *        edad: 4,
 *        altura: 60
 *     }
 *  ]
 *
 * trickOrTreat('trato', childrens) -> [ 🍪 🍫 🍬 🍡 🍭 🍪 🍫 🍩 🍰 ] 
 * la longitud es 9 ya que Daiana tiene 6 letras y es un dulce por cada letra,
 * por la edad son 1 dulces ya que tiene 4 y es un dulce por cada 3 años, 
 * y por altura serian 2 dulces 
 * ya que tiene 60 cm 
 * -> 6 + 1 + 2 = 9
 * 
 * Ojo en este caso es solo un niño, pero pueden haber mas en el array.
 
  Con el truco es la misma logica pero con algunas diferencias arriba puedes leer esa diferencias ⬆️

 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */

const trickOrTreat = (list, srt) => {
  //code here
  let allitems = 0
  let arrResult = []

  let giftsOrScares =
    srt === 'dulces'
      ? ['🍰', '🍬', '🍡', '🍭', '🍪', '🍫', '🧁', '🍩']
      : ['🎃', '👻', '💀', '🕷', '🕸', '🦇']

  if (srt === 'trato') {
    allitems = handleTreat(list)
  } else {
    allitems = handleTrick(list)
  }

  for (let i = 0; i < allitems; i++) {
    const ramdomIndex = Math.floor(Math.random() * giftsOrScares.length)
    arrResult.push(giftsOrScares[ramdomIndex])
  }
  return arrResult
}

const handleTrick = (list) => {
  let altura = 0
  const count = list.reduce((acc, value) => {
    let name = Math.floor(value.nombre.length / 2)
    let edad = value.edad % 2 === 0 ? 2 : 0
    altura += value.altura
    return acc + name + edad
  }, 0)
  return Math.floor(altura / 100) * 3 + count
}

const handleTreat = (list) => {
  return list.reduce((acc, value) => {
    let countName = value.nombre.length
    let edad = Math.floor(value.edad > 10 ? 10 / 3 : value.edad / 3)
    let altura = Math.floor(value.altura / 50) * 2
    return acc + countName + edad + altura
  }, 0)
}

module.exports = trickOrTreat
