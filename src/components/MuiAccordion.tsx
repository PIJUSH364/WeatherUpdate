import React, { useState } from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

function MuiAccordion() {
  const [expanded, setExpanded] = useState<string | false>(false);
  const handleChange = (isExpanded: boolean, panel: string) => {
    setExpanded(isExpanded ? panel : false);
  };
  return (
    <div className="global--margin">
      <Accordion
        expanded={expanded === "panel1"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel1")}
      >
        <AccordionSummary
          id="panel1-header"
          aria-controls="panel1-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accodian 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in
            voluptatum beatae aut libero ullam tenetur iure exercitationem magni
            quo reprehenderit harum facere quidem deserunt repellendus labore
            laborum voluptates accusantium sed dolores culpa vitae, corporis
            consequatur non! Dolore a perspiciatis nemo beatae itaque error
            excepturi.
          </Typography>
        </AccordionDetails>
      </Accordion>{" "}
      <Accordion
        expanded={expanded === "panel2"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel2")}
      >
        <AccordionSummary
          id="panel2-header"
          aria-controls="panel2-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accodian 2</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in
            voluptatum beatae aut libero ullam tenetur iure exercitationem magni
            quo reprehenderit harum facere quidem deserunt repellendus labore
            laborum voluptates accusantium sed dolores culpa vitae, corporis
            consequatur non! Dolore a perspiciatis nemo beatae itaque error
            excepturi.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        expanded={expanded === "panel3"}
        onChange={(event, isExpanded) => handleChange(isExpanded, "panel3")}
      >
        <AccordionSummary
          id="panel3-header"
          aria-controls="panel3-content"
          expandIcon={<ExpandMoreIcon />}
        >
          <Typography>Accodian 3</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {" "}
          <Typography variant="body1">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet in
            voluptatum beatae aut libero ullam tenetur iure exercitationem magni
            quo reprehenderit harum facere quidem deserunt repellendus labore
            laborum voluptates accusantium sed dolores culpa vitae, corporis
            consequatur non! Dolore a perspiciatis nemo beatae itaque error
            excepturi.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default MuiAccordion;
