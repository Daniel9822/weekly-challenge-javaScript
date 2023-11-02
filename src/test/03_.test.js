const fibonacci = require("../challenges/challenge3");

describe("[FIBONACCI]", () => {
  test("deberia retornar la secuencia correcta de fibonacci en un array segun el numero pasado por parametro", () => {
    const sequence7 = [0, 1, 1, 2, 3, 5, 8];
    const sequence8 = [0, 1, 1, 2, 3, 5, 8, 13];
    expect(fibonacci(7)).toEqual(sequence7);
    expect(fibonacci(8)).toEqual(sequence8);
  });
});
