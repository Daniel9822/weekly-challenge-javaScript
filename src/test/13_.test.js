const isPalindromo = require('../challenges/challenge13')

describe('[PALINDROMO]', () => {
  test('Deberia devolver true en caso de que sea palindromo', () => {
    expect(isPalindromo('ana')).toEqual(true)
    expect(isPalindromo('somos')).toEqual(true)
    expect(isPalindromo('radar')).toEqual(true)
    expect(isPalindromo('salas')).toEqual(true)
    expect(isPalindromo('seres')).toEqual(true)
  })
  test('Deberia devolver false en caso de que no sea palindromo', () => {
    expect(isPalindromo('nadar')).toEqual(false)
    expect(isPalindromo('peliar')).toEqual(false)
    expect(isPalindromo('poner')).toEqual(false)
    expect(isPalindromo('apretar')).toEqual(false)
  })

  test('Debe retornar null en caso de pasar un argumento invalido o vacio', () => {
    expect(isPalindromo('')).toEqual(null)
    expect(isPalindromo()).toEqual(null)
    expect(isPalindromo(90)).toEqual(null)
  })
})
