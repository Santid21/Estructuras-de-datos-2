// Funciones auxiliares para zonas verdes

export function addSubzone(zone, name) {
  zone.subzones.push({ name, subzones: [] });
}

// Cuenta el total de zonas verdes recursivamente
export function countZones(zone) {
  let total = 1; // cuenta la zona actual
  zone.subzones.forEach(sz => total += countZones(sz));
  return total;
}

// Calcula la altura máxima del árbol
export function height(zone) {
  if (!zone.subzones.length) return 1;
  return 1 + Math.max(...zone.subzones.map(sz => height(sz)));
}
