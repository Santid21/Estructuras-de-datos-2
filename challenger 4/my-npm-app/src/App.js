import React, { useState } from 'react';
import { CategoryList } from './CategoryList';

export const ComponentApp = () => {
  const [category, setCategory] = useState('');
  const [categories, setCategories] = useState([]);

  const handleInputChange = (e) => {
    setCategory(e.target.value);
  };

  const handleAddCategory = () => {
    if (category.trim() === '') return;
    setCategories([...categories, category]);
    setCategory('');
  };

  return (
    <>
      <h1>GifExpert</h1>

      <input
        type="text"
        value={category}
        onChange={handleInputChange}
        placeholder="Escribe una categoría"
      />
      <button onClick={handleAddCategory}>Agregar</button>

      <CategoryList categories={categories} />
    </>
  );
};
