import React from "react";
import { Stack, Alert, Divider, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
function MuiAler() {
  return (
    <>
      {" "}
      <Stack spacing={2} m={4}>
        <Alert severity="error" onClose={() => alert("Close alert")}>
          This is an error alert
        </Alert>
        <Alert severity="warning">This is an warning alert</Alert>
        <Alert severity="info">This is an info alert</Alert>
        <Alert
          severity="success"
          action={
            <Button color="inherit" size="small">
              UNDO
            </Button>
          }
        >
          This is an success alert
        </Alert>
      </Stack>
      <Divider />
      <Stack spacing={2} m={4}>
        <Alert variant="outlined" severity="warning">
          This is an warning alert
        </Alert>
        <Alert variant="outlined" severity="info">
          This is an info alert
        </Alert>
        <Alert variant="outlined" severity="success">
          This is an success alert
        </Alert>
        <Alert variant="outlined" severity="error">
          This is an error alert
        </Alert>
      </Stack>{" "}
      <Divider />
      <Stack spacing={2} m={4}>
        <Alert variant="filled" severity="error">
          <AlertTitle>Error : alert titke</AlertTitle>
          This is an error alert
        </Alert>
        <Alert variant="filled" severity="warning">
          This is an warning alert
        </Alert>
        <Alert variant="filled" severity="info">
          This is an info alert
        </Alert>
        <Alert
          variant="filled"
          severity="success"
          icon={<CheckIcon fontSize="inherit" />}
        >
          This is an success alert
        </Alert>
      </Stack>
    </>
  );
}

export default MuiAler;
