const nonCommon = require('../challenges/challenge12')

describe("[NO COMUNES]", () => {
  test("En caso de ser iguales retorna los mismo", () => {
    expect(nonCommon('hola', 'hola')).toEqual(['', ''])
    expect(nonCommon('hi', 'hi')).toEqual(['', ''])
  });

  test("Deberia retornar un array con los comunes correctamente", () => {
    expect(nonCommon('comun', 'camino')).toEqual(['u', 'ai'])
    expect(nonCommon('hello', 'hermano')).toEqual(['l', 'rman'])
    expect(nonCommon('casa', 'campo')).toEqual(['s', 'mpo'])
    expect(nonCommon('java', 'script')).toEqual(['jav', 'script'])
    expect(nonCommon('comun', 'comunidad')).toEqual(['', 'ida'])
  });

});
