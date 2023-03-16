import { Box, Button } from "@mui/material";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Wrapper({ children }) {
  let location = useLocation();
  console.log(location);
  return (
    <React.Fragment>
      {children}
      {location.pathname != "/" && (
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button variant="outlined" size="large">
            <Link to=".." relative="path">Back</Link>
          </Button>
          <Button variant="outlined" size="large">
            <Link to="/">Home</Link>
          </Button>
        </Box>
      )}
    </React.Fragment>
  );
}

export default Wrapper;
