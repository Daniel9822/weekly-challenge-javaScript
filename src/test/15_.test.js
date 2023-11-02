const isArmstrong = require('../challenges/challenge15')

describe('[ANSTRONG]', () => {
  test('Debe validar si el argumento pasado es un numero', () => {
    expect(() => isArmstrong('ho34')).toThrow('Debe ser un numero')
    expect(() => isArmstrong('25')).toThrow('Debe ser un numero')
  })

  test('Deberia retornar true si el numero es anstrong', () => {
    expect(isArmstrong(1)).toEqual(true)
    expect(isArmstrong(2)).toEqual(true)
    expect(isArmstrong(3)).toEqual(true)
    expect(isArmstrong(4)).toEqual(true)
    expect(isArmstrong(6)).toEqual(true)
    expect(isArmstrong(7)).toEqual(true)
    expect(isArmstrong(153)).toEqual(true)
    expect(isArmstrong(370)).toEqual(true)
  })

  test('Deberia retornar false cuando el numero no es anstrong', () => {
    expect(isArmstrong(123)).toEqual(false)
    expect(isArmstrong(400)).toEqual(false)
    expect(isArmstrong(789)).toEqual(false)
  })
})
