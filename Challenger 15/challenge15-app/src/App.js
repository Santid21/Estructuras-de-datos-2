import React from "react";
import SidebarMenu from "./components/SidebarMenu";
import tree from "./data/menuData";

function App() {
  return (
    <div style={{ display: "flex" }}>
      <SidebarMenu tree={tree} />
      <div style={{ marginLeft: "20px", padding: "20px" }}>
        <h1>Challenge 15 - Sidebar Menu</h1>
        <p>Selecciona una opción del menú para explorar los submenús.</p>
      </div>
    </div>
  );
}

export default App;
