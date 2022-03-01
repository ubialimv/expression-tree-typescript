import Value from "../value"
import Subtract from "./subtract"

describe('Subtract', () => {
    it('when resolving the operation should return the expected value', () => {
        const expression = new Subtract(new Value(1), new Value(0))
        expect(expression.result()).toEqual(1)
    })

    it('when converting the operation to its formula should return the expected formula', () => {
        const expression = new Subtract(new Value(1), new Value(0))
        expect(expression.toString()).toEqual('(1 - 0)')
    })
})