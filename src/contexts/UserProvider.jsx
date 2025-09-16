import { useState } from "react";
import { UserContext } from "./UserContext";


export const UserProvider = ({ children }) => {
  const [name, setName] = useState("Anonymous");

  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};
