import { AppBar, Box, Button, Container, Toolbar } from "@mui/material";
import React from "react";
import { Link, useLocation } from "react-router-dom";

function Wrapper({ children }) {
  let location = useLocation();
  return (
    <React.Fragment>
      <Box backgroundColor="black" color="white" p={2} display="flex">
        <Link to="/messes">
          <Button
            sx={{ color: "white", borderColor: "white" }}
            variant="outlined"
          >
            List Of Messes
          </Button>
        </Link>
        <Box p={1} />
        <Link to="/students">
          <Button
            sx={{ color: "white", borderColor: "white" }}
            variant="outlined"
          >
            List Of Students
          </Button>
        </Link>
        <Box flexGrow={1} />
        <Link to="/">
          <Button
            sx={{ color: "white", borderColor: "white" }}
            variant="outlined"
          >
            Login
          </Button>
        </Link>
      </Box>
      <Container>
        <Box sx={{ pt: 10, pb: 10 }}>
          {children}
          {location.pathname !== "/" && (
            <Box
              sx={{ display: "flex", justifyContent: "space-between", pt: 2 }}
            >
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
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default Wrapper;
