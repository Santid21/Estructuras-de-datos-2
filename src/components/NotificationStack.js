import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { popNotification } from "../redux/notificationsSlice";

export default function NotificationStack() {
  const notifications = useSelector((state) => state.notifications);
  const dispatch = useDispatch();

  const handlePop = () => {
    if (notifications.length > 0) {
      dispatch(popNotification());
    }
  };

  return (
    <div className="notificaciones">
      <h2>Notificaciones (Pila)</h2>
      <button onClick={handlePop}>Eliminar última</button>
      <ul>
        {notifications.length > 0 ? (
          notifications.map((n, i) => <li key={i}>{n}</li>)
        ) : (
          <li style={{ opacity: 0.7, fontStyle: "italic" }}>
            Sin notificaciones
          </li>
        )}
      </ul>
    </div>
  );
}
