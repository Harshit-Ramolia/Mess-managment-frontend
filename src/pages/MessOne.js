import { Typography } from "@mui/material";
import React from "react";
import { Link, useParams } from "react-router-dom";
import Lists from "../components/Lists";
import data from "../Sources";

const ListData = {
  title: "List of Messes",
  blocks: [{ val1: "a", val2: "b" }],
};

function MessOne() {
  let params = useParams();
  return (
    <React.Fragment>
      {data["messid"]["links"].map((ele) => {
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

export default MessOne;
