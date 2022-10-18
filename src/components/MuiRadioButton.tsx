import {
  Box,
  FormControl,
  FormControlLabel,
  FormLabel,
  RadioGroup,
  Radio,
  Typography,
  FormHelperText,
} from "@mui/material";
import React, { useState } from "react";

function MuiRadioButton() {
  const [value, setValue] = useState("");
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  console.log({ value });
  return (
    <Box className="global--padding">
      <FormControl>
        <FormLabel id="job-exprience-group-label" color="secondary">
          Year of exprience
        </FormLabel>
        <RadioGroup
          name="job-exprience-group"
          aria-labelledby="job-exprience-group-label"
          value={value}
          onChange={handleChange}
          row
        >
          <FormControlLabel
            control={<Radio color="success" size="small" />}
            label="0-2"
            value="0-2"
          />
          <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
          <FormControlLabel control={<Radio />} label="6-10" value="6-10" />
        </RadioGroup>
        <FormHelperText>invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
}

export default MuiRadioButton;
