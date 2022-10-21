import React from "react";
import { Stack, CircularProgress, LinearProgress } from "@mui/material";
function MuiProgress() {
  return (
    <Stack spacing={3} m={5}>
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={70} />
      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={70} />
    </Stack>
  );
}

export default MuiProgress;
