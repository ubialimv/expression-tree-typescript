import Add from "./operations/add";
import Divide from "./operations/divide";
import Multiply from "./operations/multiply";
import Subtract from "./operations/subtract";
import Value from "./value";

export default new Divide(
    new Add(
      new Value(7),
      new Multiply(new Subtract(new Value(3), new Value(2)), new Value(5))
    ),
    new Value(6)
);