import React, { useState, createContext } from "react";
import User from "./user";
import LogIn from "./Login";
export const AppContext = createContext(null);
const ContextTutorial = () => {
  const [username, setUsername] = useState("");
  return (
    <div>
      <AppContext.Provider value={{ username, setUsername }}>
        <User />
        <LogIn />
      </AppContext.Provider>
    </div>
  );
};
export default ContextTutorial;
