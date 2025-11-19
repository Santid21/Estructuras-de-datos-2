import React, { useState } from "react";
import { addSubzone, countZones, height } from "../data/graphUtils";

export default function ZoneManager({ city, zoneTree, refresh }) {
  const [selectedZone, setSelectedZone] = useState(zoneTree);
  const [subzoneName, setSubzoneName] = useState("");

  // Función recursiva para mostrar árbol de zonas verdes
  const renderTree = (zone, level = 0) => (
    <div key={zone.name} style={{ marginLeft: level * 20, marginTop: 5 }}>
      <span
        className={`tree-node tree-level-${Math.min(level,5)}`}
        onClick={() => setSelectedZone(zone)}
        style={{ fontWeight: selectedZone === zone ? "bold" : "normal" }}
      >
        {zone.name}
      </span>
      {zone.subzones.map(sz => renderTree(sz, level + 1))}
    </div>
  );

  return (
    <div className="card">
      <h3>Zonas Verdes de {city}</h3>

      {/* Árbol visual de zonas verdes */}
      <div style={{
        maxHeight: "300px",
        overflowY: "auto",
        padding: "10px",
        borderRadius: "6px",
        background: "#f1f8e9",
        border: "1px solid #c8e6c9",
        marginBottom: "10px"
      }}>
        {renderTree(zoneTree)}
      </div>

      {/* Formulario para agregar subzonas */}
      <div className="button-row">
        <input
          placeholder="Nombre de subzona"
          value={subzoneName}
          onChange={e => setSubzoneName(e.target.value)}
        />
        <button
          onClick={() => {
            if (subzoneName.trim()) {
              addSubzone(selectedZone, subzoneName.trim());
              setSubzoneName("");
              refresh(); // actualiza estado principal
            }
          }}
        >
          Agregar Subzona
        </button>
      </div>

      {/* Estadísticas */}
      <div style={{ marginTop: 10 }}>
        <p><strong>Total de zonas verdes:</strong> {countZones(zoneTree)}</p>
        <p><strong>Altura máxima del árbol:</strong> {height(zoneTree)}</p>
      </div>
    </div>
  );
}
