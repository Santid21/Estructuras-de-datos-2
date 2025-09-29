import React, { useState, useEffect } from "react";
import DoublyLinkedList from "../structures/DoublyLinkedList";

const DoublyLinkedListPage = () => {
  const [page, setPage] = useState(null);
  const [list, setList] = useState(null);

  useEffect(() => {
    const pages = new DoublyLinkedList();
    pages.insert("Home");
    pages.insert("About");
    pages.insert("Services");
    pages.insert("Contact");

    setList(pages);
    setPage(pages.reset());
  }, []);

  const handleNext = () => {
    setPage(list.nextPage());
  };

  const handlePrev = () => {
    setPage(list.prevPage());
  };

  return (
    <div>
      <h2>Doubly Linked List - Browser History</h2>
      <p>Current Page: {page}</p>
      <button onClick={handlePrev}>⬅ Back</button>
      <button onClick={handleNext}>➡ Forward</button>
    </div>
  );
};

export default DoublyLinkedListPage;
