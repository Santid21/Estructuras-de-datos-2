import React, { useState } from "react";
import BookForm from "./components/BookForm";
import BookStack from "./components/BookStack";

function App() {
  const [stack, setStack] = useState([
    { name: "Clean Code", isbn: "9780132350884", author: "Robert C. Martin", editorial: "Prentice Hall" },
    { name: "The Pragmatic Programmer", isbn: "9780201616224", author: "Andrew Hunt", editorial: "Addison-Wesley" }
  ]);

  const addBook = (book) => {
    setStack([book, ...stack]); // estilo pila (push al tope)
  };

  return (
    <div className="container">
      <h1>📚 Book Stack</h1>
      <BookForm addBook={addBook} />
      <BookStack stack={stack} />
    </div>
  );
}

export default App;
