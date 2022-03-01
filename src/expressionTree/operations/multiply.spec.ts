import Value from "../value"
import Multiply from "./multiply"

describe('Multiply', () => {
    it('when resolving the operation should return the expected value', () => {
        const expression = new Multiply(new Value(1), new Value(0))
        expect(expression.result()).toEqual(0)
    })

    it('when converting the operation to its formula should return the expected formula', () => {
        const expression = new Multiply(new Value(1), new Value(0))
        expect(expression.toString()).toEqual('(1 x 0)')
    })
})