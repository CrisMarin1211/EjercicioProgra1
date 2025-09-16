import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";

const Header = () => {
  const { name, setName } = useContext(UserContext);
  const [input, setInput] = useState("");

  const handleUpdate = () => {
    if (input.trim() !== "") {
      setName(input);
      setInput("");
    }
  };

  return (
    <header style={{ textAlign: "center", marginBottom: "30px" }}>
      <h1>
        Holaaaa, {name} Soy el Header!
      </h1>
      <div>
        <input
          type="text"
          placeholder="Escribe tu nombre..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            padding: "10px",
            marginRight: "10px",
            borderRadius: "5px",
          }}
        />
        <button
          onClick={handleUpdate}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            background: "#cc0683ff",
            color: "white",
            border: "none",
            cursor: "pointer",
          }}
        >
          ENVIAR
        </button>
      </div>
    </header>
  );
};

export default Header;
