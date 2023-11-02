const { LinkedList, Node } = require('../challenges/challenge29')

describe('[LISTA ENLAZADA]', () => {
  let linkedList
  beforeAll(function () {
    linkedList = new LinkedList()
  })
  test("Deberia terner los metodos 'insert' 'search' 'remove'", () => {
    expect(typeof linkedList.insert).toBe('function')
    expect(typeof linkedList.search).toBe('function')
    expect(typeof linkedList.remove).toBe('function')
  })

  test('empiezan head como null', function () {
    expect(linkedList.hasOwnProperty('head')).toBe(true)
    expect(linkedList.head).toBeFalsy()
    expect(linkedList.remove()).toBeFalsy()
  })

  test('Tiene una funcion contructora Node para representar los nodos', () => {
    expect(typeof Node).toBe('function')
  })

  test('La clase node debe recibir un valor como argumento y setear el next en null por defecto', () => {
    let node = new Node('hola')
    expect(node.value).toEqual('hola')
    expect(node.next).toEqual(null)
  })

  test('LinkedList deberia usar la clase node para agregar nodos atravez del metodo insert', () => {
    linkedList.insert('hola')
    expect(linkedList.head instanceof Node).toBe(true)
  })

  test('insert agrega nodos enlazandolo entre ellos atravez del next', () => {
    linkedList.insert('klk')
    linkedList.insert('hi')

    expect(linkedList.head.value).toBe('hola')
    expect(linkedList.head.next.value).toBe('klk')
    expect(linkedList.head.next.next.value).toBe('hi')
    expect(linkedList.head.next.next.next).toBe(null)
  })

  test('remove deberia retornar null si la lista esta vacia', function () {
    linkedList.remove()
    linkedList.remove()
    linkedList.remove()
    expect(linkedList.remove()).toBeFalsy()
  })

  test('remove deberia sacar el ultimo nodo ingresado y devolver su valor', () => {
    linkedList.insert('hola')
    linkedList.insert('Daniel')

    expect(linkedList.remove()).toBe('Daniel')
    expect(linkedList.remove()).toBe('hola')
  })

  test('el head deberia ser null cuando se sacan todos los nodos', function () {
    expect(linkedList.remove()).toBeFalsy()
    linkedList.insert('one')
    expect(linkedList.remove()).toBe('one')
    expect(linkedList.remove()).toBeFalsy()
    expect(linkedList.head).toBeFalsy()
  })

  test('search deberia buscar el valor y retornarlo', () => {
    linkedList.insert('hello')
    linkedList.insert('hey')
    linkedList.insert('klk')
    linkedList.insert('Henriquez')
    expect(linkedList.search('hello')).toBe('hello')
    expect(linkedList.search('blala')).toBe(null)
    expect(linkedList.search('hey')).toBe('hey')
    expect(linkedList.search('Henriquez')).toBe('Henriquez')
  })

  test('search deberia porder tomar funciones como search input', () => {
    linkedList.insert('test')
    expect(
      linkedList.search(function (name) {
        return name === 'test'
      })
    ).toBe('test')
  })

  test('deberia poder buscar por lo tanto no solo strings si no tambien objetos', () => {
    class User {
      constructor(name, email, city) {
        this.name = name
        this.email = email
        this.city = city
      }
    }

    linkedList.insert(
      new User('Daniel', 'Daniel@h.com', 'Republica Dominicana')
    )
    linkedList.insert(new User('Alex', 'alex@ho.com', 'Israel'))
    linkedList.insert(new User('jhon', 'jhon@yc.com', 'Puerto Rico'))

    expect(
      linkedList.search(function (userNode) {
        return userNode.name === 'Daniel'
      })
    ).toHaveProperty('name', 'Daniel')

    expect(
      linkedList.search(function (userNode) {
        return userNode.email === 'alex@ho.com'
      }).city
    ).toBe('Israel')

    expect(
      linkedList.search(function (userNode) {
        return userNode.city === 'Puerto Rico'
      }).name
    ).toBe('jhon')
  })
})
