import { Box, Container } from "@mui/material";
import React from "react";
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";
import Wrapper from "./components/Wrapper";
import data from "./Sources";

const router = createBrowserRouter(
  Object.keys(data).map((page) => {
    return {
      path: data[page].path,
      element: <Wrapper>{data[page].element}</Wrapper>,
    };
  })
);

function App() {
  return (
    <React.Fragment>
      <Container>
        <Box sx={{ pt: 10, pb: 10 }}>
          <RouterProvider router={router}></RouterProvider>
        </Box>
      </Container>
    </React.Fragment>
  );
}

export default App;
