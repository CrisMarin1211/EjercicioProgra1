import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import ProfileChild from "./ProfileChild";

const Profile = () => {
  const { name } = useContext(UserContext);

  return (
    <section style={{ textAlign: "center", marginBottom: "20px" }}>
      <p>
        Este es el perfil de: <strong>{name}</strong>
      </p>
      <ProfileChild />
    </section>
  );
};

export default Profile;
