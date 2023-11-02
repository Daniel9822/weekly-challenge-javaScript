const HachTable = require('../challenges/challenge30')

describe('[ HASH TABLE ]', () => {
  let hashTable = null
  beforeAll(() => {
    hashTable = new HachTable()
  })
  test("Deberia tener los metodos 'hash' 'set' 'get' y 'hasKey'", () => {
    expect(typeof hashTable.hash).toBe('function')
    expect(typeof hashTable.set).toBe('function')
    expect(typeof hashTable.get).toBe('function')
    expect(typeof hashTable.hasKey).toBe('function')
  })

  test('HashTable deberia tener la propiedad buckets por defecto', () => {
    expect(hashTable.buckets).toEqual([])
  })
  test('HashTable deberia tener la propiedad numBuckets y deberia iniciarse en 35', () => {
    expect(hashTable.numBuckets).toBe(35)
  })

  test('hash deberia retornar la suma de los key code de las letras de las palabras', () => {
    expect(hashTable.hash('hola')).toBe(0)
    expect(hashTable.hash('daniel')).toBe(26)
    expect(hashTable.hash('alex')).toBe(6)
    expect(hashTable.hash('pee')).toBe(34)
    expect(hashTable.hash('listo')).toBe(30)
  })

  test('Deberia poder guardar y buscar valores por key', () => {
    hashTable.set('moure', 'dev')
    hashTable.set('dani', 'dev1')
    hashTable.set('midu', 'dev2')
    hashTable.set('rd', 'dev3')

    expect(hashTable.get('moure')).toEqual('dev')
    expect(hashTable.get('dani')).toEqual('dev1')
    expect(hashTable.get('midu')).toEqual('dev2')
    expect(hashTable.get('rd')).toEqual('dev3')
  })

  test("set deberia dar un typeError 'invalid type' si la key no es un string", () => {
    expect(() => hashTable.set(45)).toThrowError(
      TypeError,
      'Keys must be strings'
    )
  })

  test('Deberia manejar coliciones', () => {
    hashTable.set('dani', 'henriquez')
    hashTable.set('inad', 'dev')
    hashTable.set('moure', 'dev')
    hashTable.set('eruom', 'youtuber')

    expect(hashTable.get('dani')).toEqual('henriquez')
    expect(hashTable.get('inad')).toEqual('dev')
    expect(hashTable.get('moure')).toEqual('dev')
    expect(hashTable.get('eruom')).toEqual('youtuber')
  })

  test('get retorna null en caso de que la key no exista dentro del buckets', () => {
    expect(hashTable.get('afffff')).toEqual(null)
  })

  test('Deberia poder sobreescribir keys', () => {
    hashTable.set('cord', 'hola')
    hashTable.set('cord', 'que tal')

    expect(hashTable.get('cord')).toEqual('que tal')
  })

  test('hasKey devuelve un booleano siendo true si la key esta, y false si no', () => {
    hashTable.set('oof', 'val1')
    hashTable.set('siiiii', 'cristiano')
    hashTable.set('mesi', 'el mejor')

    expect(hashTable.hasKey('oof')).toBe(true)
    expect(hashTable.hasKey('siiiii')).toBe(true)
    expect(hashTable.hasKey('mesi')).toBe(true)
    expect(hashTable.hasKey('foo')).toBe(false)
    expect(hashTable.hasKey('isem')).toBe(false)
  })
})
