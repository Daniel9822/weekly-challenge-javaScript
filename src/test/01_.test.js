const fizzBuzz = require("../challenges/challenge1");

describe("[FIZZ-BUZZ]", () => {
  test("Deberia retornar fizz para los numeros multiplos de 3", () => {
    expect(fizzBuzz(3)).toBe("fizz");
    expect(fizzBuzz(6)).toBe("fizz");
    expect(fizzBuzz(12)).toBe("fizz");
  });

  test("Deberia retornar buzz para los numeros multiplos de 5", () => {
    expect(fizzBuzz(5)).toBe("buzz");
    expect(fizzBuzz(10)).toBe("buzz");
    expect(fizzBuzz(20)).toBe("buzz");
  });

  test("Deberia retornar fizzbuzz para los numeros multiplos de 5 y 3", () => {
    expect(fizzBuzz(105)).toBe("fizzbuzzwoof");
  });

  test("Deberia retornar fizzbuzzwoof para los numeros multiplos de 5, 3 y 8 ", () => {
    expect(fizzBuzz(15)).toBe("fizzbuzz");
    expect(fizzBuzz(30)).toBe("fizzbuzz");
    expect(fizzBuzz(45)).toBe("fizzbuzz");
  });

  test("En caso de no recibir nungun numero deberia retornar null", () => {
    expect(fizzBuzz()).toEqual(null);
    expect(fizzBuzz()).toEqual(null);
  });
});
