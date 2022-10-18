import React, { useState } from "react";
import {
  Box,
  Stack,
  Badge,
  AvatarGroup,
  Paper,
  Link,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

function MuiBadge() {
  return (
    <Stack m={4} spacing={2} direction="row">
      <Badge badgeContent={5} color="primary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={3} color="secondary">
        <MailIcon />
      </Badge>
      {/* badgeContent={0} ==> then nothing to shown */}
      <Badge badgeContent={0} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={300} color="secondary" max={999}>
        <MailIcon />
      </Badge>{" "}
      <Badge badgeContent={300} color="secondary">
        <MailIcon />
      </Badge>
      <Badge variant="dot" badgeContent={300} color="secondary">
        <MailIcon />
      </Badge>
      {/* invisibale property use for badge visible or not */}
      <Badge
        variant="dot"
        badgeContent={300}
        invisible={true}
        color="secondary"
      >
        <MailIcon />
      </Badge>
    </Stack>
  );
}

export default MuiBadge;
