import BaseNode from "./base.node"

export default class Value extends BaseNode {
    constructor(private readonly value: number) {
        super()
    }

    result(): number {
        return this.value
    }

    toString(): string {
        return this.value.toString()
    }
}