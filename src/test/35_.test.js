const lostNumbers = require('../challenges/challenge35')

describe('[ LOST NUMBERS ]', () => {
  test('Lanza un error si el array de entrada no es valido (si contiene algo que no sea numero) o si no es proporcionado', () => {
    expect(() => lostNumbers()).toThrow()
    expect(() => lostNumbers([1, 'h', 4, 5])).toThrow()
    expect(() => lostNumbers([1, 4, 5, 'j'])).toThrow()
  })
  test('deberia retornar un array con los numeros faltantes entre el numero menor y el mayor', () => {
    expect(lostNumbers([1, 9])).toEqual([2, 3, 4, 5, 6, 7, 8])
    expect(lostNumbers([1, 9, 10, 11])).toEqual([2, 3, 4, 5, 6, 7, 8])
    expect(lostNumbers([3, 5, 7, 9, 15])).toEqual([4, 6, 8, 10, 11, 12, 13, 14])
    expect(lostNumbers([5, 10])).toEqual([6, 7, 8, 9])
  })
})
