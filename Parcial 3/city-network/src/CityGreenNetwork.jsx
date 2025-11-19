import { useState } from "react";

function CityGreenNetwork() {
  const [cities, setCities] = useState([]);
  const [newCityName, setNewCityName] = useState("");

  // ---- CITY MANAGEMENT ---- //

  const addCity = () => {
    if (!newCityName.trim()) return;
    setCities([...cities, { name: newCityName, zones: [] }]);
    setNewCityName("");
  };

  const deleteCity = (name) => {
    setCities(cities.filter((city) => city.name !== name));
  };

  // ---- GREEN ZONES ---- //

  const addGreenZone = (cityIndex, parentZone = null) => {
    const zoneName = prompt("Nombre de la zona:");
    if (!zoneName) return;

    const updatedCities = [...cities];

    const newZone = { name: zoneName, subzones: [] };

    if (parentZone === null) {
      updatedCities[cityIndex].zones.push(newZone);
    } else {
      parentZone.subzones.push(newZone);
    }

    setCities(updatedCities);
  };

  const editZoneName = (zone) => {
    const newName = prompt("Nuevo nombre:", zone.name);
    if (newName) zone.name = newName;
  };

  // ---- CALCULATE HEIGHT AND COUNT ---- //

  const countZones = (zones) => {
    let count = zones.length;
    for (const zone of zones) {
      count += countZones(zone.subzones);
    }
    return count;
  };

  const calculateHeight = (zones) => {
    if (zones.length === 0) return 0;
    return 1 + Math.max(...zones.map((z) => calculateHeight(z.subzones)));
  };

  // ---- RENDER TREE ---- //

  const renderZones = (zones, cityIndex) => {
    return (
      <ul>
        {zones.map((zone, i) => (
          <li key={i}>
            <strong>{zone.name}</strong>
            <button onClick={() => addGreenZone(cityIndex, zone)}>
              + Subzona
            </button>
            <button onClick={() => editZoneName(zone)}>Editar</button>

            {zone.subzones.length > 0 && renderZones(zone.subzones, cityIndex)}
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div className="city-container">

      <div className="city-input">
        <input
          type="text"
          placeholder="Nombre de la ciudad"
          value={newCityName}
          onChange={(e) => setNewCityName(e.target.value)}
        />
        <button onClick={addCity}>Agregar Ciudad</button>
      </div>

      <div className="cities-list">
        {cities.map((city, index) => (
          <div className="city-card" key={index}>
            <h2>{city.name}</h2>

            <button
              className="delete-btn"
              onClick={() => deleteCity(city.name)}
            >
              Eliminar Ciudad
            </button>

            <p><strong>Total de zonas:</strong> {countZones(city.zones)}</p>
            <p><strong>Altura máxima:</strong> {calculateHeight(city.zones)}</p>

            <button onClick={() => addGreenZone(index)}>
              + Agregar Zona Verde
            </button>

            {city.zones.length > 0 && renderZones(city.zones, index)}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CityGreenNetwork;
