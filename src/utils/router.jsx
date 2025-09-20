import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NewsletterPopup from "../pages/NewsletterPopup";

const browserRoutes = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "popup", element: <NewsletterPopup /> },
    ],
  },
]);

export default browserRoutes;
