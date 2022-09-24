import React, { useCallback, useState } from "react";
import { ChildA, ChildB, ChildC, ChildD } from "./Children";

const VirtualDOM = (props) => {
  const [A, setA] = useState("Someone");
  const [B, setB] = useState("Someone");
  // eslint-disable-next-line no-unused-vars
  const [C, setC] = useState("Someone");
  // eslint-disable-next-line no-unused-vars
  const [D, setD] = useState("Someone");
  // returns same instance when C is unchanged
  const callC = useCallback(() => {
    setC("Greetings!");
    console.log("callC triggered");
  }, []);

  return (
    <div>
      <div>
        <ChildA value={A} />
      </div>

      <div>
        <ChildB value={B} />
      </div>

      <input
        type="button"
        onClick={() => setA("World")}
        value="Trigger setA()"
      />
      <input
        type="button"
        onClick={() => setB("World")}
        value="Trigger setB()"
      />
      <ChildC onClick={callC} value="Trigger callC()" />
      <ChildD onClick={() => setD("Good afternoon.")} value="Trigger callD()" />

      <input
        type="button"
        onClick={() => {
          setA("Someone");
          setB("Someone");
          setC("Someone");
        }}
        value="Reset"
      />
    </div>
  );
};

export default VirtualDOM;
