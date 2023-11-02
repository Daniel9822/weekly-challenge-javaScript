const numberOfBoomerangs = require('../challenges/challenge39')

describe('[ NUMBERS OF BOOMERANGS ]', () => {
  test('Deberia retornar el numero de boomerangs qie encuentre', () => {
    expect(numberOfBoomerangs([1, 2, 1, 5, 6, 7, 6, 7])).toBe(3)
    expect(numberOfBoomerangs([8, 9, 8, 7, 6, 7, 4, 3, 4, 3])).toBe(4)
    expect(numberOfBoomerangs([9, 4, 3, 4])).toBe(1)
    expect(numberOfBoomerangs([9, 4, 3, 4, 5, 5, 5])).toBe(1)
  })

  test('En caso de no haber ninguno retorna null', () => {
    expect(numberOfBoomerangs([1, 4, 3, 5])).toEqual(null)
    expect(numberOfBoomerangs([1, 4, 5, 6])).toEqual(null)
    expect(numberOfBoomerangs([3, 5, 5, 6, 6, 4])).toEqual(null)
  })

  test('Debes validar que el parametro sea un array y que no este vacio en ese caso retorna null', () => {
    expect(numberOfBoomerangs({})).toEqual(null)
    expect(numberOfBoomerangs([])).toEqual(null)
    expect(numberOfBoomerangs('hi')).toEqual(null)
  })
})
