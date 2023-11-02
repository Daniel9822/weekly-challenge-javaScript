const aspectRatio = require('../challenges/challenge6')

const url1 =
  'https://raw.githubusercontent.com/mouredev/mouredev/master/mouredev_github_profile.png'

const url2 =
  'https://st.depositphotos.com/1016440/2534/i/950/depositphotos_25344733-stock-photo-sunrise-at-the-beach.jpg'

describe('[ASPECT-RADIO]', () => {
  test('Deberia retornar el aspect radio correcto al pasarle una url', async () => {
    const responseOne = await aspectRatio(url1)
    const responseTwo = await aspectRatio(url2)
    expect(responseOne).toBe(3.12)
    expect(responseTwo).toBe(1.50)
  })
  test('Si no se pasa una url deberia retornar null', async () => {
    expect(await aspectRatio()).toEqual(null)
    expect(await aspectRatio()).toEqual(null)
  })
})
