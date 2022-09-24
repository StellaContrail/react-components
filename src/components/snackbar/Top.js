import React, { useRef } from "react";
import CustomSnackbar from "./Snackbar";

const SnackbarTop = (props) => {
  const valRef = useRef(0);

  return (
    <div>
      <div>
        <CustomSnackbar
          ref={valRef}
          kind="error"
          msg="No results found!"
          title="ERROR"
        />
      </div>

      <input
        type="button"
        value="Click!"
        onClick={() => valRef.current.handleClick()}
      />
    </div>
  );
};

export default SnackbarTop;
