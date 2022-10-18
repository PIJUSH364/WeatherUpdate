import React from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  CardMedia,
} from "@mui/material";
function MuiCard() {
  return (
    <Box width="300px" className="global--margin">
      <Card>
        <CardMedia
          component="img"
          height="140px"
          image="https://images.unsplash.com/photo-1493612276216-ee3925520721?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"
          alt="unplash image"
        />
        <CardContent>
          <Typography variant="h5" gutterBottom component="div">
            React
          </Typography>{" "}
          <Typography variant="body2" color={"text.secondery"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Et,
            blanditiis fugiat voluptatem illo, dolorem, molestiae minus
            doloremque debitis nemo ad rerum pariatur tenetur.
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>{" "}
          <Button size="small">LearnMore</Button>
        </CardActions>
      </Card>
    </Box>
  );
}

export default MuiCard;
