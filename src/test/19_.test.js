const checkTicTacToe = require('../challenges/challenge19')

const tictactoes = {
  game1: {
    matriz: [
      ['X', 'X', 'X'],
      ['X', 'O', 'O'],
      ['O', 'O', 'X']
    ],
    win: 'X'
  },
  game2: {
    matriz: [
      ['X', 'O', 'X'],
      ['X', 'O', 'O'],
      ['', 'O', 'X']
    ],
    win: 'O'
  },
  game3: {
    matriz: [
      ['X', 'O', 'X'],
      ['X', 'O', 'O'],
      ['X', 'O', 'X']
    ],
    win: 'X'
  },
  game4: {
    matriz: [
      ['X', 'O', 'O'],
      ['O', 'X', 'X'],
      ['X', 'O', 'O']
    ],
    win: 'empate'
  },
  game5: {
    matriz: [
      ['X', 'O', 'X'],
      ['O', 'O', 'O']
    ],
    win: null
  },
  game6: {
    matriz: [
      ['X', 'X', 'X'],
      ['X', 'O', 'O'],
      ['O', 'O', 'X']
    ],
    win: 'X'
  },
  game7: {
    matriz: [
      ['O', 'X', 'O'],
      ['O', 'X', 'X'],
      ['X', 'O', 'O']
    ],
    win: 'empate'
  },
  game8: {
    matriz: [
      ['X', 'O', 'O'],
      ['X', 'O', 'O'],
      ['O', 'X', 'X']
    ],
    win: 'O'
  },
}

describe('[TOC-TAC-TOE]', () => {
  test('Deberia retornal null en caso de que la matris no sea 3*3 o ganen los dos', () => {
    expect(checkTicTacToe(tictactoes.game5.matriz)).toEqual(null)
    expect(checkTicTacToe(tictactoes.game3.matriz)).toEqual(null)
  })

  test('En caso de que X gane deberia retornar X', () => {
    const { game1, game6 } = tictactoes
    expect(checkTicTacToe(game1.matriz)).toEqual('X')
    expect(checkTicTacToe(game6.matriz)).toEqual('X')
  })
  test('En caso de que O gane deberia retornar O', () => {
    const { game2, game8 } = tictactoes
    expect(checkTicTacToe(game2.matriz)).toEqual('O')
    expect(checkTicTacToe(game8.matriz)).toEqual('O')
  })
  test('En caso de que haber un empate debe retornar "empate"', () => {
    const { game4, game7 } = tictactoes
    expect(checkTicTacToe(game4.matriz)).toEqual('Empate')
    expect(checkTicTacToe(game7.matriz)).toEqual('Empate')
  })
})
