
type Operator = '+' | '-' | 'x' | '÷';

type MappedOperations = {
    [x in Operator | 'default']: () => number | string;
};

export default class Node {    
    private readonly value: Operator | number;
    private readonly left: Node | undefined;
    private readonly right: Node | undefined;
    
    private readonly resultOperations: MappedOperations = {
        '+': () => this.left.result() + this.right.result(),
        '-': () => this.left.result() - this.right.result(),
        'x': () => this.left.result() * this.right.result(),
        '÷': () => this.left.result() / this.right.result(),
        'default': () => this.value
    }

    private readonly toStringOperations: MappedOperations = {
        '+': () => `(${this.left.toString()} + ${this.right.toString()})`,
        '-': () => `(${this.left.toString()} - ${this.right.toString()})`,
        'x': () => `(${this.left.toString()} x ${this.right.toString()})`,
        '÷': () => `(${this.left.toString()} ÷ ${this.right.toString()})`,
        'default': () => this.value.toString()
    }

    constructor(value: number)
    constructor(value: Operator, left: Node, right: Node)

    constructor(value: Operator | number, left?: Node, right?: Node) {
        this.value = value,
        this.left = left,
        this.right = right
    }

    result (): number {
        return this.evaluate(this.resultOperations)
    };

    toString (): string {
        return this.evaluate(this.toStringOperations)
    }

    private evaluate (obj: MappedOperations) {
        const method = obj[this.value] ?? obj.default
        return method()
    }
}