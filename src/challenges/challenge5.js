/*
 * Reto #5
 * ÁREA DE UN POLÍGONO
 * Fecha publicación enunciado: 24/01/22
 * Fecha publicación resolución: 31/01/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea UNA ÚNICA FUNCIÓN (importante que sólo sea una) que sea capaz de calcular y retornar el área de un polígono.
 * - La función recibirá por parámetro sólo un polígono a la vez.
 * - Los polígonos soportados serán triángulo, cuadrado y rectángulo.
 * - retorna el cálculo del área de un polígono de cada tipo.
 *
 * Ejemplo:
 * poligono('triangle', 10, 5) -> 25
 * poligono('square', 10) -> 100
 * poligono('rectangle', 8, 4) -> 32
 
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const poligonoArea = (poligon, base, value2) => {
  const poligonsCalc = {
    triangle: (base * value2) / 2,
    rectangle: base * value2,
    square: base * base
  }

  return poligonsCalc[poligon]
}

module.exports = poligonoArea
