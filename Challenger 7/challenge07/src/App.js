import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LinkedListPage from "./components/LinkedListPage";
import DoublyLinkedListPage from "./components/DoublyLinkedListPage";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li><Link to="/linked">Linked List</Link></li>
          <li><Link to="/doubly">Doubly Linked List</Link></li>
        </ul>
      </nav>

      <Routes>
        <Route path="/linked" element={<LinkedListPage />} />
        <Route path="/doubly" element={<DoublyLinkedListPage />} />
      </Routes>
    </Router>
  );
}

export default App;
