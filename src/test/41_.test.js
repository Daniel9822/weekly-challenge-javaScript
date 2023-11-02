const trickOrTreat = require('../challenges/challenge41')

class Person {
  constructor(nombre, edad, altura) {
    this.nombre = nombre
    this.edad = edad
    this.altura = altura
  }
}

describe('[ TRICK OR TREAT ]', () => {
  test('Deberia retornar un array con todos los dulces que llevaron', () => {
    expect(
      trickOrTreat(
        [
          new Person('Daniel', 10, 100),
          new Person('Daniela', 11, 180),
          new Person('Odalis', 14, 150)
        ],
        'trato'
      )
    ).toHaveLength(44)
    expect(
      trickOrTreat(
        [
          new Person('Alexander', 4, 50),
          new Person('Sthefany', 9, 100),
          new Person('Yadriel', 5, 60)
        ],
        'trato'
      )
    ).toHaveLength(37)
    expect(trickOrTreat([new Person('Daiana', 4, 60)], 'trato')).toHaveLength(9)
  })
  test('Deberia retornar un array con todos los trucos que llevaron', () => {
    expect(
      trickOrTreat(
        [
          new Person('Daniel', 10, 100),
          new Person('Daniela', 11, 180),
          new Person('Odalis', 14, 150)
        ],
        'truco'
      )
    ).toHaveLength(25)
    expect(
      trickOrTreat(
        [
          new Person('Alexander', 4, 50),
          new Person('Sthefany', 9, 100),
          new Person('Yadriel', 5, 60)
        ],
        'truco'
      )
    ).toHaveLength(19)
  })
})
