import React from "react";

export default function GraphView({ graphData, selectedCity }) {
  const width = 800;
  const height = 400;
  const nodeRadius = 30;

  const positions = {};
  const spacingX = width / (graphData.nodes.length + 1);
  graphData.nodes.forEach((node, i) => {
    positions[node.id] = { x: spacingX * (i + 1), y: height / 2 };
  });

  return (
    <svg width={width} height={height} className="graph-svg">
      {graphData.links.map((link, idx) => (
        <line
          key={idx}
          x1={positions[link.source]?.x}
          y1={positions[link.source]?.y}
          x2={positions[link.target]?.x}
          y2={positions[link.target]?.y}
          stroke="#1976d2"
          strokeWidth="3"
        />
      ))}

      {graphData.nodes.map(node => (
        <g key={node.id}>
          <circle
            cx={positions[node.id].x}
            cy={positions[node.id].y}
            r={nodeRadius}
            fill={selectedCity === node.id ? "#f57c00" : "#1976d2"}
            stroke="#fff"
            strokeWidth="2"
          />
          <text
            x={positions[node.id].x}
            y={positions[node.id].y + 5}
            textAnchor="middle"
            fill="white"
            fontWeight="bold"
            style={{ fontSize: "14px" }}
          >
            {node.id}
          </text>
        </g>
      ))}
    </svg>
  );
}
