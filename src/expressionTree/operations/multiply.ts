import Operation from "."

export default class Multiply extends Operation {
    result(): number {
        return this.left.result() * this.right.result()
    }

    toString(): string {
        return `(${this.left.toString()} x ${this.right.toString()})`
    }
}