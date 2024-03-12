import { useState } from "react";
import { Container } from "./style";

import { FiMinus, FiPlus } from "react-icons/fi";

export function Counter() {
  const [count, setCount] = useState(0);

  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <Container>
      <div className="decrement-btn" onClick={decrement}>
        <FiMinus />
      </div>
      <div className="counter">{count}</div>
      <div className="increment-btn" onClick={increment}>
        <FiPlus />
      </div>
    </Container>
  );
}
