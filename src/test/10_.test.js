const decimalToBinary = require('../challenges/challenge10')

describe('[DECIMAL A BINARIO]', () => {
  test('Deberia retornar false en caso de recibir numeros negativos', () => {
    expect(decimalToBinary(-32)).toEqual(false)
    expect(decimalToBinary(-2)).toEqual(false)
    expect(decimalToBinary(-3)).toEqual(false)
    expect(decimalToBinary(-45)).toEqual(false)
  })

  test('Debe retornar el numero binario correspondiente al decimal que se le pasa', () => {
    expect(decimalToBinary(10)).toBe(1010)
    expect(decimalToBinary(25)).toBe(11001)
    expect(decimalToBinary(47)).toBe(101111)
    expect(decimalToBinary(128)).toBe(10000000)
  })

  test("En caso de no recibir nungun argumento debe retornal false", () => {
    expect(decimalToBinary()).toEqual(false)
  });

})
