import { useState } from "react";
import React from "react";
import { Stack, Rating, Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function MuiRating() {
  const [value, setValue] = useState<number | null>(3);
  const [customRating, setCustomRating] = useState<number | null>(null);
  console.log({ value });
  console.log({ customRating });
  const handaleChange = (e: React.ChangeEvent<{}>, newValue: number | null) => {
    setValue(newValue);
  };
  const customRatingChange = (
    e: React.ChangeEvent<{}>,
    newValu: number | null
  ) => {
    setCustomRating(newValu);
  };

  return (
    <Stack className="global--padding" spacing={2}>
      {/* precision={0.2} : how fraction we can divide rating */}
      <Rating
        value={value}
        onChange={handaleChange}
        precision={0.5}
        size="large"
        readOnly
      />
      <Box>
        {/* customize  rating icon */}
        <Rating
          value={value}
          onChange={customRatingChange}
          precision={0.5}
          size="large"
          icon={<FavoriteIcon fontSize="inherit" color="error" />}
          emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
          highlightSelectedOnly//use for feedback , only one icon at at a ime highlight
        />
      </Box>
    </Stack>
  );
}

export default MuiRating;
