import React from "react";
import Provider from "./Provider";

const Swallower = (props) => {
  console.log("Swallower is loaded.");

  const handler = (val) => {
    console.log(val);
  }

  return <Provider callback={(val) => handler(val)} />;
};

export default Swallower;
