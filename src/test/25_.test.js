const rockScissorsPaper = require('../challenges/challenge25')
const plays = {
  playerOne: {
    winOne: [
      ['R', 'S'],
      ['S', 'P'],
      ['P', 'S']
    ],
    winTwo: [
      ['S', 'P'],
      ['P', 'P'],
      ['P', 'R']
    ]
  },
  playerTwo: {
    winOne: [
      ['S', 'S'],
      ['P', 'S'],
      ['R', 'P']
    ],
    winTwo: [
      ['S', 'R'],
      ['S', 'R'],
      ['P', 'R']
    ]
  },
  tie: {
    tieOne: [
      ['R', 'S'],
      ['P', 'S'],
      ['P', 'P']
    ],
    tieTwo: [
      ['R', 'R'],
      ['S', 'P'],
      ['P', 'S']
    ]
  }
}
describe('[PIEDRA PAPEL O TIJERA]', () => {
  test('Deberia retornar player 1 en caso de que gane', () => {
    const {
      playerOne: { winOne, winTwo }
    } = plays

    expect(rockScissorsPaper(winOne)).toEqual('player 1')
    expect(rockScissorsPaper(winTwo)).toEqual('player 1')
  })

  test('Deberia retornar player 2 en caso de que gane', () => {
    const {
      playerTwo: { winOne, winTwo }
    } = plays

    expect(rockScissorsPaper(winOne)).toEqual('player 2')
    expect(rockScissorsPaper(winTwo)).toEqual('player 2')
  })

  test("En caso de haber un empate debe retornar la 'tie'", () => {
    const {
      tie: { tieOne, tieTwo }
    } = plays

    expect(rockScissorsPaper(tieOne)).toEqual('tie')
    expect(rockScissorsPaper(tieTwo)).toEqual('tie')
  })
  test('En caso de que las jugadas no sean validas retorna un null', () => {
    expect(
      rockScissorsPaper([
        ['T', 'S'],
        ['S', 'P'],
        ['P', 'Y']
      ])
    ).toEqual(null)
    expect(
      rockScissorsPaper([
        ['J', 'F'],
        ['E', 'T'],
        ['P', 'S']
      ])
    ).toEqual(null)
  })
})
