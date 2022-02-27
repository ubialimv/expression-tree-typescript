import flattenArray from './flatten-array';

describe('flatten-array', () => {
    it('given a flat array should return a flat array', () => {
        const arr = [1,2,3];
        const flat = flattenArray([1,2,3]);
        expect(flat).toEqual(arr);
    })

    it('given a nested array should return a flag array', () => {
        const arr = [[1,[2,[3]]]];
        const flat = flattenArray(arr);
        expect(flat).toEqual([1,2,3]);
    })
})