import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const ProfileGrandChild = () => {
  const { name } = useContext(UserContext);

  return (
    <p>
      Yo soy ProfileGranChild, Hola!!: <strong>{name}</strong>
    </p>
  );
};

export default ProfileGrandChild;
