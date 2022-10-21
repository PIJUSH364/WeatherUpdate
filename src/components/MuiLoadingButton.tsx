import React from "react";
import { Stack, CircularProgress, LinearProgress } from "@mui/material";
import { LoadingButton } from "@mui/lab";
import SaveIcon from "@mui/icons-material/Save";
function MuiLoadingButton() {
  return (
    <Stack direction="row" spacing={2} m={5}>
      <LoadingButton variant="outlined"> Submit</LoadingButton>{" "}
      <LoadingButton variant="outlined" loading>
        Submit"
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="loading...">
        Fetch data
      </LoadingButton>
      <LoadingButton variant="outlined" loadingIndicator="loading..." loading>
        Fetch data
      </LoadingButton>
      <LoadingButton
        variant="outlined"
        loading
        startIcon={<SaveIcon />}
        loadingPosition="start"
      >
        Save
      </LoadingButton>{" "}
      <LoadingButton
        variant="outlined"
        startIcon={<SaveIcon />}
        loadingPosition="start"
      >
        Save
      </LoadingButton>
    </Stack>
  );
}

export default MuiLoadingButton;
