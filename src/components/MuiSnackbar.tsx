import React, { useState, forwardRef } from "react";
import {
  Stack,
  Alert,
  Divider,
  AlertTitle,
  Button,
  Snackbar,
  AlertProps,
} from "@mui/material";

const SnackBarAlert = forwardRef(function SnackBarAlert<
  HTMLDivElement,
  AlertProps
>(props: any, ref: any) {
  return <Alert ref={ref} {...props} elevation={6} />;
});

function MuiSnackbar() {
  const [open, setOpen] = useState(false);
  const handleClose = (e?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };
  return (
    <Stack m={4}>
      <Button onClick={() => setOpen(true)}>submit</Button>
      {/* <Snackbar
        message="Form submit successfully"
        autoHideDuration={4000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      /> */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <SnackBarAlert onClose={handleClose} severity="success">
          Form submited successfully
        </SnackBarAlert>
      </Snackbar>
    </Stack>
  );
}

export default MuiSnackbar;
