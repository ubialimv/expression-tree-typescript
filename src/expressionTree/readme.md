# Part 2 – Refactoring an expression tree

⏱ We estimate that this should take 30 to 60 minutes, but please take as much or as little time as you need.

Apply your knowledge of good software design principles to refactor and improve the design of this code.
Feel free to change anything in the file as part of your refactoring, apart from the final assertions 
that consume the tree.

```js script
const assert = require("assert");

const Node = (operator, value, left, right) => {
  const result = function () {
    switch (this.operator) {
      case "+":
        return left.result() + right.result();
      case "-":
        return left.result() - right.result();
      case "x":
        return left.result() * right.result();
      case "÷":
        return left.result() / right.result();
      default:
        return value;
    }
  };

  const toString = function () {
    switch (this.operator) {
      case "+":
        return `(${left.toString()} + ${right.toString()})`;
      case "-":
        return `(${left.toString()} - ${right.toString()})`;
      case "x":
        return `(${left.toString()} x ${right.toString()})`;
      case "÷":
        return `(${left.toString()} ÷ ${right.toString()})`;
      default:
        return value.toString();
    }
  };

  return {
    operator,
    value,
    left,
    right,
    result,
    toString
  };
};

const tree = Node(
  "÷",
  null,
  Node(
    "+",
    null,
    Node("", 7, null, null),
    Node(
      "x",
      null,
      Node("-", null, Node("", 3, null, null), Node("", 2, null, null)),
      Node("", 5, null, null)
    )
  ),
  Node("", 6, null, null)
);

assert.strictEqual("((7 + ((3 - 2) x 5)) ÷ 6)", tree.toString());
assert.strictEqual(2, tree.result());
```