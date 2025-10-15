import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { enqueueMessage, dequeueMessage } from "../redux/directMessagesSlice";

export default function DirectMessageQueue() {
  const [msg, setMsg] = useState("");
  const queue = useSelector((state) => state.directMessages);
  const dispatch = useDispatch();

  const handleSend = (e) => {
    e.preventDefault();
    const trimmed = msg.trim();
    if (!trimmed) return;

    dispatch(enqueueMessage(trimmed));
    setMsg("");
  };

  const handleDequeue = () => {
    if (queue.length > 0) {
      dispatch(dequeueMessage());
    }
  };

  return (
    <div className="direct-msg">
      <h2>Mensajes Directos (Cola)</h2>
      <form onSubmit={handleSend}>
        <input
          type="text"
          value={msg}
          onChange={(e) => setMsg(e.target.value)}
          placeholder="Escribe un mensaje directo..."
        />
        <button type="submit">Enviar</button>
      </form>
      <button onClick={handleDequeue}>Enviar al destinatario</button>

      <ul>
        {queue.length > 0 ? (
          queue.map((m, i) => <li key={i}>{m}</li>)
        ) : (
          <li style={{ opacity: 0.7, fontStyle: "italic" }}>
            No hay mensajes pendientes
          </li>
        )}
      </ul>
    </div>
  );
}
