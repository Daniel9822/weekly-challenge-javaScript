const {
  leatCommonMultiple,
  greatestCommonDivisor
} = require('../challenges/challenge24')

describe("[ MCD - MCM ]", () => {
  test("Deberia retornar el MCD correcto", () => {
    expect(greatestCommonDivisor(15, 10)).toBe(5)
    expect(greatestCommonDivisor(20, 50)).toBe(10)
    expect(greatestCommonDivisor(35, 80)).toBe(5)
    expect(greatestCommonDivisor(45, 60)).toBe(15)
  });
  test("Deberia retornar el MCM correcto", () => {
    expect(leatCommonMultiple(20, 30)).toBe(60)
    expect(leatCommonMultiple(15, 35)).toBe(105)
    expect(leatCommonMultiple(30, 50)).toBe(150)
    expect(leatCommonMultiple(45, 60)).toBe(180)
  });

});
