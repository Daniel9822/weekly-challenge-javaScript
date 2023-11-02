const reverseStr = require('../challenges/challenge7')

const cadenas = {
  1: {
    str: 'hola mundo',
    result: 'aloh odnum'
  },
  2: {
    str: 'que tal',
    result: 'euq lat'
  },
  3: {
    str: 'como estas',
    result: 'omoc satse'
  }
}

describe('[REVERTIR CADENA]', () => {
  test('La funcion reverseStr deberia revertir las cadenas de forma correcta', () => {
    expect(reverseStr(cadenas[1].str)).toEqual(cadenas[1].result)
    expect(reverseStr(cadenas[2].str)).toEqual(cadenas[2].result)
    expect(reverseStr(cadenas[3].str)).toEqual(cadenas[3].result)
  })
})
