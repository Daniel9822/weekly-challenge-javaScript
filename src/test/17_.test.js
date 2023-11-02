const capitalize = require('../challenges/challenge17');

describe("[CAPITALIZE]", () => {
  test("Debe retornar la frase con la primera letra de cada palabra en mayuscula", () => {
    expect(capitalize('hola que tal')).toEqual('Hola Que Tal');
    expect(capitalize('como estas')).toEqual('Como Estas');
    expect(capitalize('hoy ire a dormir temprano')).toEqual('Hoy Ire A Dormir Temprano');
    expect(capitalize('amo javascript')).toEqual('Amo Javascript');
    expect(capitalize('me gusta el cafe')).toEqual('Me Gusta El Cafe');
  });
  test("Debe asegurarte de que no tenga espacios extras", () => {
    expect(capitalize('hola   que tal')).toEqual('Hola Que Tal');
    expect(capitalize(' como  estas')).toEqual('Como Estas');
    expect(capitalize('amo  javascript  ')).toEqual('Amo Javascript');
  });

});
