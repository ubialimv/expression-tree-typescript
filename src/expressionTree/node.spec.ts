import Node from './node'

describe('node', () => {
    describe('complex expression tree with several nodes', () => {
        const tree = new Node(
            '÷',
            new Node(
              '+',
              new Node(7),
              new Node('x', new Node('-', new Node(3), new Node(2)), new Node(5))
            ),
            new Node(6)
        );

        it('given a expression tree when result is called should resolver the expression and return the value', () => {       
            expect(tree.result()).toEqual(2);
        })
    
        it('given a expression tree when toString is called should return the formula expression', () => {       
            expect(tree.toString()).toEqual('((7 + ((3 - 2) x 5)) ÷ 6)');
        })
    })

    describe('simple node', () => {
        const node = new Node(1)

        it('given a node when result is called should return the value of the node' , () => {
            expect(node.result()).toEqual(1)
        })

        it('given a node when toString is called should return the value of the node in string' , () => {
            expect(node.toString()).toEqual('1')
        })
    })
    
})