import React, { useEffect, useState } from "react";
import AddImageForm from "./components/AddImageForm";
import "./App.css";

const STORAGE_KEY = "parcial1_images";

function loadImagesFromStorage() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return [
      { id: 10, title: "Ejemplo 10", url: "https://picsum.photos/id/10/200/300" },
    ];
  }
  try {
    return JSON.parse(raw);
  } catch {
    return [];
  }
}

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const list = loadImagesFromStorage();
    const params = new URLSearchParams(window.location.search);
    const q = (params.get("q") || "").trim();
    setQuery(q);

    if (q) {
      setImages(list.filter(img => img.title.toLowerCase().includes(q.toLowerCase())));
    } else {
      setImages(list);
    }
  }, []);

  return (
    <div className="container">
      <h1>Parcial 1 — Lista de imágenes</h1>

      <section>
        <h2>Agregar imagen</h2>
        <AddImageForm />
      </section>

      <section>
        <h2>Buscar por título</h2>
        <form method="GET" action="/">
          <input type="text" name="q" placeholder="Buscar título..." defaultValue={query} />
          <button type="submit">Buscar</button>
        </form>
      </section>

      <section>
        <h2>Resultados ({images.length})</h2>
        {images.length === 0 ? (
          <p>No hay imágenes para mostrar.</p>
        ) : (
          <div className="grid">
            {images.map(img => (
              <figure key={img.id} className="card">
                <img src={img.url} alt={img.title} width="200" height="300" />
                <figcaption>{img.title} (ID: {img.id})</figcaption>
              </figure>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}
