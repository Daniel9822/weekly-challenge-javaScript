const calculateSet = require('../challenges/challenge23')

const common = { 
  one: {
    part1: [1, 'hola', 'hey', 5, false],
    part2: ['hola', 5, 'klk', 'hi']
  },
  two: {
    part1: ['daniel', 'js', 'halo', 6],
    part2: ['hola', 5, 'js', 'hi']
  },
  three: {
    part1: ['a', 'dani', 'hey', 5, 9],
    part2: ['dani', 5, 'klk', 'a']
  }
}
describe('[ CALCULAR COMUN O NO COMUN ]', () => {
  const { one, two, three } = common

  test('Deberia retornar un array con los elementos comunes cuando el booleano sea true', () => {
    expect(calculateSet(one.part1, one.part2, true)).toEqual(['hola', 5])
    expect(calculateSet(two.part1, two.part2, true)).toEqual(['js'])
    expect(calculateSet(three.part1, three.part2, true)).toEqual([
      'a',
      'dani',
      5
    ])
  })

  test('Si el booleano es false debe retornar los elementos no comunes de los dos arrays', () => {
    expect(calculateSet(one.part1, two.part1, false)).toEqual([
      1,
      'hola',
      'hey',
      5,
      false,
      'daniel',
      'js',
      'halo',
      6
    ])
    expect(calculateSet(two.part1, two.part2, false)).toEqual([
      'daniel',
      'halo',
      6,
      'hola',
      5,
      'hi'
    ])
  })
})
