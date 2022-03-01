import BaseNode from "../base.node";

export default abstract class Operation extends BaseNode {
    constructor(protected readonly left: BaseNode, protected readonly right: BaseNode) {
        super()
    }
}