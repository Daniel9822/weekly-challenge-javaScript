const handlesDetector = require('../challenges/challenge42')

describe('[ HANDLE DETECTOR ]', () => {
  test('deberia retornar null en caso de que no se pase ningun parametro o no sea de tipo string', () => {
    expect(handlesDetector()).toEqual(null)
    expect(handlesDetector(1245)).toEqual(null)
    expect(handlesDetector({ hi: 45 })).toEqual(null)
  })

  test('En caso de que el texto contenga un handle usuario deberia reconocerlo', () => {
    expect(handlesDetector('hi @daniel')).toEqual({
      mentions: 1,
      tags: 0,
      webs: 0
    })
    expect(handlesDetector('hola @Henriquez, saludos @alex')).toEqual({
      mentions: 2,
      tags: 0,
      webs: 0
    })
  })

  test('En caso de haber tags deberia retornar el numero de tags que encuentre', () => {
    expect(handlesDetector('que tal? #tecnologia')).toEqual({
      mentions: 0,
      tags: 1,
      webs: 0
    })
    expect(handlesDetector('que tal? #tecnologia #programacion')).toEqual({
      mentions: 0,
      tags: 2,
      webs: 0
    })
  })

  test('En caso de haber webs deberia retornar el numero de webs que encuentre', () => {
    expect(handlesDetector('visita https://www.google.com')).toEqual({
      mentions: 0,
      tags: 0,
      webs: 1
    })
    expect(
      handlesDetector('visita https://www.google.com o www.goolge.com')
    ).toEqual({
      mentions: 0,
      tags: 0,
      webs: 2
    })
  })

  test("Deberia retornar el numero de hash, webs y tags que encuentre", () => {
    expect(handlesDetector('hola @dany que tal aqui mi nuevo hash #fullStack tambien visita la pagina web https://www.social.com')).toEqual({
      mentions: 1,
      tags: 1,
      webs: 1
    })
  });
  
})
