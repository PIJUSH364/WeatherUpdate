import React, { useState } from "react";
import {
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Button,
  Menu,
  MenuItem,
} from "@mui/material";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MuiLink from "./MuiLink";
import MuiBreadcrumbs from "./MuiBreadcrumbs";
function MuiNavbar() {
  const [anchorE1, setAnchorE1] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorE1);
  const handaleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorE1(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorE1(null);
  };
  console.log(anchorE1);
  return (
    <>
      <AppBar>
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="logo"
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            POKEAMONAPP
          </Typography>
          <Stack direction="row" spacing={2}>
            {" "}
            <Button color="inherit">Features</Button>{" "}
            <Button color="inherit">price</Button>{" "}
            <Button
              color="inherit"
              id="resources-button"
              onClick={handaleClick}
              aria-haspopup="true"
              aria-controls={open ? "resource-menu" : undefined}
              aria-expanded={open ? "true" : undefined}
              endIcon={<KeyboardArrowDownIcon />}
            >
              resource
            </Button>
            <Button color="inherit">about</Button>{" "}
            <Button color="inherit">login</Button>
          </Stack>
          <Menu
            id="resource-menu"
            anchorEl={anchorE1}
            open={open}
            MenuListProps={{
              "aria-labelledby": "resources-button",
            }}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            <MenuItem onClick={handleClose}>Blog</MenuItem>
            <MenuItem onClick={handleClose}>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      <Stack m={8} spacing={4} direction="row">
        <MuiLink />
      </Stack>{" "}
      <Stack m={8} spacing={4} direction="row">
        <MuiBreadcrumbs />
      </Stack>
    </>
  );
}

export default MuiNavbar;
