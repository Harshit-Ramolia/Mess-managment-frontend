import { Box, Container } from "@mui/material";
import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import data from "./Sources";

const router = createBrowserRouter(
  Object.keys(data).map((page) => {
    return {
      path: data[page].path,
      element: data[page].element,
    };
  })
);

function App() {
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ pt: 10 }}>
          <RouterProvider router={router} />
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
