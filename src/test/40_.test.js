const mostRepeatedVowel = require('../challenges/challenge40')

describe('[ MOST REPEATED VOWEL ]', () => {
  test('debe retornal un error en caso que el parametro no sea un string o sea una cadena vacia', () => {
    expect(() => mostRepeatedVowel(123)).toThrow()
    expect(() => mostRepeatedVowel({})).toThrow()
    expect(() => mostRepeatedVowel([])).toThrow()
    expect(() => mostRepeatedVowel('')).toThrow()
  })

  test("deberia retornar la vocal que mas se repite", () => {
    expect(mostRepeatedVowel('aarerArRaaa')).toBe('a')
    expect(mostRepeatedVowel('reruuuyUurgg')).toBe('u')
    expect(mostRepeatedVowel('ERTRFtttttEEeeeee')).toBe('e')
    expect(mostRepeatedVowel('huooOhuyooO')).toBe('o')
    expect(mostRepeatedVowel('iiUiyyttggIikii')).toBe('i')
  });
  
})
