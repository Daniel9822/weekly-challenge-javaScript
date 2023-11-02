const timeToMillis = require('../challenges/challenge20')

describe('[TODO A MILISEGUNDOS]', () => {
  test('Debes verificar que no falte ningun parametro y retornar null en caso de', () => {
    expect(timeToMillis(10, 20)).toEqual(null)
    expect(timeToMillis(10, 20, 4)).toEqual(null)
    expect(timeToMillis(10, 1)).toEqual(null)
  })
  test("Debe retornar un error 'type error' cuando los parametros no son de tipo number", () => {
    expect(() => timeToMillis(10, '20', 1, 5)).toThrow('type error')
    expect(() => timeToMillis(10, 20, '4', 3)).toThrow('type error')
    expect(() => timeToMillis('10', '0', 1, 2)).toThrow('type error')
  })

  test('Deberia retornar los milisegundos exactos', () => {
    expect(timeToMillis(1, 2, 30, 45)).toBe(88365000)
    expect(timeToMillis(1, 12, 1, 1)).toBe(87181000)
    expect(timeToMillis(5, 10, 45, 30)).toBe(435330000)
  })
})
