/*
* Reto #29
 * LISTAS ENLAZADAS
 * Fecha publicación enunciado: 26/10/23
 * Dificultad: MEDIA
 * 
 
Implementa la clase Queue, sabiendo que es una estructura de tipo FIFO, donde el primer elemento que ingresa es el primero en salir. Definir los siguientes métodos:
  - enqueue: agrega un valor respetando el orden.
  - dequeue: remueve un valor respetando el orden. Retorna undefined cuando la queue está vacía.
  - size: retorna el tamaño (cantidad de elementos) de la queue.

Debes tener una propiedad 'stack' en el constructor donde se guarden los elementos
Pueden utilizar class o función constructora.
*/

class Queue {
  constructor() {
    this.stack = []
    this._length = 0
  }

  enqueue(value) {
    this.stack.push(value)
    this._length++
  }

  dequeue() {
    if (this._length === 0) {
      return undefined
    }
    this._length--
    return this.stack.shift()
  }

  size() {
    return this._length
  }
}

module.exports = Queue
