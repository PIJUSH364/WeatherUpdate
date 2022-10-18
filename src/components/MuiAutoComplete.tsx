import React from "react";
import { useState } from "react";
import { Stack, Autocomplete, TextField } from "@mui/material";

type skill = {
  id: number;
  label: string;
};
const skills = ["html", "css", "javascript", "react", "typescript"];

const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));
// console.log(skillsOptions);
function MuiAutoComplete() {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<skill | null>(null);

  const handleChange = (e: any, newValue: string | null) => {
    setValue(newValue);
  };

  const handleSkillChange = (e: any, newSkill: skill | null) => {
    setSkill(newSkill);
  };
  console.log({ skill});
  console.log({ value });
  return (
    <Stack className="global--padding" spacing={2} width="250px">
      <Autocomplete
        value={value}
        options={skills}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={handleChange}
        // freeSolo//!freely any thing we can typing
      />{" "}
      <Autocomplete
        value={skill}
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        onChange={handleSkillChange}
      />
    </Stack>
  );
}

export default MuiAutoComplete;
