import Home from "./pages/Home";
import Mess from "./pages/Mess";

const data = {
  home: { path: "/", element: Home() },
  mess: { path: "/mess", element: Mess() },
};

export default data;
