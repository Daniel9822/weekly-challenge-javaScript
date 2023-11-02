const poligon = require("../challenges/challenge5");

describe("[POLIGONO]", () => {
  test("Deberia retornar el calculo exacto del triangulo", () => {
    expect(poligon("triangle", 10, 5)).toBe(25);
    expect(poligon("triangle", 20, 10)).toBe(100);
  });
  test("Deberia retornar el calculo exacto del cuadrado", () => {
    expect(poligon("square", 10)).toBe(100);
    expect(poligon("square", 20)).toBe(400);
  });
  test("Deberia retornar el calculo exacto del rectangulo", () => {
    expect(poligon("rectangle", 8, 4)).toBe(32);
    expect(poligon("rectangle", 10, 3)).toBe(30);
  });
});
