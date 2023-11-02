const BinarySearchTree = require('../challenges/challenge31')

describe('[ BINARY SEARCH TREE ]', () => {
  let tree = null
  let array = []
  let testArray

  beforeAll(() => {
    tree = new BinarySearchTree(20)
    array = [1, 25, 40, 30, 60, 21, 15, 10, 5, 9, 35]
    testArray = []
  })

  test("Deberia tener los metodos 'insert' 'contains' 'size' 'depthFirstForEach' 'breadthFirstForEach'", () => {
    expect(typeof tree.insert).toBe('function')
    expect(typeof tree.contains).toBe('function')
    expect(typeof tree.size).toBe('function')
    expect(typeof tree.depthFirstForEach).toBe('function')
    expect(typeof tree.breadthFirstForEach).toBe('function')
  })

  test('Al ser instanceada deberia tener por defecto un value un nodo left y un nodo right', () => {
    expect(tree.value).toBe(20)
    expect(tree.left).toEqual(null)
    expect(tree.right).toEqual(null)
  })

  test('insert deberia insertar nodos de forma ordenada', () => {
    tree.insert(10)
    tree.insert(15)
    tree.insert(25)

    expect(tree.left.value).toBe(10)
    expect(tree.left.right.value).toBe(15)
    expect(tree.right.value).toBe(25)
  })

  test('insert deberia ignorar los valores iguales al valor con el que fue istanciada', () => {
    tree.insert(20)
    expect(tree.size()).toBe(4)
  })

  test('los nodes insertados deberian ser instancias de BinarySearchTree', () => {
    expect(tree.left instanceof BinarySearchTree).toBe(true)
  })

  test('contains retorna true si el valor esta en el arbol', () => {
    array.forEach((value) => {
      tree.insert(value)
    })

    array.forEach((v) => {
      expect(tree.contains(v)).toBe(true)
    })
  })

  test('contains retorna false cuando el valor no se encuentra en el arbol', () => {
    const newArray = array.reduce((acc, v) => {
      const newValue = v + 2
      acc.push(newValue)
      return acc
    }, [])

    newArray.forEach((v) => {
      expect(tree.contains(v)).toBe(false)
    })
  })

  test('size deberia devolver la cantidad exacta de todos los nodos', () => {
    expect(tree.size()).toBe(12)
  })

  test('Deberia calcular el size de forma recursiva sin una propiedad lenght', () => {
    const newTree = new BinarySearchTree(10)
    expect(Object.entries(newTree).length).toBe(3)
  })

  test('cuando depthFirstForEach es ejecutado sin ningun parametro corre in-order por defecto', () => {
    array.forEach((v) => {
      tree.insert(v)
    })

    tree.depthFirstForEach(function (val) {
      testArray.push(val)
    })
    expect(testArray).toEqual([1, 5, 9, 10, 15, 20, 21, 25, 30, 35, 40, 60])
    testArray = []

    tree.depthFirstForEach(function (val) {
      testArray.push(val)
    }, 'in-order')

    expect(testArray).toEqual([1, 5, 9, 10, 15, 20, 21, 25, 30, 35, 40, 60])
  })

  test('depthFirstForEach hace el recorrido en pre-order cuando es llamado con esa opcion', () => {
    testArray = []

    tree.depthFirstForEach(function (val) {
      testArray.push(val)
    }, 'pre-order')

    expect(testArray).toEqual([20, 10, 1, 5, 9, 15, 25, 21, 40, 30, 35, 60])
  })

  test('depthFirstForEach hace el recorrido en post-order cuando es llamado con esa opcion', () => {
    testArray = []

    tree.depthFirstForEach(function (val) {
      testArray.push(val)
    }, 'post-order')
    expect(testArray).toEqual([9, 5, 1, 15, 10, 21, 35, 30, 60, 40, 25, 20])
  })

  test('corre breadth-first cuando breadthFirstForEach() es ejecutado', () => {
    testArray = []

    tree.breadthFirstForEach(function (val) {
      testArray.push(val)
    })

    expect(testArray).toEqual([20, 10, 25, 1, 15, 21, 40, 5, 30, 60, 9, 35])
  })
})
