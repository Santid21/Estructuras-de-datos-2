import React from "react";

function BookStack({ stack }) {
  return (
    <div className="stack">
      <h2>Stack Content:</h2>
      {stack.length === 0 ? (
        <p>No books in stack</p>
      ) : (
        <ul>
          {stack.map((book, index) => (
            <li key={index}>
              <strong>{book.name}</strong> <br />
              ISBN: {book.isbn} <br />
              Author: {book.author} <br />
              Editorial: {book.editorial}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default BookStack;
