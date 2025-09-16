import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";
import ProfileGrandChild from "./ProfileGranChild";

const ProfileChild = () => {
  const { name } = useContext(UserContext);

  return (
    <div>
      <p>
        Soy ProfileChild del Perfil: <strong>{name}</strong>
      </p>
      <ProfileGrandChild />
    </div>
  );
};

export default ProfileChild;
