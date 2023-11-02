/*
 * Reto #12
 * ELIMINANDO CARACTERES
 * Fecha publicación enunciado: 14/03/22
 * Fecha publicación resolución: 21/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const nonCommon = (str1, str2) => {
  // code here
  if (str1 === str2) return ['', '']

  const findNonCommon = (str1, str2) => {
    let nonCommonLetters = '';
    const lettersMap = {};

    for (let i = 0;i < str1.length;i++) {
      const char = str1[i];
      if (!lettersMap[char]) {
        lettersMap[char] = true;
      }
    }

    for (let j = 0;j < str2.length;j++) {
      const char = str2[j];
      if (!lettersMap[char] && !nonCommonLetters.includes(char)) {
        nonCommonLetters += char;
      }
    }

    return nonCommonLetters;
  };

  return [findNonCommon(str2, str1), findNonCommon(str1, str2)]

}

module.exports = nonCommon
