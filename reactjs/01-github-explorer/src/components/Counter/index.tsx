import { useState, useCallback } from 'react';

const Counter = () => {
  const [value, setValue] = useState(0);

  const increment = useCallback(() => {
    setValue(value + 1);
  }, [value, setValue]);

  const decrement = useCallback(() => {
    setValue(value - 1);
  }, [value, setValue]);

  return (
    <div>
      <h2>Counter</h2>

      <button type="button" onClick={increment}>
        + Increment
      </button>
      <h3>{value}</h3>
      <button type="button" onClick={decrement}>
        - Decrement
      </button>
    </div>
  );
};

export { Counter };
