import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

const Footer = () => {
  const { name } = useContext(UserContext);

  return (
    <footer style={{ textAlign: "center", marginTop: "30px" }}>
      <h2>Este es el final de la página, {name} 👋</h2>
    </footer>
  );
};

export default Footer;
