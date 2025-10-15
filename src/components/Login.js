import React, { useState } from "react";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { login } from "../redux/userSlice";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const handleRegister = async () => {
    const user = await createUserWithEmailAndPassword(auth, email, password);
    dispatch(login(user.user));
  };

  const handleLogin = async () => {
    const user = await signInWithEmailAndPassword(auth, email, password);
    dispatch(login(user.user));
  };

  return (
    <div className="login">
      <h2>Iniciar sesión o registrarse</h2>
      <input placeholder="Correo" onChange={(e) => setEmail(e.target.value)} />
      <input type="password" placeholder="Contraseña" onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Iniciar sesión</button>
      <button onClick={handleRegister}>Registrarse</button>
    </div>
  );
}
