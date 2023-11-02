/*
 * Reto #31
 * BINARY SEARCH TREE
 * Fecha publicación enunciado: 26/10/23
 * Dificultad: DIFICIL
 *
 * Debemos implentar un arbor de busqueda binaria (BinarySearchTree), esta clase debe contar con tres propiedades por defecto -> (value, left, right) value sera el valor que reciba por parametro y los demas se inicializan en null.
 * trabajaremos con numeros, en un Binary search los valores deben estar ordenados por defecto siendo que los mayores que el valor raiz ( value con el que fue instanciado ) van al nodo derecho, y los menores al nodo izquierdo.
 *
 * BinarySeachTree debe tener los siguentes metodos:
 *
 * insert: inserta un nuevo nodo al arbol, este nuevo nodo debe ser instancia de la clase BinarySearchTree.
 *
 * contains: recibe un value por parametro y retorna true si ese valor se encuentra en el arbol y false si no se encuentra
 *
 * size: retorna el size del arbol de forma recursiva, ( toma en cuenta que el arbol es instanciado con un valor, por lo que nunca esta vacio, minimo tiene un nodo)
 *
 * depthFirstForEach: recibe una funcion y un order (cb, order) el order determina de que manera se recorrera el arbol y la cb la deberas ejecutar para imprimir esos valores (por detras hace un push a un array para verificar si el recorrido esta bien)
 *  - posibles recorridos
 *   -> in-order: (izquierda- raiz - derecha) si no se especifica un valor en el parametro order debe correr in-order por defecto
 *  - pre-order: (raiz- izquierda- derecha)
 *  - post-order (izquierda - derecha - raiz)
 *
 * breadthFirstForEach: este metodo recorre el árbol siguiendo el orden breadth first (BFS)
 * Nota:
 * - Puedes usar clases o funciones constructoras usando el prototipe como te sientas como.
 * para el metodo size deberas hacerlo sin poner una propiedad length o cualquier otra que te lo facilite en la clase BinarySeachTree 🏃🏼‍♂️
 * Siempre puedes hecharle un ojo a los test para ver que se espera
 * el metodo breadthFirstForEach es un extra mira bien los test y ve si puedes lograr solucionarlo 🧡
 *
 */

function BinarySearchTree(value) {
  this.value = value
  this.left = null
  this.right = null
}

BinarySearchTree.prototype.insert = function (value) {
  if (value > this.value) {
    if (!this.right) {
      this.right = new BinarySearchTree(value)
    } else {
      this.right.insert(value)
    }
  }

  if (value < this.value) {
    if (!this.left) {
      this.left = new BinarySearchTree(value)
    } else {
      this.left.insert(value)
    }
  }
}

BinarySearchTree.prototype.contains = function (value) {
  if (value === this.value) return true

  if (value > this.value) {
    if (!this.right) return false
    else {
      return this.right.contains(value)
    }
  }

  if (value < this.value) {
    if (!this.left) return false
    else {
      return this.left.contains(value)
    }
  }
}

BinarySearchTree.prototype.size = function () {
  let count = 1
  if (this.left) {
    count += this.left.size()
  }

  if (this.right) {
    count += this.right.size()
  }

  return count
}
BinarySearchTree.prototype.depthFirstForEach = function (cb, order) {
  //in-order (left- root - right) defect
  //pre-order: (root- left- right)
  //'post-order' (izquierda - derecha - root)
  if (!order || order === 'in-order') {
    if (this.left) this.left.depthFirstForEach(cb, order)
    cb(this.value)
    if (this.right) this.right.depthFirstForEach(cb, order)
  } else if (order === 'pre-order') {
    cb(this.value)
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (this.right) this.right.depthFirstForEach(cb, order)
  } else {
    if (this.left) this.left.depthFirstForEach(cb, order)
    if (this.right) this.right.depthFirstForEach(cb, order)
    cb(this.value)
  }
}
BinarySearchTree.prototype.breadthFirstForEach = function (cb, array = []) {
  cb(this.value)
  if (this.left) {
    array.push(this.left)
  }
  if (this.right) {
    array.push(this.right)
  }

  if (array.length > 0) {
    array.shift().breadthFirstForEach(cb, array)
  }
}

module.exports = BinarySearchTree
