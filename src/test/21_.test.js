const asynSuma = require('../challenges/challenge21')

describe('[ SUMA ASINCRONA ]', () => {
  test('Deberia sumar dos numeros de forma asyncrona', async () => {
    // expect.assertions(1);
    const startTime = new Date().getTime()
    const secondsToWait = 3000 // Cambia el valor si es necesario

    const result = await asynSuma(1, 2, secondsToWait)
    const endTime = new Date().getTime()
    const timeDiff = endTime - startTime
    expect(result).toBe(3)
    expect(timeDiff).toBeGreaterThanOrEqual(secondsToWait)

    const result2 = await asynSuma(10, 20, secondsToWait + 2000)
    const endTime2 = new Date().getTime()
    const timeDiff2 = endTime2 - (secondsToWait + 2000)
    expect(result2).toBe(30)
    expect(timeDiff2).toBeGreaterThanOrEqual(secondsToWait + 2000)
  }, 10000)
})
