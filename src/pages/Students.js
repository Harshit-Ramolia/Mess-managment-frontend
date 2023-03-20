import { Button, IconButton, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Lists from "../components/Lists";
import { base_url } from "../constants";
import data from "../Sources";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from '@mui/icons-material/Delete';


const ListData = {
  title: "List of Messes",
  blocks: [{ val1: "a", val2: "b" }],
};

function Students() {
  const [data, setData] = useState({
    title: "",
    rows: [{}],
  });

  useEffect(() => {
    axios.get(base_url + `/students`).then((response) => {
      setData((prev) => ({
        title: `Students in ${response.data[0]["Mess Name"]} Mess`,
        rows: response.data.map((ele) => ({
          "Roll Number": ele["Roll Number"],
          Name: ele["Name"],
          Email: ele["Email"],
          Gender: ele["Gender"],
          "Mess": ele["Mess Name"],
          Edit: (
            <IconButton
              color="primary"
              component="label"
              variant="contained"
              sx={{ border: "1px solid" }}
            >
              <EditIcon />
            </IconButton>
          ),
          Delete: (
            <IconButton
              color="primary"
              component="label"
              variant="contained"
              sx={{ border: "1px solid" }}
            >
              <DeleteIcon />
            </IconButton>
          ),
        })),
      }));
      console.log(response.data);
    });
  }, []);

  return (
    <React.Fragment>
      <Lists {...data} />
    </React.Fragment>
  );
}

export default Students;
