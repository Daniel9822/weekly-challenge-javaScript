const daysBetween = require('../challenges/challenge16')


describe('obtenerDiferenciaEnDias', () => {
  test('debería devolver la diferencia correcta en días entre dos fechas válidas', () => {
    expect(daysBetween('01/01/2023', '05/01/2023')).toBe(4);
    expect(daysBetween('05/01/2023', '01/01/2023')).toBe(4);
    expect(daysBetween('01/01/2023', '01/01/2023')).toBe(0);
  });

  test('debería lanzar una excepción cuando se proporcionan cadenas de fecha no válidas', () => {
    expect(() => {
      daysBetween('31/02/2023', '05/01/2023');
    }).toThrow('Cadena de fecha no valida');

    expect(() => {
      daysBetween('01/13/2023', '05/01/2023');
    }).toThrow('Cadena de fecha no valida');

    expect(() => {
      daysBetween('cadena aleatoria', '05/01/2023');
    }).toThrow('Cadena de fecha no valida');
  });
});

