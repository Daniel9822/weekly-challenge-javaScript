const isAnagrama = require("../challenges/challenge2");

describe("[ANAGRAMA]", () => {
  test("Debe retornar false en caso de que las dos palabras sean iguales, sin tener en cuenta mayuscula y minuscula", () => {
    expect(isAnagrama("amor", "aMor")).toEqual(false);
    expect(isAnagrama("hola", "Hola")).toEqual(false);
  });

  test("Deberia retornar true si las palabras forman un anagrama", () => {
    expect(isAnagrama("amor", "roma")).toEqual(true);
    expect(isAnagrama("listen", "silent")).toEqual(true);
    expect(isAnagrama("elvis", "lives")).toEqual(true);
  });

  test("Deberia retornar false si las palabras no forman un anagrama", () => {
    expect(isAnagrama("amor", "coro")).toEqual(false);
    expect(isAnagrama("listen", "hola")).toEqual(false);
    expect(isAnagrama("elvis", "si")).toEqual(false);
  });
});
