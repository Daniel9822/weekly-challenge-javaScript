/*
 * Reto #29
 * ORDENA LA LISTA
 * Fecha publicación enunciado: 18/07/22
 * Fecha publicación resolución: 26/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que ordene y retorne una matriz de números.
 * - La función recibirá un listado (por ejemplo [2, 4, 6, 8, 9]) y un parámetro adicional
 *   "Asc" o "Desc" para indicar si debe ordenarse de menor a mayor o de mayor a menor.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const sortList = (array, shape) => {
  // function aleatorio(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min)
  // }

  //[1, 4, 6, 8, 2]
  //    i
  //j
  // aux = 1

  // Selection sort
  for (let i = 0; i < array.length; i++) {
    let j = i - 1
    while (j >= 0 && array[j] > array[i] ) {
      const aux = array[i]
      array[i] = array[j]
      array[j] = aux
      i--
      j--
    }
  } 
  if (shape === 'Desc') {
    return array.reverse()
  }

  return array

  // QuickSort

  //   if(array.length === 0) return array
  //   let medio = aleatorio(0, array.length -1);
  //   let pivot = array[medio];
  //   let arrayLeft = [];
  //   let arrayRight = [];
  //   let arrayPivot = []

  //   array.forEach((element)=>{
  //    if(element === pivot){
  //     arrayPivot.push(element)
  //    }
  //    if(element !== pivot){
  //     if(element > pivot){
  //       arrayRight.push(element)
  //     } else{
  //       arrayLeft.push(element)
  //     }
  //   }
  // })

  //   arrayLeft = sortList(arrayLeft)
  //   arrayRight = sortList(arrayRight)

  //   if(shape === 'Desc') {
  //     return arrayLeft.concat(arrayPivot).concat(arrayRight).reverse();
  //   }
  //   return arrayLeft.concat(arrayPivot).concat(arrayRight)
}

module.exports = sortList
