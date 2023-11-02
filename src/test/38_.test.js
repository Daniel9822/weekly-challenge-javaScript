const temperatureConverter = require('../challenges/challenge38')

describe('[ TEMPERATURE CONVERTER ]', () => {
  test('deberia retornar un error en caso que el parametro no sea valido', () => {
    expect(() => temperatureConverter('30')).toThrow()
    expect(() => temperatureConverter('40F')).toThrow()
    expect(() => temperatureConverter('2AC')).toThrow()
    expect(() => temperatureConverter('45A°C')).toThrow()
    expect(() => temperatureConverter()).toThrow()
  })

  test('Deberia convertir la temperatura de °F a °C', () => {
    expect(temperatureConverter('81°F')).toEqual('27°C')
    expect(temperatureConverter('49°F')).toEqual('9°C')
    expect(temperatureConverter('82°F')).toEqual('28°C')
  })
  test('Deberia convertir la temperatura de °C a °F', () => {
    expect(temperatureConverter('27°C')).toEqual('81°F')
    expect(temperatureConverter('9°C')).toEqual('48°F')
    expect(temperatureConverter('28°C')).toEqual('82°F')
  })
})
