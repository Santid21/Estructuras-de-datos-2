import React from 'react';

export const CategoryList = ({ categories }) => {
  return (
    <ol>
      {categories.map((cat, idx) => (
        <li key={idx}>{cat}</li>
      ))}
    </ol>
  );
};
