import { Stack, TextField, Typography, InputAdornment } from "@mui/material";
import React from "react";
import { useState } from "react";

import "./Home.css";
function MuiTextField() {
  const [value, setValue] = useState("");
  return (
    <Stack spacing={4} className="global--padding">
      <Typography variant="h5"> input </Typography>
      <Stack direction="row" spacing={2}>
        <TextField label="name" variant="outlined" />{" "}
        <TextField label="name" variant="filled" />{" "}
        <TextField label="name" variant="standard" />
      </Stack>
      <Stack direction="row" spacing={2}>
        <TextField label="Small Secondery" size="small" color="secondary" />
      </Stack>
      <Stack direction="row" spacing={2}>
        {/* important thing error validation  */}
        <TextField
          label="From input"
          required
          value={value}
          onChange={(e) => setValue(e.target.value)}
          error={!value}
          helperText={!value ? "requried" : "do not share your password with anyone"}
        />
        <TextField
          label="PassWord"
          required
          type="password"
          helperText="Do not share ypur password anyone"
        />
        <TextField
          label="PassWord"
          required
          type="password"
          disabled
          helperText="unable to fill this field"
        />
        <TextField
          label="Read only input"
          inputProps={{ readOnly: true }}
          helperText="unable to fill this field"
        />{" "}
      </Stack>{" "}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>{" "}
    </Stack>
  );
}

export default MuiTextField;
