import { useState } from "react";

export default function Counter({ defaultValue }) {
  const [counter, setCounter] = useState(defaultValue);

  const handleSubstract = () => {
    setCounter(counter - 1);
  };

  const handleReset = () => {
    setCounter(defaultValue);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h1>Contador: {counter}</h1>
      <button onClick={handleSubstract}>Restar</button>
      <button onClick={handleReset} style={{ marginLeft: "10px" }}>
        Reiniciar
      </button>
    </div>
  );
}
