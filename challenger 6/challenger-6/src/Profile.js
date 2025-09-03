import { useAuth } from "./AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <div>
      <h2>Profile</h2>
      <p>Usuario actual: {user?.name}</p>
    </div>
  );
}
