import { Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import data from "../Sources";

function Home() {
  return (
    <React.Fragment>
      
      {data["home"]["links"].map((ele) => {
        return (
          <Typography>
            <Link
              to={data[ele["name"]]["relative"] || data[ele["name"]]["path"]}
              relative="path"
            >
              {ele["title"]}
            </Link>
          </Typography>
        );
      })}
    </React.Fragment>
  );
}

export default Home;
