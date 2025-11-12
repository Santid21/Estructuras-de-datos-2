import React, { useEffect, useState } from "react";
import Tree from "react-d3-tree";
import BinaryTree from "./BinaryTree";
import { numbers } from "../data/sampleData";

const TreeVisualizer = () => {
  const [treeData, setTreeData] = useState(null);
  const [tree, setTree] = useState(new BinaryTree());
  const [valueToFind, setValueToFind] = useState("");
  const [found, setFound] = useState(null);

  useEffect(() => {
    const newTree = new BinaryTree();
    numbers.forEach((num) => newTree.insert(num));
    setTree(newTree);
    setTreeData(newTree.toD3Tree());
    console.log("Inorder:", newTree.inorder());
    console.log("Preorder:", newTree.preorder());
    console.log("Postorder:", newTree.postorder());
  }, []);

  const handleSearch = () => {
    const result = tree.search(Number(valueToFind));
    setFound(result);
  };

  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <h2 className="text-center">Binary Search Tree Visualization</h2>

      <div style={{ display: "flex", justifyContent: "center", margin: "10px" }}>
        <input
          type="number"
          placeholder="Enter value to search"
          value={valueToFind}
          onChange={(e) => setValueToFind(e.target.value)}
          style={{ marginRight: "10px", padding: "5px" }}
        />
        <button onClick={handleSearch}>Search</button>
      </div>

      {found !== null && (
        <p style={{ textAlign: "center", color: found ? "green" : "red" }}>
          {found ? "Value found in tree!" : "Value not found."}
        </p>
      )}

      {treeData && (
        <div id="treeWrapper" style={{ width: "100%", height: "80vh" }}>
          <Tree
            data={treeData}
            orientation="vertical"
            translate={{ x: 600, y: 100 }}
            zoomable
            collapsible
          />
        </div>
      )}
    </div>
  );
};

export default TreeVisualizer;
