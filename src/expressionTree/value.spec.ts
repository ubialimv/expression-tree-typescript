import Value from "./value"

describe('Value', () => {
    it('when result is called should return the value', () => {
        const value = new Value(1)
        expect(value.result()).toEqual(1)
    })

    it('when toString is called should return the string value', () => {
        const value = new Value(1)
        expect(value.toString()).toEqual('1')
    })
})