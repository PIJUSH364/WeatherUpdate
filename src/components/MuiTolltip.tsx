import React from "react";
import { Box,  Tooltip, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
function MuiTolltip() {
  return (
    <Box m={4}>
      <Tooltip
        title="Delete"
        placement="right-end"
        color="error"
        arrow
        enterDelay={500}
        leaveDelay={200}
      >
        <IconButton>
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
}

export default MuiTolltip;
