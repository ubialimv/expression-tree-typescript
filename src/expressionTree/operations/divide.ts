import Operation from "."

export default class Divide extends Operation {
    result(): number {
        if (this.right.result() === 0) throw new Error('division by 0');
        
        return this.left.result() / this.right.result() 
    }

    toString(): string {
        return `(${this.left.toString()} ÷ ${this.right.toString()})`
    }
}