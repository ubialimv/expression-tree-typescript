import Operation from "."

export default class Add extends Operation {
    result(): number {
        return this.left.result() + this.right.result()
    }

    toString(): string {
        return `(${this.left.toString()} + ${this.right.toString()})`
    }
}