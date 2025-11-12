import React, { useState } from "react";

const MenuItemComponent = ({ node }) => {
  const [open, setOpen] = useState(false);
  const hasChildren = node.children && node.children.length > 0;

  return (
    <div style={{ marginLeft: "10px" }}>
      <div
        onClick={() => setOpen(!open)}
        style={{
          padding: "8px",
          cursor: hasChildren ? "pointer" : "default",
          backgroundColor: "#282c34",
          color: "white",
          borderRadius: "5px",
          margin: "3px 0",
        }}
      >
        {node.title}
      </div>

      {open && hasChildren && (
        <div style={{ marginLeft: "15px" }}>
          {node.children.map((child, index) => (
            <MenuItemComponent key={index} node={child} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItemComponent;
