import { Box, TextField, MenuItem, Typography } from "@mui/material";
import React, { useState } from "react";

function MuiSelect() {
  const [singleCountry, setSingleCountry] = useState("");
  const [multiCountry, setMultiCountry] = useState<string[]>([]);
  console.log({ singleCountry });
  console.log({ multiCountry });
  const handleChangeSingle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSingleCountry(e.target.value as string);
  };
  const handleChangeMulti = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setMultiCountry(typeof value === "string" ? value.split(",") : value);
  };
  return (
    // box component use insted of div tag
    // in a box tag we can use two inline css property width and height
    <Box className="global--padding">
      {/* single select dropDown */}
      <Box width="200px">
        <Typography gutterBottom>single select dropDown</Typography>
        <TextField
          label="select countery"
          select
          value={singleCountry}
          onChange={handleChangeSingle}
          fullWidth //fullwidth : fixed width same as parent component(inherit width)
        >
          <MenuItem value="IN">India</MenuItem>{" "}
          <MenuItem value="US">USA</MenuItem>{" "}
          <MenuItem value="AU">Austria</MenuItem>
        </TextField>{" "}
      </Box>
      <Box width="200px">
        {/* multi--select dropDown */}
        <Typography gutterBottom>multi--select dropDown</Typography>
        <TextField
          label="select countery"
          select
          value={multiCountry}
          onChange={handleChangeMulti}
          fullWidth //fullwidth : fixed width same as parent component(inherit width)
          SelectProps={{
            multiple: true,
          }}
          color="success"
          helperText="u can select multiple option"
        >
          <MenuItem value="IN">India</MenuItem>{" "}
          <MenuItem value="US">USA</MenuItem>{" "}
          <MenuItem value="AU">Austria</MenuItem>
        </TextField>
      </Box>
    </Box>
  );
}

export default MuiSelect;
