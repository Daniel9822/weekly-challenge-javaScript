const calculate = require('../challenges/challenge22')

describe("[ CALCULADORA DE FICHEROS ]", () => {
  test("Debe calcular de forma correcta si el fichero es valido", async () => {
    expect(await calculate('../helpers/1.txt')).toBe(518)
    expect(await calculate('../helpers/2.txt')).toBe(38)
  });

  test("Si el archivo tiene expresiones invalidad deberia retornar un error 'invalid expression'", async () => {
    try {
      return await calculate('../helpers/3.txt');
    } catch (error) {
      expect(error.message).toEqual('invalid expression');
    }
  });

});
