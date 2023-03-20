import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Mess from "./pages/Mess";
import MessOne from "./pages/MessOne";
import Students from "./pages/Students";
import axios from "axios";

const data = {
  home: {
    path: "/",
    element: <Home />,
    links: [
      {
        name: "mess",
        title: "List of messes",
      },
      {
        name: "students",
        title: "List of students",
      },
    ],
  },
  mess: { path: "/messes", element: <Mess /> },
  // messid: {
  //   path: "/messes/:messid",
  //   element: <MessOne />,
  // },
  students: {
    path: "/students",
    element: <Students />,
    relative: "./students",
  },
  student_edit: {
    path: "students"
  }
  // menu: {
  //   path: "/messes/:messid/menu",
  //   element: <Menu />,
  //   relative: "./menu",
  // },
};

export default data;
