/*
 * Reto #11
 * CÓDIGO MORSE
 * Fecha publicación enunciado: 02/03/22
 * Fecha publicación resolución: 07/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que sea capaz de transformar texto natural a código morse y viceversa.
 * - Debe detectar automáticamente de qué tipo se trata y realizar la conversión.
 * - En morse se soporta raya "—", punto ".", un espacio " " entre letras o símbolos y dos espacios entre palabras "  ".
 * - El alfabeto morse soportado será el mostrado en https://es.wikipedia.org/wiki/Código_morse.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const morseCodeAlphabet = {
  A: '.-',
  B: '-...',
  C: '-.-.',
  D: '-..',
  E: '.',
  F: '..-.',
  G: '--.',
  H: '....',
  I: '..',
  J: '.---',
  K: '-.-',
  L: '.-..',
  M: '--',
  N: '-.',
  O: '---',
  P: '.--.',
  Q: '--.-',
  R: '.-.',
  S: '...',
  T: '-',
  U: '..-',
  V: '...-',
  W: '.--',
  X: '-..-',
  Y: '-.--',
  Z: '--..'
}

const morseCode = {}

for (const key in morseCodeAlphabet) {
  morseCode[morseCodeAlphabet[key]] = key
}

const decoder = (str) => {
  // code here
  if (morseCode.hasOwnProperty(str[0])) {
    return morseToText(str)
  }

  return textToMorse(str)
}

const morseToText = (str) => {
  const words = str.split(' ')
  let text = ''

  words.forEach((word, index) => {
    if (index > 0) text += ''
    if (word === '') text += ' '
    text += morseCode[word] ?? ''
  })

  return text
}

const textToMorse = (str) => {
  const words = str.split(' ')
  let morse = ''

  words.forEach((word, index) => {
    if (index > 0 && word !== '') morse += '  '

    word.split('').forEach((letter, index) => {
      if (index > 0 && letter !== '') morse += ' '

      morse += morseCodeAlphabet[letter.toUpperCase()]
    })
  })

  return morse
}

module.exports = decoder
