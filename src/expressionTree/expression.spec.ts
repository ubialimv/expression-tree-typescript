import Expression from './expression'

describe('Expression Tree', () => {
    describe('complex expression tree with several nodes', () => {
        const tree = new Expression(
            '÷',
            new Expression(
              '+',
              new Expression(7),
              new Expression('x', new Expression('-', new Expression(3), new Expression(2)), new Expression(5))
            ),
            new Expression(6)
        );

        it('given a expression tree when result is called should resolver the expression and return the value', () => {       
            expect(tree.result()).toEqual(2);
        })
    
        it('given a expression tree when toString is called should return the formula expression', () => {       
            expect(tree.toString()).toEqual('((7 + ((3 - 2) x 5)) ÷ 6)');
        })
    })

    describe('simple expression tree', () => {
        const expression = new Expression(1)

        it('given a expression tree when result is called should return the value of the expression' , () => {
            expect(expression.result()).toEqual(1)
        })

        it('given a expression tree when toString is called should return the value of the expression in string' , () => {
            expect(expression.toString()).toEqual('1')
        })
    })

    describe('expression with division by 0', () => {
        const expression = new Expression('÷', new Expression(1), new Expression(0))

        it('given an expression with division by 0 should return 0' , () => {
            expect(expression.result()).toEqual(0)
        })
    })
    
})