import React from "react";
import Counter from "./CounterApp.js";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Challenge 3</h2>
      <Counter defaultValue={10} />
    </div>
  );
}

export default App;