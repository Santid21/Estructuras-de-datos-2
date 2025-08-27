import React, { useState, useCallback } from 'react';
import Son from './Son';

export default function Father() {
  const [valor, setValor] = useState(0);

  const increment = useCallback((i) => {
    setValor(i);
  }, []);

  return (
    <>
      <h1>Father</h1>
      <h2>Total: {valor}</h2>
      <hr />
      {[0, 1, 2, 3, 4, 5, 6, 8, 10].map(i => (
        <Son
          key={i}
          i={i}
          increment={increment}
        />
      ))}
    </>
  );
}
