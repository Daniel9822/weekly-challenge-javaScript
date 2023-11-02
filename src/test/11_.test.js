const decoder = require('../challenges/challenge11')

describe('[CODIGO MORSE]', () => {
  test('Convertir texto a codigo morse', () => {
    expect(decoder('SOS')).toEqual('... --- ...')
    expect(decoder('HELLO WORLD')).toEqual(
      '.... . .-.. .-.. ---  .-- --- .-. .-.. -..'
    )
  })

  test('Manejar letras minusculas', () => {
    expect(decoder('hello')).toEqual('.... . .-.. .-.. ---')
  })

  test('Deberia ser el mismo resultado cuando las frases tienen mas de un espacio', () => {
    expect(decoder('HELLO    WORLD')).toEqual(
      '.... . .-.. .-.. ---  .-- --- .-. .-.. -..'
    )
  })

  test('Convertir codigo morsa a texto', () => {
    expect(decoder('... --- ...')).toEqual('SOS')
    expect(decoder('.... . .-.. .-.. ---')).toEqual('HELLO')
    expect(decoder('.... . .-.. .-.. ---  .-- --- .-. .-.. -..')).toEqual(
      'HELLO WORLD'
    )
  })
})
