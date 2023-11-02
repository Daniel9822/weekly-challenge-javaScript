const countWords = require('../challenges/challenge8')

const words = {
  1: {
    word: 'holrrrrsss',
    res: { h: 1, o: 1, l: 1, r: 4, s: 3 }
  },
  2: {
    word: 'heeethhhtedff',
    res: { h: 4, e: 4, t: 2, d: 1, f: 2 }
  },
  3: {
    word: 'HeEethHhteDfF',
    res: { h: 4, e: 4, t: 2, d: 1, f: 2 }
  },
  4: {
    word: 'hOLRRrrSss',
    res: { h: 1, o: 1, l: 1, r: 4, s: 3 }
  }
}
describe('[COUNT-WORDS]', () => {
  test('Deberia poder contar de manera exacta cuantas veces se repitre cada letra', () => {
    expect(countWords(words[1].word)).toEqual(words[1].res)
    expect(countWords(words[2].word)).toEqual(words[2].res)
  })

  test('No deberia diferenciar entre mayusculas y minusculas', () => {
    expect(countWords(words[3].word)).toEqual(words[3].res)
    expect(countWords(words[4].word)).toEqual(words[4].res)
  })
})
