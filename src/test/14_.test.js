const { factorial } = require('../challenges/challenge14')

describe('[FACTORIAL]', () => {
  test('Debes validar que el argumento exista y retornal null en caso de que no ', () => {
    expect(factorial()).toEqual(null)
  })

  test('Deberia retornar el factorial del numero dado', () => {
    expect(factorial(0)).toBe(1)
    expect(factorial(1)).toBe(1)
    expect(factorial(2)).toBe(2)
    expect(factorial(3)).toBe(6)
    expect(factorial(4)).toBe(24)
    expect(factorial(5)).toBe(120)
    expect(factorial(6)).toBe(720)
    expect(factorial(7)).toBe(5040)
  })
})
