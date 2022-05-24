import React, { useState } from "react";
const Reacthooks = () => {
  const [inputValue, setInputValue] = useState("Ivan");
  const onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="Enter your name" onChange={onChange} />
      {inputValue}
    </div>
  );
};
export default Reacthooks;
