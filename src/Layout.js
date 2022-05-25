import React, { useEffect, useLayoutEffect, useRef } from "react";

const Layout = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    console.log((inputRef.current.value = "HELLO"));
  }, []);
  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);
  return (
    <div>
      <input ref={inputRef} value="Joshua" style={{ width: 400, height: 50 }} />
    </div>
  );
};
export default Layout;
