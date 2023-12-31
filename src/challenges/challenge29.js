/*
 * Reto #29
 * LISTAS ENLAZADAS
 * Fecha publicación enunciado: 26/10/23
 * Dificultad: DIFICIL
 *
 * Debemos implentar la clase o funcion contructora como te sientas comodo, con los siguientes metodos.
 * - insert: inserta un nuevo elemento al final de la lista
 * - remove: remueve el ultimo elemento de la lista
 * - search: recibe por argumento un valor el cual debe buscar en la lista y retornarlo. A search tambien le puede llegar una funcion como parametro, esta funcion retorna true si el valor coincide con lo que esta buscando tengo esecaso en cuenta.
 *
 * Nota:
 * - LinkedList debe tener la propiedad head en null por defecto.
 * - Debes crear una clase Node con las propiedad value (sera igual al valor que se le pasa a la hora de instanciarla) y una propiedad next que en principio es null.
 * - Utiliza la clase Node para insertar nuevos elementos y linkearlos atravez de la propiedad next
 *
 * Siempre puedes hecharle un ojo a los test para ver que se espera
 *
 *
 */

class LinkedList {
  constructor() {
    this.head = null
    this.length = 0
  }
}

class Node {
  constructor(value) {
    this.value = value
    this.next = null
  }
}

module.exports = { Node, LinkedList }
