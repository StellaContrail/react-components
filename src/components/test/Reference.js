import React, { useRef } from "react";
import { ChildRef } from "./Children";

const Reference = (props) => {
  const valRef = useRef(0);

  return (
    <div>
      <div>
        <ChildRef ref={valRef} />
      </div>

      <input
        type="button"
        value="Click!"
        onClick={() => {
          valRef.current.getAlert();
        }}
      />
    </div>
  );
};

export default Reference;
