import someExpression from './some.expression'

describe('Some expression', () => {
    it('given a expression when result is called should resolver the expression and return the value', () => {     
        const result = someExpression.result()  
        expect(result).toEqual(2);
    })

    it('given a expression tree when toString is called should return the formula expression', () => {      
        const formula = someExpression.toString()  
        expect(formula).toEqual('((7 + ((3 - 2) x 5)) ÷ 6)');
    })
    
})