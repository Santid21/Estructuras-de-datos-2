import React, { useState } from "react";

export default function CityForm({ onAddCity, onRemoveCity }) {
  const [cityName, setCityName] = useState("");

  return (
    <div className="card">
      <h3>Gestión de Ciudades</h3>
      <input
        type="text"
        placeholder="Nombre de ciudad"
        value={cityName}
        onChange={(e) => setCityName(e.target.value)}
      />
      <div className="button-row">
        <button onClick={() => { onAddCity(cityName); setCityName(""); }}>Agregar</button>
        <button onClick={() => { onRemoveCity(cityName); setCityName(""); }}>Eliminar</button>
      </div>
    </div>
  );
}
