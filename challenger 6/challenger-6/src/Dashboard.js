import { useAuth } from "./AuthContext";

export default function Dashboard() {
  const { user, logout } = useAuth();

  return (
    <div>
      <h2>Dashboard</h2>
      <p>Bienvenido {user?.name}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
