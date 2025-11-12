import React from "react";
import CityGraph from "./components/CityGraph";
import CityList from "./components/CityList";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Challenge 16 - Graph of Friends and Cities</h1>
      <CityGraph />
      <hr />
      <CityList />
    </div>
  );
}

export default App;
