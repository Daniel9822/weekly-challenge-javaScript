const decimalToBinary = require('../challenges/challenge37')

describe('[ DECIMAL TO BINARY ]', () => {
  test('deberia retornal null en caso de que el parametro este vacio o no sea un numero', () => {
    expect(decimalToBinary()).toEqual(null)
    expect(decimalToBinary('ho1340d')).toEqual(null)
  })

  test('Deberia retornar el numero decimal', () => {
    expect(decimalToBinary('111')).toBe(7)
    expect(decimalToBinary('010101')).toBe(21)
    expect(decimalToBinary('1010110101')).toBe(693)
  })

  test('En caso de recibir un array de numero debe retornar un array de decimales en orden', () => {
    expect(decimalToBinary(['111', '010101'])).toEqual([7, 21])
    expect(decimalToBinary(['111', '010101', '1010110101'])).toEqual([
      7, 21, 693
    ])
    expect(decimalToBinary(['111', '1010110101', '111', '010101'])).toEqual([
      7, 693, 7, 21
    ])
  })
})
