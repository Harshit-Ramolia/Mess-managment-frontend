import { Box, Button } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Wrapper({ children }) {
  let location = useLocation();
  console.log(location);
  return (
    <React.Fragment>
      {children}
      {location.pathname !== "/" && (
        <Box sx={{ display: "flex", justifyContent: "space-between", pt:2 }}>
          <Link to=".." relative="path">
            <Button variant="outlined" size="large">
              Back
            </Button>
          </Link>
          <Link to="/">
            <Button variant="outlined" size="large">
              Home
            </Button>
          </Link>
        </Box>
      )}
    </React.Fragment>
  );
}

export default Wrapper;
