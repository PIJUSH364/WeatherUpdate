import { Typography } from "@mui/material";
import React from "react";

function MuiTyprography() {
  return (
    <div>
      {/* heading typrography */}
      <Typography variant="h1">H1 Heading</Typography>{" "}
      <Typography variant="h2">H2 Heading</Typography>{" "}
      {/* gutterBottom==> create a margin button */}
      <Typography variant="h3" gutterBottom>
        H3 Heading
      </Typography>{" "}
      <Typography variant="h4" gutterBottom>
        H4 Heading
      </Typography>{" "}
      <Typography variant="h5">H5 Heading</Typography>{" "}
      <Typography variant="h6">H6 Heading</Typography>
      {/* subtitle typrography */}
      <Typography variant="subtitle1">subtitle1</Typography>
      <Typography variant="subtitle1">subtitle2</Typography>
      {/* body typrography */}
      <Typography variant="body1">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illo
        libero recusandae inventore veritatis error repellat aut ab iure, hic
        voluptas dolorem distinctio. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Nam maxime ipsa at ducimus, obcaecati molestiae
        blanditiis quasi repellendus similique! Alias ad, quam tempore soluta
        fuga est unde eligendi nam saepe nobis hic sit molestiae, blanditiis,
        voluptatum doloribus nesciunt in sequi corporis animi!z{" "}
      </Typography>{" "}
      <Typography variant="body2">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores illo
        libero recusandae inventore veritatis error repellat aut ab iure, hic
        voluptas dolorem distinctio. Lorem, ipsum dolor sit amet consectetur
        adipisicing elit. Nam maxime ipsa at ducimus, obcaecati molestiae
        blanditiis quasi repellendus similique! Alias ad, quam tempore soluta
        fuga est unde eligendi nam saepe nobis hic sit molestiae, blanditiis,
        voluptatum doloribus nesciunt in sequi corporis animi!z{" "}
      </Typography>
    </div>
  );
}

export default MuiTyprography;
