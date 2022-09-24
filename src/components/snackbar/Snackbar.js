import React from "react";
import { Alert, AlertTitle } from "@mui/material";
import Slide from "@mui/material/Slide";
import Snackbar from "@mui/material/Snackbar";

function TransitionDown(props) {
  return <Slide {...props} direction="down" />;
}

const CustomSnackbar = React.forwardRef(({ kind, msg, title }, ref) => {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  React.useImperativeHandle(ref, () => ({
    handleClick: () => handleClick(),
  }));

  return (
    <>
      <Snackbar
        open={open}
        autoHideDuration={6000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        TransitionComponent={TransitionDown}
        sx={{ width: "500px" }}
      >
        <Alert onClose={handleClose} severity={kind} sx={{ width: "100%" }}>
          {title && <AlertTitle>{title}</AlertTitle>}
          {msg}
        </Alert>
      </Snackbar>
    </>
  );
});

export default CustomSnackbar;
