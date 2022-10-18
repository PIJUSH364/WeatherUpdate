import React from "react";
import { Box, Stack, Divider, Grid, Paper } from "@mui/material";
function MuiLayout() {
  return (
    <Paper sx={{ padding: "32px" }} elevation={4}>
      <Stack
        className="global--padding global--margin"
        sx={{
          border: "2px solid tomato",
        }}
        direction="row"
        spacing={5}
        divider={<Divider orientation="vertical" flexItem />}
      >
        <Box
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
              cursor: "pointer",
            },
          }}
        >
          MuiLayout
        </Box>
        <Box component="span">MuiLayout</Box>
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        >
          MuiLayout
        </Box>
      </Stack>
      <Grid
        className="global--padding global--margin"
        container
        spacing={2}
        rowSpacing={1}
        columnSpacing={2}
      >
        {/* grid have 12 column */}
        {/* xs ==> define auto layout */}
        {/* xs="auto" ==> take only nessery width */}
        <Grid item xs={3} sm={9}>
          <Box bgcolor="primary.light" p={2}>
            Item1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box bgcolor="primary.light" p={2}>
            Item2
          </Box>
        </Grid>
        <Grid item xs={8}>
          <Box bgcolor="primary.light" p={2}>
            Item3
          </Box>
        </Grid>
        <Grid item xs={3}>
          <Box bgcolor="primary.light" p={2}>
            Item4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
}

export default MuiLayout;

// box-->component use insted of div
// component="span" ---> box now use as a span tag
