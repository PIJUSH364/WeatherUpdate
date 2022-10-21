import React, { useState } from "react";
import { Box, Stack, Chip, Avatar } from "@mui/material";
import EmojiEmotionsIcon from "@mui/icons-material/EmojiEmotions";
function MuiChip() {
  const [chips, setChips] = useState(["chip1", "chip2", "chip3"]);
  const handkeDelete = (e: string) => {
    setChips((chips) => chips.filter((chip) => chip !== e));
  };
  return (
    <Stack direction="row" spacing={2} m={3}>
      <Chip label="chip" />
      <Chip label="colorChip" color="primary" />{" "}
      <Chip label="sizeChip" color="primary" size="small" />{" "}
      <Chip label="outlineChip" color="primary" variant="outlined" />{" "}
      <Chip
        label="AvatarChip"
        color="secondary"
        variant="outlined"
        avatar={<Avatar>A</Avatar>}
      />
      <Chip
        label="IconChip"
        color="secondary"
        variant="outlined"
        avatar={
          <Avatar>
            <EmojiEmotionsIcon />
          </Avatar>
        }
      />
      <Chip
        label="clickAbleChip"
        color="success"
        onClick={() => alert("click")}
      />{" "}
      <Chip
        label="clickDeleteChip"
        color="error"
        onClick={() => alert("clicked")}
        onDelete={() => alert("delete handaler call")}
      />
      <>
        {" "}
        {chips.map((chip, index) => (
          <Chip key={index} label={chip} onDelete={() => handkeDelete(chip)} />
        ))}
      </>
    </Stack>
  );
}

export default MuiChip;
