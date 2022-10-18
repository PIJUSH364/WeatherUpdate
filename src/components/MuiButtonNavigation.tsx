import React, { useState } from "react";
import {
  Box,
  Stack,
  Divider,
  Grid,
  Paper,
  Link,
  BottomNavigation,
  BottomNavigationAction,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";
import { positions, width } from "@mui/system";
function MuiButtonNavigation() {
  const [value, setValue] = useState(0);
  return (
    <BottomNavigation
      sx={{ width: "100%", position: "absolute", bottom: 0 }}
      value={value}
      onChange={(e, newValue) => setValue(newValue)}
      // showLabels //at atime all label name are shows
    >
      <BottomNavigationAction label="home" icon={<HomeIcon />} />{" "}
      <BottomNavigationAction label="favorities" icon={<FavoriteIcon />} />{" "}
      <BottomNavigationAction label="person" icon={<PersonIcon />} />
    </BottomNavigation>
  );
}

export default MuiButtonNavigation;
