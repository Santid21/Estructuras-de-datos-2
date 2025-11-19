import React, { useState } from "react";
import CityForm from "./components/CityForm";
import ZoneManager from "./components/ZoneManager";
import GraphView from "./components/GraphView";

function App() {
  const [graph, setGraph] = useState({
    nodes: [],
    links: [],
    zonesByCity: {}
  });

  const [selectedCity, setSelectedCity] = useState(null);
  const [linkFrom, setLinkFrom] = useState("");

  // Función para agregar conexión entre ciudades
  const addLink = (from, to) => {
    if (!from || !to || from === to) return;

    const exists = graph.links.find(
      l =>
        (l.source === from && l.target === to) ||
        (l.source === to && l.target === from)
    );
    if (!exists) {
      graph.links.push({ source: from, target: to });
      setGraph({ ...graph });
    }
  };

  return (
    <div className="app-container">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>Red de Ciudades</h2>

        {/* Sección de Gestión de Ciudades */}
        <div className="section">
          <CityForm
            onAddCity={name => {
              if (!graph.nodes.find(n => n.id === name)) {
                graph.nodes.push({ id: name });
                graph.zonesByCity[name] = { name: "Root", subzones: [] };
                setGraph({ ...graph });
              }
            }}
            onRemoveCity={name => {
              graph.nodes = graph.nodes.filter(n => n.id !== name);
              graph.links = graph.links.filter(
                l => l.source !== name && l.target !== name
              );
              delete graph.zonesByCity[name];
              if (selectedCity === name) setSelectedCity(null);
              if (linkFrom === name) setLinkFrom("");
              setGraph({ ...graph });
            }}
          />
        </div>

        {/* Sección de Conexión de Ciudades */}
        <div className="section">
          <h4>Conectar Ciudades</h4>
          <select value={linkFrom} onChange={e => setLinkFrom(e.target.value)}>
            <option value="">Desde</option>
            {graph.nodes.map(n => (
              <option key={n.id} value={n.id}>{n.id}</option>
            ))}
          </select>

          <select onChange={e => addLink(linkFrom, e.target.value)}>
            <option value="">Hacia</option>
            {graph.nodes.map(n => (
              <option key={n.id} value={n.id}>{n.id}</option>
            ))}
          </select>
        </div>

        {/* Listado de Ciudades */}
        <div className="section city-list">
          <h4>Ciudades</h4>
          {graph.nodes.map(n => (
            <p
              key={n.id}
              className={selectedCity === n.id ? "active" : ""}
              onClick={() => setSelectedCity(n.id)}
            >
              {n.id}
            </p>
          ))}
        </div>
      </div>

      {/* Contenido principal */}
      <div className="main">
        <GraphView graphData={graph} selectedCity={selectedCity} />

        {selectedCity && (
          <ZoneManager
            city={selectedCity}
            zoneTree={graph.zonesByCity[selectedCity]}
            refresh={() => setGraph({ ...graph })}
          />
        )}
      </div>
    </div>
  );
}

export default App;
