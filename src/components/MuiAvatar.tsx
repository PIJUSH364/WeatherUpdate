import React, { useState } from "react";
import {
  Box,
  Stack,
  Avatar,
  AvatarGroup,
  Paper,
  Link,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";

function MuiAvatar() {
  return (
    <Stack spacing={4} m={4}>
      <Stack direction="row" spacing={1}>
        <AvatarGroup max={4}>
          <Avatar
            sx={{
              bgcolor: "primary.light",
            }}
          >
            BW
          </Avatar>
          <Avatar
            sx={{
              bgcolor: "primary.light",
            }}
          >
            CK
          </Avatar>
          <Avatar
            sx={{
              bgcolor: "primary.light",
            }}
            src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="jon"
          />
          <Avatar src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80" />{" "}
          <Avatar
            src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            alt="bob"
          />
        </AvatarGroup>
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          sx={{
            width: 60,
            height: 60,
          }}
          src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          alt="jon"
        />
        <Avatar
          sx={{
            width: 60,
            height: 60,
          }}
          className="border--avatar"
          src="https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80"
        />{" "}
        <Avatar
          sx={{
            width: 60,
            height: 60,
          }}
          src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="bob"
        />
      </Stack>
      <Stack direction="row" spacing={1}>
        <Avatar
          sx={{
            bgcolor: "primary.light",
          }}
          variant="square"
        >
          BW
        </Avatar>
        <Avatar
          variant="rounded"
          sx={{
            bgcolor: "primary.light",
          }}
        >
          CK
        </Avatar>
      </Stack>
    </Stack>
  );
}

export default MuiAvatar;
