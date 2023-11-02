const mergeSort = require('../challenges/challenge32')

let array = [8, 56, 5, 4, 2, 1]
let array1 = [4, 5, 6, 9, 8, 1]
let array2 = [4, 3, 9, 2, 1, 10]

describe('[ MERGE SORT ]', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })
  test('no deberia usar metodos nativos de ordenamiento', () => {
    const arr = [1, 4, 6, 7, 2, 5, 20, 2, 0]
    Array.prototype.sort = jest.fn()
    mergeSort(arr)
    expect(Array.prototype.sort).not.toHaveBeenCalled()
  })

  test('deberia ordernar los numeros manera ascendente', () => {
    expect(mergeSort(array)).toEqual([1, 2, 4, 5, 8, 56])
    expect(mergeSort(array1)).toEqual([1, 4, 5, 6, 8, 9])
    expect(mergeSort(array2)).toEqual([1, 2, 3, 4, 9, 10])
  })

  test("deberia verificar que el parametro es un array en caso contrario retornar un error de tipo 'type error'", () => {
    expect(() => mergeSort({ hola: 1 })).toThrowError(TypeError, 'type error')
  })
})
