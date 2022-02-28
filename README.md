# guru code challenge
The implementations are located in the src folder.

## flattenArray
An algorithm to flatten an arbitrarily nested array of values.


## expressionTree
A class name Expression where can be created as follows:

`
const expression = new Expression(1);
`

`
const expressionTree = new Expression('-', new Expression(2), new Expression(1));
`

Available methods:
- result(): Try ro resolve the expression returning a number
- toString(): Return the formula in a string format

# Instructions
- clone the repository;
- install dependencies by running `yarn`;
- execute unit tests by running `yarn test:unit`;
- execute mutation tests by running `yarn test:mutation`