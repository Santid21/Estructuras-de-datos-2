// =================== MODELOS ===================

export class GreenZone {
  constructor(name) {
    this.name = name;
    this.subzones = [];
  }
  addSubzone(zone) {
    this.subzones.push(zone);
  }
}

export class City {
  constructor(name) {
    this.name = name;
    this.greenZones = [];
  }
  addGreenZone(zone) {
    this.greenZones.push(zone);
  }
}

export class CityNetwork {
  constructor() {
    this.cities = {};
    this.adjList = {};
  }

  // ----------- CIUDADES -----------
  addCity(name) {
    if (!this.cities[name]) {
      this.cities[name] = new City(name);
      this.adjList[name] = [];
      this.save();
    }
  }

  removeCity(name) {
    delete this.cities[name];
    delete this.adjList[name];

    for (const c in this.adjList) {
      this.adjList[c] = this.adjList[c].filter(x => x !== name);
    }
    this.save();
  }

  // ----------- CONEXIONES (GRAFO) -----------
  connectCities(a, b) {
    if (this.cities[a] && this.cities[b]) {
      if (!this.adjList[a].includes(b)) this.adjList[a].push(b);
      if (!this.adjList[b].includes(a)) this.adjList[b].push(a);
      this.save();
    }
  }

  // =========== LOCAL STORAGE ===========
  save() {
    localStorage.setItem("cityNetwork", JSON.stringify(this));
  }

  static load() {
    const data = localStorage.getItem("cityNetwork");
    if (!data) return new CityNetwork();

    const parsed = JSON.parse(data);
    const net = new CityNetwork();

    // reconstruir ciudades
    for (const name in parsed.cities) {
      const city = new City(name);
      city.greenZones = rebuildZones(parsed.cities[name].greenZones);
      net.cities[name] = city;
    }

    net.adjList = parsed.adjList;
    return net;
  }
}

// reconstruye recursivamente la jerarquía de zonas
function rebuildZones(list) {
  return list.map(z => {
    const zone = new GreenZone(z.name);
    zone.subzones = rebuildZones(z.subzones);
    return zone;
  });
}

// =================== UTILIDADES ===================

export function getHeight(zone) {
  if (!zone.subzones.length) return 1;
  return 1 + Math.max(...zone.subzones.map(getHeight));
}

export function countZones(zone) {
  return 1 + zone.subzones.reduce((acc, sub) => acc + countZones(sub), 0);
}
