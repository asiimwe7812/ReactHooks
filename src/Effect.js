import React, { useEffect, useState } from "react";
import axios from "axios";
const Effects = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/comments")
      .then((response) => {
        setData(response.data[2].email);
        console.log("API WAS CALLED");
      });
  }, []);
  return <div>Your email is {data}</div>;
};
export default Effects;
