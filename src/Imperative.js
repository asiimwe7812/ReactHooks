import Button from "./Button";
import React, { useRef } from "react";

const Imperative = () => {
  const buttonRef = useRef(null);
  return (
    <div>
      <button
        onClick={() => {
          buttonRef.current.alterToggle();
        }}
      >
        Button from Parent
      </button>
      <Button ref={buttonRef} />
    </div>
  );
};
export default Imperative;
