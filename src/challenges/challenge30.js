/*
 * Reto #30
 * HASH TABLE
 * Fecha publicación enunciado: 26/10/23
 * Dificultad: DIFICIL
 *
 * Debemos implentar la clase HashTable, debe contar con las propiedades numBuckets = 35 (numero total del almacenamiento) y la propiedad buckets = [] (donde se guardaran los valores) 
 * HashTable debe terner los siguientes metodos.
 * 
 * - hash: debe realizar la suma de los key code de las palabras (investigar sobre el metodo charCodeAt) y retornar la suma modulo (%) de numBuckets para no pasarse de largo.

 * - set: recibe dos valores separados (key, value) debe guardarlo en la posicion especifica en el buckets depediendo del valor que retorne el metodo hash con la key. debemos verificar si la key es un string y si no retornar un error de tipo 'Keys must be strings'

 * - get: recibe una key por parametro y retorna el valor que esta almacenado en esa posicion del buckets

 * hasKey: recibe una key y retorna true si esta se encuentra almacenada en el buckets y false en caso de que no este.
 *
 * Nota:
 * - Puedes usar clases o funciones constructoras usando el prototipe como te sientas como.
 * Siempre puedes hecharle un ojo a los test para ver que se espera
 *
 */

class HachTable {
  constructor() {
    this.buckets = []
    this.numBuckets = 35
  }
}

module.exports = HachTable
