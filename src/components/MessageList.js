import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPost } from "../redux/postsSlice";
import { pushNotification } from "../redux/notificationsSlice";

export default function MessageList() {
  const [text, setText] = useState("");
  const posts = useSelector((state) => state.posts);
  const dispatch = useDispatch();

  const handleAdd = (e) => {
    e.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;

    // 🔹 Solo actualiza Redux (no usa Firestore)
    dispatch(addPost(trimmed));
    dispatch(pushNotification("Nuevo mensaje publicado ✅"));
    setText("");
  };

  return (
    <div className="post-section">
      <h2>Publicaciones (Lista)</h2>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Escribe un mensaje..."
        />
        <button type="submit">Publicar</button>
      </form>

      <ul>
        {posts.length > 0 ? (
          posts.map((p, i) => <li key={i}>{p}</li>)
        ) : (
          <li style={{ opacity: 0.7, fontStyle: "italic" }}>
            No hay publicaciones todavía.
          </li>
        )}
      </ul>
    </div>
  );
}
