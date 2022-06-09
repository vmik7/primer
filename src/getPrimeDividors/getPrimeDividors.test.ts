import { getPrimeDividors } from 'getPrimeDividors/getPrimeDividors';

describe('getPrimeDividors', () => {
    it('should works with 0', () => {
        expect(getPrimeDividors(0)).toEqual([]);
    });

    it('should works with 1', () => {
        expect(getPrimeDividors(1)).toEqual([]);
    });

    it('should works with 2', () => {
        expect(getPrimeDividors(2)).toEqual([2]);
    });

    it('should works with 5', () => {
        expect(getPrimeDividors(5)).toEqual([5]);
    });

    it('should works with 10', () => {
        expect(getPrimeDividors(10)).toEqual([2, 5]);
    });

    it('should works with 12', () => {
        expect(getPrimeDividors(12)).toEqual([2, 2, 3]);
    });

    it('should works with 1428', () => {
        expect(getPrimeDividors(1428)).toEqual([2, 2, 3, 7, 17]);
    });
});
