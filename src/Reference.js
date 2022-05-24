import React, { useRef } from "react";
const Reftutorial = () => {
  const inputRef = useRef(null);
  return (
    <div>
      <h1>Hello Ivan</h1>
      <input placeholder="Enter your name" type="text" ref={inputRef} />
      <button>Change Name</button>
    </div>
  );
};
export default Reftutorial;
