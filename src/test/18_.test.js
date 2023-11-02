const athleteState = require('../challenges/challenge18')

const tracks = {
  track1: {
    steps: ['run', 'run', 'run', 'jump', 'run', 'jump'],
    track: '___|_|',
    fail: '|__|'
  },
  track2: {
    steps: ['jump', 'run', 'run', 'jump', 'run', 'jump'],
    track: '|__|_|',
    fail: '__|_'
  }
}
describe('[MARATON]', () => {
  test('La funcion deberia retornar true si la atleta paso bien todos los opstaculos', () => {
    const {
      track1: { steps: stepOne, track: trackOne }
    } = tracks
    const {
      track2: { steps, track }
    } = tracks

    expect(athleteState(steps, track)).toBe(true)
    expect(athleteState(stepOne, trackOne)).toBe(true)
  })

  test('En caso que la atleta no haya dado un paso en falso retorna false', () => {
    const { track1, track2 } = tracks
    expect(athleteState(track1.steps, track1.fail)).toBe(false)
    expect(athleteState(track2.steps, track2.fail)).toBe(false)
  })
})
