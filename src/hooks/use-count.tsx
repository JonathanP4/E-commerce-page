import { useState } from "react";

export default function useCount(n: number) {
  const [count, setCount] = useState(n);
  const increase = () => setCount((count) => count + 1);
  const decrease = () => setCount((count) => (count > 0 ? count - 1 : count));

  return {
    increase,
    decrease,
    count,
    setCount,
  };
}
