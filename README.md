# guru code challenge
The implementations are located in the src folder.

## flattenArray
An algorithm to flatten an arbitrarily nested array of values.


## expressionTree
Expressions available:
- Add
- Subtract
- Divide
- Multiply
- Value

Available methods:
- result(): Try ro resolve the expression returning a number
- toString(): Return the formula in a string format

How to create an expression:
```js script
const expression = new Add(new Value(1), new Value(2));
```

How to resolve an expression:
```js script
const expression = new Add(new Value(1), new Value(2));
expression.result() // 3 is expected
```

How to get the formula expression:
```js script
const expression = new Add(new Value(1), new Value(2));
expression.toString() // (1 + 2) is expected
```

# Instructions
- clone the repository;
- install dependencies by running `yarn`;
- execute unit tests by running `yarn test:unit`;
- execute mutation tests by running `yarn test:mutation`