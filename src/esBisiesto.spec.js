import  esBisiesto  from "./esBisiesto.js";

describe("Es Bisiesto", () => {
    it("Todos los años divisibles por  4 SON años bisiestos", () => {
        const result = esBisiesto(4);
        expect(result).toEqual(true);
    });
});
