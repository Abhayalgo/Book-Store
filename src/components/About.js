import { Box, Typography } from "@mui/material";
import React from "react";

const About  = () => {
  return  (<div>
<Box display="flex" flexDirection="column" alignItems="centre">
  <Typography sx={{fontFamily: "fantasy"}} variant ="h2">This is crud application </Typography>
  <Typography sx={{fontFamily:"fantasy"}}variant ="h3">By MERN  STACK </Typography>
</Box>
  </div>
  );
};

export default About;