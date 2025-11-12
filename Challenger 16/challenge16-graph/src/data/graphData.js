const graphData = {
  nodes: [
    { id: "Bogotá", type: "city", color: "blue" },
    { id: "Medellín", type: "city", color: "blue" },
    { id: "Cali", type: "city", color: "blue" },

    { id: "Santiago", type: "person", age: 25, city: "Medellín", color: "green" },
    { id: "Laura", type: "person", age: 22, city: "Bogotá", color: "green" },
    { id: "Carlos", type: "person", age: 30, city: "Cali", color: "green" },
    { id: "Ana", type: "person", age: 27, city: "Bogotá", color: "green" },
  ],
  links: [
    { source: "Santiago", target: "Medellín" },
    { source: "Laura", target: "Bogotá" },
    { source: "Carlos", target: "Cali" },
    { source: "Ana", target: "Bogotá" },
  ],
};

export default graphData;
