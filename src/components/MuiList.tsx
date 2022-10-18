import React, { useState } from "react";
import {
  Box,
  Stack,
  Badge,
  AvatarGroup,
  ListItemText,
  ListItem,
  List,
  ListItemIcon,
  Avatar,
  ListItemAvatar,
  ListItemButton,
  Divider,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";
function MuiList() {
  return (
    <Box
      m={4}
      sx={{
        width: "400px",
        bgcolor: "#efefef",
      }}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <MailIcon />
            </ListItemIcon>
            <ListItemText
              primary="list item 1"
              secondary="secoundery"
            ></ListItemText>
          </ListItemButton>
        </ListItem>{" "}
        <Divider />
        <ListItem>
          {" "}
          <ListItemIcon>
            <ListItemAvatar>
              <Avatar>
                <MailIcon />
              </Avatar>{" "}
            </ListItemAvatar>
          </ListItemIcon>
          <ListItemText primary="list item 2"></ListItemText>
        </ListItem>{" "}
        <Divider />
        <ListItem>
          <ListItemText primary="list item 3"></ListItemText>
        </ListItem>
      </List>
    </Box>
  );
}

export default MuiList;
