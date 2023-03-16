import Home from "./pages/Home";
import Mess from "./pages/Mess";
import MessOne from "./pages/MessOne";
import Student from "./pages/Student";

const data = {
  home: { path: "/", element: <Home /> },
  mess: { path: "/messes", element: <Mess /> },
  messid: {
    path: "/messes/:messid",
    element: <MessOne />,
    links: [
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
    element: <Student />,
    relative: "./students",
  },
};

export default data;
