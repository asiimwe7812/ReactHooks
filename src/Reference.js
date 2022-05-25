import React, { useRef } from "react";
const Reftutorial = () => {
  const inputRef = useRef(null);
  const onClick = () => {
    inputRef.current.value = "joel";
    console.log(inputRef.current.value);
  };
  return (
    <div>
      <h1>Hello Ivan</h1>
      <input placeholder="Enter your name" type="text" ref={inputRef} />
      <button onClick={onClick}>Change Name</button>
    </div>
  );
};
export default Reftutorial;
