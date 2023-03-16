import { Typography } from "@mui/material";
import React from "react";
import Block from "./Block";

function Lists({ title, blocks }) {
  return (
    <React.Fragment>
      <Typography variant="h3" align="center">
        {title}
      </Typography>
      {blocks.map((block) => (
        <Block block={block} />
      ))}
    </React.Fragment>
  );
}

export default Lists;
