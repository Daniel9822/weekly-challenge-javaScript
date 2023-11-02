const battleForTheMiddleEarth = require('../challenges/challenge36')

const army = {
  bondadosas: {
    pelosos: {
      power: 1,
      name: 'pelosos'
    },
    sureñosBuenos: {
      power: 2,
      name: 'sureñosBuenos'
    },
    enanos: {
      power: 3,
      name: 'enanos'
    },
    numeroreanos: {
      power: 4,
      name: 'numeroreanos'
    }
  },

  malvados: {
    sureñosMalos: {
      power: 2,
      name: 'sureñosMalos'
    },
    orcos: {
      power: 2,
      name: 'orcos'
    },
    goblins: {
      power: 2,
      name: 'globlins'
    },
    huargos: {
      power: 3,
      name: 'huargos'
    },
    trolls: {
      power: 5,
      name: 'trolls'
    }
  }
}
describe('[ BATTLE FOR THE MIDDLE EARTH ]', () => {
  test('En caso de que un ejercito se presente y el otro no, gana el que se presento', () => {
    const malvados = [army.malvados]
    expect(battleForTheMiddleEarth([], malvados)).toEqual('malvados')
    expect(battleForTheMiddleEarth([army.bondadosas], [])).toEqual('bondadosas')
  })

  test('deberia retornar el ganador de la batalla', () => {
    const {
      malvados: { goblins, orcos, huargos, sureñosMalos, trolls }
    } = army
    const {
      bondadosas: { pelosos, enanos, sureñosBuenos, numeroreanos }
    } = army

    const armyBondadosas = [
      { ...pelosos, amount: 2 }, //2
      { ...enanos, amount: 4 }, // 12
      { ...sureñosBuenos, amount: 4 } // 8
    ]

    const armyMalvados = [
      { ...goblins, amount: 1 }, //2
      { ...orcos, amount: 1 }, // 2
      { ...trolls, amount: 3 } // 15
    ]

    expect(
      battleForTheMiddleEarth(
        [{ ...numeroreanos, amount: 2 }],
        [
          { ...huargos, amount: 1 },
          { ...sureñosMalos, amount: 2 }
        ]
      )
    ).toEqual('bondadosas')
    expect(battleForTheMiddleEarth(armyBondadosas, armyMalvados)).toEqual(
      'bondadosas'
    )

    const armyMalvados2 = armyMalvados.map((ele) => {
      return {
        ...ele,
        amount: ele.amount + 2
      }
    })
    expect(battleForTheMiddleEarth(armyBondadosas, armyMalvados2)).toEqual(
      'malvados'
    )
  })

  test('En caso de un empate deberia retornar la palabra tie', () => {
    const {
      malvados: { orcos, trolls }
    } = army
    const {
      bondadosas: { sureñosBuenos, enanos }
    } = army

    expect(
      battleForTheMiddleEarth(
        [
          { ...sureñosBuenos, amount: 2 },
          { ...enanos, amount: 2 }
        ],
        [{ ...trolls, amount: 2 }]
      )
    ).toEqual('tie')
  })
})
