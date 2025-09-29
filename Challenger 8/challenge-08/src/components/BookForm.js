import React, { useState } from "react";

function BookForm({ addBook }) {
  const [form, setForm] = useState({ name: "", isbn: "", author: "", editorial: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.isbn || !form.author || !form.editorial) return;
    addBook(form);
    setForm({ name: "", isbn: "", author: "", editorial: "" });
  };

  return (
    <form className="book-form" onSubmit={handleSubmit}>
      <input type="text" name="name" value={form.name} placeholder="Book Name" onChange={handleChange} />
      <input type="text" name="isbn" value={form.isbn} placeholder="ISBN" onChange={handleChange} />
      <input type="text" name="author" value={form.author} placeholder="Author" onChange={handleChange} />
      <input type="text" name="editorial" value={form.editorial} placeholder="Editorial" onChange={handleChange} />
      <button type="submit">➕ Add Book</button>
    </form>
  );
}

export default BookForm;
