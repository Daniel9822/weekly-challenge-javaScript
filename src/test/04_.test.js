const isPrimo = require("../challenges/challenge4");

describe("[NUMEROS PRIMOS]", () => {
  const primos = [2, 3, 5, 7, 11, 19, 23];
  const primos1 = [2, 3, 5, 7, 23];
  const primos3 = [2, 3, 5, -7, 23];

  test("Debe retornar true en el caso de que el numero sea primo", () => {
    expect(isPrimo(primos[0])).toEqual(true);
    expect(isPrimo(primos[1])).toEqual(true);
    expect(isPrimo(primos[2])).toEqual(true);
  });

  test("Debe retornar false en caso de que el numero no sea primo", () => {
    expect(isPrimo(6)).toEqual(false);
    expect(isPrimo(9)).toEqual(false);
    expect(isPrimo(20)).toEqual(false);
  });

  test("En caso de que el numero sea negativo debe retornar false", () => {
    expect(isPrimo(-5)).toEqual(null);
    expect(isPrimo(-2)).toEqual(null);
  });

  test("Si no se pasan parametros debes retornar null", () => {
    expect(isPrimo()).toEqual(null);
    expect(isPrimo()).toEqual(null);
  });

  test("En caso de recibir una array de numeros debes retornar el conteo de los numeros que son primos dentro de ese arreglo", () => {
    expect(isPrimo(primos)).toBe(primos.length);
    expect(isPrimo(primos1)).toEqual(primos1.length);
  });

  test("En caso de recibir una array de numeros y este contenga un numero negativo, retorna null", () => {
    expect(isPrimo(primos3)).toEqual(null);
  });
});
