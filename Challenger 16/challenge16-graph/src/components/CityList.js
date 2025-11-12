import React from "react";
import graphData from "../data/graphData";

const CityList = () => {
  const cities = graphData.nodes.filter((node) => node.type === "city");
  const people = graphData.nodes.filter((node) => node.type === "person");

  const getPeopleByCity = (cityName) =>
    people.filter((person) => person.city === cityName);

  return (
    <div>
      <h2>🏙️ Personas por Ciudad</h2>
      {cities.map((city) => (
        <div key={city.id} style={{ marginBottom: "1em" }}>
          <h3>{city.id}</h3>
          <ul>
            {getPeopleByCity(city.id).length > 0 ? (
              getPeopleByCity(city.id).map((person) => (
                <li key={person.id}>
                  {person.id} (Edad: {person.age})
                </li>
              ))
            ) : (
              <li>Sin residentes</li>
            )}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default CityList;
