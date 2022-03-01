import Value from "../value"
import Add from "./add"

describe('Add', () => {
    it('when resolving the operation should return the expected value', () => {
        const expression = new Add(new Value(1), new Value(0))
        expect(expression.result()).toEqual(1)
    })

    it('when converting the operation to its formula should return the expected formula', () => {
        const expression = new Add(new Value(1), new Value(0))
        expect(expression.toString()).toEqual('(1 + 0)')
    })
})