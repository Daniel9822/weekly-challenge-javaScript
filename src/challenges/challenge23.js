/*
 * Reto #23
 * CONJUNTOS
 * Fecha publicación enunciado: 01/06/22
 * Fecha publicación resolución: 07/06/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos array, un booleano y retorne un array.
 * - Si el booleano es verdadero buscará y retornará los elementos comunes de los dos array.
 * - Si el booleano es falso buscará y retornará los elementos no comunes de los dos array.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const calculateSet = (arr1, arr2, bool) => {
  //code here
  if (bool) {
    return arr1.reduce((acc, value) => {
      if (arr2.includes(value)) {
        acc.push(value)
      }

      return acc
    }, [])
  }
  const convine = Array.from(new Set(arr1.concat(arr2)))
  return convine.reduce((acc, value) => {
    if (!arr2.includes(value) || !arr1.includes(value)) {
      acc.push(value)
    }
    return acc
  }, [])

}

module.exports = calculateSet
