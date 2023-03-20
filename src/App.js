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
      <RouterProvider router={router}></RouterProvider>
    </React.Fragment>
  );
}

export default App;
