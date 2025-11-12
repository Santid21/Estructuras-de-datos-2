import React from "react";
import { Graph } from "react-d3-graph";
import graphData from "../data/graphData";

const CityGraph = () => {
  const config = {
    nodeHighlightBehavior: true,
    node: {
      color: "lightgreen",
      size: 400,
      highlightStrokeColor: "blue",
      labelProperty: "id",
    },
    link: {
      highlightColor: "lightblue",
    },
    directed: true,
    height: 400,
    width: 800,
  };

  return (
    <div>
      <h2>🌆 Gráfico de Ciudades y Personas</h2>
      <Graph id="graph-id" data={graphData} config={config} />
    </div>
  );
};

export default CityGraph;
