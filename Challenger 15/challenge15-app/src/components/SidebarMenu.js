import React from "react";
import MenuItemComponent from "./MenuItemComponent";

const SidebarMenu = ({ tree }) => {
  return (
    <div
      style={{
        width: "250px",
        height: "100vh",
        backgroundColor: "#1e1e1e",
        padding: "10px",
      }}
    >
      <h3 style={{ color: "#61dafb", textAlign: "center" }}>Menu</h3>
      {tree.children.map((node, index) => (
        <MenuItemComponent key={index} node={node} />
      ))}
    </div>
  );
};

export default SidebarMenu;
