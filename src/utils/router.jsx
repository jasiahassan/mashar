import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";

const browserRoutes = createBrowserRouter([
  {
    path: "/",
    children: [{ index: true, element: <Home /> }],
  },
]);

export default browserRoutes;
