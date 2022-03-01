import Value from "../value"
import Divide from "./divide"

describe('Divide', () => {
    it('when resolving a division by 0 should return an error', () => {
        const expression = new Divide(new Value(1), new Value(0))
        expect(() => expression.result()).toThrow('division by 0')
    })

    it('when resolving the operation should return the expected value', () => {
        const expression = new Divide(new Value(2), new Value(1))
        expect(expression.result()).toEqual(2)
    })

    it('when converting the operation to its formula should return the expected formula', () => {
        const expression = new Divide(new Value(2), new Value(1))
        expect(expression.toString()).toEqual('(2 ÷ 1)')
    })
})