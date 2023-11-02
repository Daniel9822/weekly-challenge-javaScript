/*
 * Reto #32
 * MERGE SORT
 * Fecha publicación enunciado: 26/10/23
 * Dificultad: MEDIA
 *
 * Debemos implentar la funcion merge sort, esta resibe como parametro un array de numeros (enteros) y debe retorna ese array ordenado de forma ascendente.
 * 
 * debes acegurarte de que el parametro es un array, si no lo es retorna un error de tipo "type error" 
 *
 * Nota:
 * - no debes utilizar metodos nativos de js para el ordenamiento ❌ sort
 * Siempre puedes hecharle un ojo a los test para ver que se espera
 *
 */

const mergeSort = (arr) => {
  if (!Array.isArray(arr)) throw TypeError('type error')

  if (arr.length === 0) return arr
  const medium = Math.floor(arr.length / 2)
  const pivot = arr[medium]

  let arrayLeft = []
  let arrayRight = []

  arr.forEach((value) => {
    if (value !== pivot) {
      if (value > pivot) {
        arrayRight.push(value)
      } else {
        arrayLeft.push(value)
      }
    }
  })

  arrayLeft = mergeSort(arrayLeft)
  arrayRight = mergeSort(arrayRight)

  return arrayLeft.concat(pivot).concat(arrayRight)
}

module.exports = mergeSort
