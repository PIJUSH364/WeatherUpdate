import { Box, FormControlLabel, Switch } from "@mui/material";
import React, { useState } from "react";

function MuiSwitch() {
  const [checked, setChecked] = useState(false);
  const handleChecked = (event: any) => {
    setChecked(event.target.checked);
  };
  console.log({ checked });
  return (
    <Box className="global--padding">
      <Box>
        {" "}
        <FormControlLabel
          label="Dark Mode"
          control={<Switch color="success" />}
          checked={checked}
          onChange={handleChecked}
        />
      </Box>
      <Box>
        
      </Box>
    </Box>
  );
}

export default MuiSwitch;
