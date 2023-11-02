const areOrthogonal = require('../challenges/challenge26')

describe("[ORTHOGONAL]", () => {
  test("En caso de que alguno no sea un array debe devolver un error 'invalid type'", () => {
    expect(() => areOrthogonal({ hi: '' }, [])).toThrow('invalid type')
    expect(() => areOrthogonal([], { hi: 'true' })).toThrow('invalid type')
    expect(() => areOrthogonal(6, { hi: 'true' })).toThrow('invalid type')
  });

  test("Deberia devolver un null en caso de que los arrays no tengan la misma longitud", () => {
    expect(areOrthogonal([1, 0], [0])).toEqual(null)
    expect(areOrthogonal([1, 0], [0, 6, 7])).toEqual(null)
    expect(areOrthogonal([1, 0], [0, 4, 4])).toEqual(null)
  });

  test("Deberia retornar true en caso de que sean Ortogonal", () => {
    expect(areOrthogonal([1, 0], [0, 5])).toEqual(true)
    expect(areOrthogonal([0, 2], [6, 0])).toEqual(true)
  });

  test("Deberia retornr false en caso de que no sean Ortogonal", () => {
    expect(areOrthogonal([1, 0], [4, 5])).toEqual(false)
    expect(areOrthogonal([0, 6], [4, 5])).toEqual(false)
  });

});
