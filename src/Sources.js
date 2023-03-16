import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Mess from "./pages/Mess";
import MessOne from "./pages/MessOne";
import Students from "./pages/Students";

const data = {
  home: {
    path: "/",
    element: <Home />,
    links: [
      {
        name: "mess",
        title: "List of messes",
      },
    ],
  },
  mess: { path: "/messes", element: <Mess /> },
  messid: {
    path: "/messes/:messid",
    element: <MessOne />,
    links: [
      {
        name: "menu",
        title: "Current Menu",
        permission: 0,
      },
      {
        name: "students",
        title: "List of students",
        permission: 0,
      },
      {
        name: "mess",
        title: "Back",
        permission: 0,
      },
    ],
  },
  students: {
    path: "/messes/:messid/students",
    element: <Students />,
    relative: "./students",
  },
  menu: {
    path: "/messes/:messid/menu",
    element: <Menu />,
    relative: "./menu",
  },
};

export default data;
