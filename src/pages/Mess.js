import axios from "axios";
import React, { useEffect, useState } from "react";
import Lists from "../components/Lists";
import { base_url } from "../constants";

const ListData = {
  title: "List of Messes",
  rows: [
    { val1: "a", val2: "b", link: "./asd" },
    { val1: "a", val2: "b", link: "./asd" },
  ],
};

function Mess() {
  const [data, setData] = useState({
    title: "List of Messes",
    rows: [{}],
  });
  useEffect(() => {
    axios.get(base_url + "/messes").then((response) => {
      setData((prev) => ({ title: "List of Messes", rows: response.data.map(ele => ({...ele, link:`./${ele["Mess ID"]}`})) }));
      console.log(response.data);
    });
  }, []);
  console.log(data);
  return (
    <React.Fragment>
      <Lists {...data} />
    </React.Fragment>
  );
}

export default Mess;
