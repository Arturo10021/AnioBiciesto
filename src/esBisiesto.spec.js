import  esBisiesto  from "./esBisiesto.js";

describe("Es Bisiesto", () => {
    it("Todos los años divisibles por  4 SON años bisiestos", () => {
        expect(esBisiesto(4)).toEqual(true);
    });

    it("Todos los años divisibles por 4 pero no por 100 SON años bisiestos", () => {
        expect(esBisiesto(4)).toEqual(true);
    });
    
});
