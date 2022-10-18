import React from "react";
import {
  Box,
  Breadcrumbs,
  Typography,
  Stack,
  Divider,
  Grid,
  Paper,
  Link,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
function MuiBreadcrumbs() {
  return (
    // separator:separator use distingush b/w two link
    // by defaut separator fowardSlash(/)
    // maxItems :define maximus link shows on display other are collaps
    //  itemsBeforeCollapse={2} :: after two item collapse start
    <Box m={2}>
      <Breadcrumbs
        aria-aria-label="breadcrumbs"
        maxItems={2}
        itemsBeforeCollapse={2}
        // itemsAfterCollapse={5}
      >
        <Link underline="hover" href="#">
          Home
        </Link>{" "}
        <Link underline="hover" href="#">
          Catalog
        </Link>{" "}
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs aria-aria-label="breadcrumbs" separator="-" maxItems={2}>
        <Link underline="hover" href="#">
          Home
        </Link>{" "}
        <Link underline="hover" href="#">
          Catalog
        </Link>{" "}
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
      <Breadcrumbs
        aria-aria-label="breadcrumbs"
        separator={<NavigateNextIcon fontSize="small" />}
      >
        <Link underline="hover" href="#">
          Home
        </Link>{" "}
        <Link underline="hover" href="#">
          Catalog
        </Link>{" "}
        <Link underline="hover" href="#">
          Accessories
        </Link>
        <Typography color="text.primary">Shoes</Typography>
      </Breadcrumbs>
    </Box>
  );
}

export default MuiBreadcrumbs;
