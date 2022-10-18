import React from "react";
import { Box, Stack, Divider, Grid, Paper, Link } from "@mui/material";
function MuiLink() {
  return (
    <Stack spacing={2} direction="row" m={4}>
      <Link href="#" underline="none" variant="h5">
        Link
      </Link>
      <Link href="#" color="secondary" underline="hover">
        Link2--secoundery
      </Link>
    </Stack>
  );
}

export default MuiLink;
