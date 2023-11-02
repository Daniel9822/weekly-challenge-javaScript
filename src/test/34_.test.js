const findSecondGreater = require('../challenges/challenge34')

describe('[ SEGUNDO NUMERO MAS GRANDE ]', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  test('En caso de que no se proporcione ningun parametro retorna null', () => {
    expect(findSecondGreater()).toEqual(null)
  })

  test('Deberia retornar el segundo numero mas grande de la lista', () => {
    expect(findSecondGreater([1, 4, 5, 7, 6, 7, 10, 9])).toBe(9)
    expect(findSecondGreater([1, 4, 2, 5])).toBe(4)
    expect(findSecondGreater([1,5,8,7])).toBe(7)
    expect(findSecondGreater([6,7,8,9])).toBe(8)
  })

  test("No deberias usar metodos del lenguaje que resuelvan el problema", () => {
    Math.max = jest.fn()
    Math.min = jest.fn()
    findSecondGreater([1,5,4])
    expect(Math.max).not.toHaveBeenCalled()
    expect(Math.min).not.toHaveBeenCalled()
    // const mockeMathMax = jest.spyOn(Math, 'max').mockImplementation(() => {
    //   throw new Error('no debe llamarse')
    // })

    // findSecondGreater([2,5,4])
    // mockeMathMax.mockRestore()
  });
  
})
