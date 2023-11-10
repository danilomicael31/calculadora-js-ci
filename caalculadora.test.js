const { somar, subtrair } = require('./calculador')

describe('Teste da função somar', () => {
    test('deveria somar dois numeros inteiros', () => {
        expect(somar(2,3)).toBe(5);
        expect(somar(1,0)).toBe(1);
    });

    test('Deveria somar dois numeros inteiros negativos', () => {
        expect(somar(-1,-1)).toBe(-2);
    });
    test('Deveria subutrarir dois numeros inteiros', () => {
        expect(subtrair(2,1)).toBe(1);
        expect(subtrair(5,2)).toBe(3);
    })
});