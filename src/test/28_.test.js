const sortList = require('../challenges/challenge28')

describe('[SORT LIST]', () => {
  test('Deberia ordenar de manera ascendente cuando el parametro es Asc', () => {
    expect(sortList([4, 6, 1, 8, 2], 'Asc')).toEqual([1, 2, 4, 6, 8])
    expect(sortList([9, 5, 3, 2, 7], 'Asc')).toEqual([2, 3, 5, 7, 9])
    expect(sortList([5, 6, 6, 2, 1], 'Asc')).toEqual([1, 2, 5, 6, 6])
  })
  test('Deberia ordenar de manera ascendente cuando el parametro es Desc', () => {
    expect(sortList([4, 6, 1, 8, 2], 'Desc')).toEqual([8, 6, 4, 2, 1])
    expect(sortList([9, 5, 3, 2, 7], 'Desc')).toEqual([9, 7, 5, 3, 2])
    expect(sortList([5, 6, 6, 2, 1], 'Desc')).toEqual([6, 6, 5, 2, 1])
  })
})
