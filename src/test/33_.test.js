const Queue = require('../challenges/challenge33')

describe('[ QUEUE ]', () => {
  let queue = null
  beforeAll(() => {
    queue = new Queue()
  })
  test("queue debe contar con los metodos 'enqueue' 'dequeue' y 'size'", () => {
    expect(typeof queue.size).toBe('function')
    expect(typeof queue.enqueue).toBe('function')
    expect(typeof queue.dequeue).toBe('function')
    expect(queue.stack).toEqual([])
  })

  test('enqueue deberia agregar el elemento en el orden correspondiente', () => {
    const element1 = 'hola'
    const element2 = { hi: undefined }

    queue.enqueue(element1)
    queue.enqueue(element2)
    expect(queue.stack).toHaveLength(2)
    expect(queue.stack[0]).toEqual(element1)
    expect(queue.stack[1]).toEqual(element2)
  })
  test('dequeue deberia eliminar el elemento en el orden correspondiente y retornarlo', () => {
    expect(queue.dequeue()).toEqual('hola')
    expect(queue.dequeue()).toEqual({ hi: undefined })
  })
  test('dequeue deberia retornar undefine en caso de que no haya elementos', () => {
    expect(queue.dequeue()).toEqual(undefined)
  })
  test('size deberia deberia retornar la cantidad de elementos que hay', () => {
    expect(queue.size()).toBe(0)
    queue.enqueue('klk')
    queue.enqueue('hola')
    queue.enqueue('Dany')

    expect(queue.size()).toBe(3)
  })
})
