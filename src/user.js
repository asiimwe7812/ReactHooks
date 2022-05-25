import React, { useContext } from "react";
import { AppContext } from "./ContextTutorial";
const User = () => {
  const { Username } = useContext(AppContext);
  return (
    <div>
      <h1>User:{Username}</h1>
    </div>
  );
};
export default User;
