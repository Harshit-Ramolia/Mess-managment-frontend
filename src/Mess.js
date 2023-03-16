import React from "react";
import Lists from "../components/Lists";

const ListData = {
  title: "List of Messes",
  blocks: [{ val1: "a", val2: "b" }],
};

function Mess() {
  return (
    <React.Fragment>
      <Lists {...ListData} />
    </React.Fragment>
  );
}

export default Mess;
