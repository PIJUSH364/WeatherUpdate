import {
  Box,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import BookmarkIcon from "@mui/icons-material/Bookmark";

function MuiCheckbox() {
  const [acceptTnc, setAcceptTnc] = useState(false);
  const [Skills, setSkills] = useState<string[]>([]);
  const handlechange = () => {
    setAcceptTnc(!acceptTnc);
  };
  const handleSkillChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const index = Skills.indexOf(e.target.value);
    console.log(index);
    if (index === -1) {
      setSkills([...Skills, e.target.value]);
    } else {
      setSkills(Skills.filter((skill) => skill !== e.target.value));
    }
  };
  console.log({ Skills });
  //   console.log({ acceptTnc });
  return (
    <Box className="global--padding">
      <Typography gutterBottom variant="h5" color="success">
        Single checkbox ::
      </Typography>
      <Box>
        <FormControlLabel
          checked={acceptTnc}
          onChange={handlechange}
          label="I accept terms and condition"
          control={<Checkbox />}
        ></FormControlLabel>
      </Box>{" "}
      <Box>
        <Checkbox
          icon={<BookmarkBorderIcon />}
          checkedIcon={<BookmarkIcon />}
          checked={acceptTnc}
          onChange={handlechange}
        ></Checkbox>
      </Box>
      <Typography gutterBottom variant="h5" color="success">
        Multiple checkbox ::
      </Typography>{" "}
      <Box>
        <FormControl>
          <FormLabel>Skills</FormLabel>
          <FormGroup row>
            <FormControlLabel
              label="HTML"
              control={
                <Checkbox
                  value="html"
                  checked={Skills.includes("html")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="CSS"
              control={
                <Checkbox
                  value="css"
                  checked={Skills.includes("css")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
            <FormControlLabel
              label="JAVASCRIPT"
              control={
                <Checkbox
                  value="js"
                  size="small"
                  checked={Skills.includes("js")}
                  onChange={handleSkillChange}
                />
              }
            ></FormControlLabel>
          </FormGroup>
        </FormControl>
      </Box>
    </Box>
  );
}

export default MuiCheckbox;
//
