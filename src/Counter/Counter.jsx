import styles from "./Counter.module.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  return (
    <div className={styles.counter_container}>
      <p className={styles.count_display}>{count}</p>
      <button className={styles.counter_button} onClick={decrement}>
        Decrement
      </button>
      <button className={styles.counter_button} onClick={reset}>
        Reset
      </button>
      <button className={styles.counter_button} onClick={increment}>
        Increment
      </button>
    </div>
  );
}

export default Counter;
