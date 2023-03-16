import { Box, Paper } from "@mui/material";
import React from "react";

function Block({ block }) {
  return (
    <React.Fragment>
      <Paper >
        {block &&
          Object.keys(block).map((ele) => (
            <Box sx={{ m: 1 }}>
              <strong>{ele} : </strong>
              {block[ele]}
            </Box>
          ))}
      </Paper>
    </React.Fragment>
  );
}

export default Block;
