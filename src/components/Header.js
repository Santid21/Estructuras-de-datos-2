// src/components/Header.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { auth } from "../firebase/config";
import { signOut } from "firebase/auth";
import { logout } from "../redux/userSlice";

const Header = () => {
  const notifications = useSelector((state) => state.notifications);
  const user = useSelector((state) => state.user.currentUser);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await signOut(auth);
    dispatch(logout());
  };

  return (
    <header>
      <h1>Red Social UAO</h1>
      <div className="right">
        {user && (
          <>
            <span>👤 {user.email}</span>
            <div className="notificaciones">🔔 {notifications.length}</div>
            <button className="logout-btn" onClick={handleLogout}>
              🚪 Cerrar sesión
            </button>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
