import React, { useState, useEffect } from "react";
import { Stack, Box, Avatar, Typography, Skeleton } from "@mui/material";
import { Stats } from "fs";
function MuiSkelton() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Stack m={4}>
      <Stack width="300px" spacing={1} m={4}>
        <Skeleton animation="wave" />
        <Skeleton variant="text" />
        <Skeleton
          variant="circular"
          width={40}
          height={40}
          animation={false}
        />{" "}
        <Skeleton
          variant="rectangular"
          width={280}
          height={140}
          animation="wave"
        />
      </Stack>
      <Box sx={{ width: "300px" }}>
        {loading ? (
          <Skeleton
            variant="rectangular"
            width={256}
            height={144}
            animation="wave"
          />
        ) : (
          <img
            src="https://images.unsplash.com/photo-1508138221679-760a23a2285b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="skelton--img"
            width={256}
            height={144}
          />
        )}
        <Stack
          direction="row"
          spacing={1}
          sx={{ width: "100%", marginTop: "12px" }}
        >
          {loading ? (
            <Skeleton
              width={40}
              height={40}
              animation="wave"
              variant="circular"
            />
          ) : (
            <Avatar sx={{ textAlign: "center" }}>P</Avatar>
          )}
          <Stack sx={{ width: "80%" }}>
            {loading ? (
              <>
                <Typography variant="body1">
                  {" "}
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
                <Typography variant="body2">
                  {" "}
                  <Skeleton variant="text" width="100%" animation="wave" />
                </Typography>
              </>
            ) : (
              <Typography variant="body1">React Skleton tutorial</Typography>
            )}
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
}

export default MuiSkelton;
