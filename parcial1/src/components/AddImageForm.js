import React, { useState } from "react";

const STORAGE_KEY = "parcial1_images";

function loadImages() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export default function AddImageForm() {
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const numId = parseInt(id, 10);
    if (Number.isNaN(numId) || title.trim() === "") {
      alert("El ID debe ser numérico y el título no puede estar vacío.");
      return;
    }

    const list = loadImages();
    const newImg = {
      id: numId,
      title: title.trim(),
      url: `https://picsum.photos/id/${numId}/200/300`,
    };

    list.push(newImg);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(list));

    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={id}
        onChange={(e) => setId(e.target.value)}
        placeholder="ID (número)"
      />
      <input
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título"
      />
      <button type="submit">Agregar</button>
    </form>
  );
}
