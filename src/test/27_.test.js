const vendingMachine = require('../challenges/challenge27')

describe("[VENDING MACHINE]", () => {
  test("Si la moneda no es soportada deberia retornar un error 'currency not supported'", () => {
    expect(() => vendingMachine(1, [1000, 44, 50, 5])).toThrow('currency not supported')
    expect(() => vendingMachine(2, [10, 3003, 550, 5])).toThrow('currency not supported')
  });

  test("Si el dinero es insuficiente o el producto no existe deberia devolver un error con el mensaje 'error when making purchase'", () => {
    expect(() => vendingMachine(10, [5, 10])).toThrow('error when making purchase')
    expect(() => vendingMachine(1, [5, 5])).toThrow('error when making purchase')
    expect(() => vendingMachine(0, [5, 10])).toThrow('error when making purchase')
  });

  test("En caso de que la compra sea exitosa y no sobre dinero, debe retornar un array vacio", () => {
    expect(vendingMachine(1, [50])).toEqual(['water', []])
    expect(vendingMachine(0, [10, 5, 5])).toEqual(['milk', []])
    expect(vendingMachine(2, [50, 50])).toEqual(['cheese', []])
  });

  test("Debe retornar las monedas restantes con el nombre del producto despues de una compra", () => {
    expect(vendingMachine(4, [100, 200, 10])).toEqual(['rice', [50, 200, 10]])
    expect(vendingMachine(1, [100, 5])).toEqual(['water', [50, 5]])
    expect(vendingMachine(3, [100, 50, 10])).toEqual(['jelly', [90, 50, 10]])
  });


});
