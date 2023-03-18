import React from "react";
import Lists from "../components/Lists";

const ListData = {
  title: "List of Messes",
  rows: [
    { val1: "a", val2: "b", link: "./asd" },
    { val1: "a", val2: "b", link: "./asd" },
  ],
};

function Mess() {
  return (
    <React.Fragment>
      <Lists {...ListData} />
    </React.Fragment>
  );
}

export default Mess;
