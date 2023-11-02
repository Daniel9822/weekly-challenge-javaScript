const isBalanced = require('../challenges/challenge9')

const expresions = [
  '{a + b [c] * (2x2)}}}}',
  '{ [ a * ( c + d ) ] - 5 }',
  '{ a * ( c + d ) ] - 5 }',
  '{a^4 + (((ax4)}',
  '{ ] a * ( c + d ) + ( 2 - 3 )[ - 5 }',
  '(a',
  '{{{{{{(}}}}}}'
]
describe('[BALANCED]', () => {
  test('Deberia poder deducir si la expresion esta balanceada o no', () => {
    expect(isBalanced(expresions[0])).toEqual(false)
    expect(isBalanced(expresions[1])).toEqual(true)
    expect(isBalanced(expresions[2])).toEqual(false)
    expect(isBalanced(expresions[3])).toEqual(false)
    expect(isBalanced(expresions[4])).toEqual(false)
    expect(isBalanced(expresions[5])).toEqual(false)
    expect(isBalanced(expresions[6])).toEqual(false)
  })
})

// {}{} } }{]]}