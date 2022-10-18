import {
  Button,
  ButtonGroup,
  IconButton,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";
import { Stack } from "@mui/system";
import SendIcon from "@mui/icons-material/Send";
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
import React, { useState } from "react";
import "./Home.css";
function MuiButton() {
  const [format, setFormats] = useState<string | null>(null);
  console.log({ format });
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    updatedFormat: string | null
  ) => {
    setFormats(updatedFormat);
  };
  return (
    <div className="margin--all">
      <Stack spacing={4}>
        {/* stack bydefault direction column */}
        <Typography variant="h5"> Button type</Typography>
        {/* type of button */}
        <Stack spacing={2} direction="row">
          {/* stack means flex div --- direction means flexdirection */}
          <Button variant="text" href="http://google.com/">
            text
          </Button>
          <Button variant="contained">contained</Button>
          <Button variant="outlined">outline</Button>
        </Stack>
        <Typography variant="h5"> Button color</Typography>
        {/* color of button */}
        <Stack spacing={2} direction="row">
          <Button variant="contained" color="primary">
            Primary
          </Button>{" "}
          <Button variant="contained" color="secondary">
            Secondary
          </Button>{" "}
          <Button variant="contained" color="error">
            Error
          </Button>{" "}
          <Button variant="contained" color="warning">
            Wrning
          </Button>{" "}
          <Button variant="contained" color="info">
            Info
          </Button>{" "}
          <Button variant="contained" color="success">
            Success
          </Button>{" "}
        </Stack>

        <Typography variant="h5"> Button size</Typography>
        {/* size of button */}
        <Stack display="block" spacing={2} direction="row">
          <Button variant="contained" size="small">
            small
          </Button>{" "}
          <Button variant="contained" size="medium">
            medium
          </Button>{" "}
          <Button variant="contained" size="large">
            large
          </Button>{" "}
        </Stack>

        <Typography variant="h5">Meterialui Icon</Typography>
        {/* size of button */}
        <Stack spacing={2} direction="row">
          <Button
            startIcon={<SendIcon />}
            variant="contained"
            disableRipple
            onClick={() => alert(" disableRipple on")}
          >
            Send
          </Button>{" "}
          <Button endIcon={<SendIcon />} variant="contained" disableElevation>
            Send
          </Button>
          <IconButton aria-label="send" size="small" color="success">
            <SendIcon />
          </IconButton>
        </Stack>
        <Typography variant="h5">Button group</Typography>
        {/* Group of button */}
        <Stack direction="row">
          <ButtonGroup
            variant="contained"
            orientation="vertical"
            size="small"
            color="secondary"
            aria-label="alignment button group"
          >
            {/* orientation="vertical" ==> orientation decide button row wise or column wise */}
            <Button onClick={() => alert("left button click")}>left</Button>{" "}
            <Button onClick={() => alert("center button click")}>center</Button>{" "}
            <Button onClick={() => alert("right button click")}>right</Button>
          </ButtonGroup>
        </Stack>
        <Typography variant="h5">Toggle Button</Typography>
        {/* Toggle button */}
        <Stack direction="row">
          <ToggleButtonGroup
            aria-label="text formatting"
            value={format}
            onChange={handleFormatChange}
            size="small"
            color="success"
            exclusive
          >
            <ToggleButton value="bold" aria-label="bold">
              <FormatBoldIcon />
            </ToggleButton>{" "}
            <ToggleButton value="italic" aria-label="italic">
              <FormatItalicIcon />
            </ToggleButton>{" "}
            <ToggleButton value="underline" aria-label="underline">
              <FormatUnderlinedIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </Stack>
      </Stack>
    </div>
  );
}

export default MuiButton;
//
