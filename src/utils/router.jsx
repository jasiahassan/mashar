import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NewsletterPopup from "../pages/NewsletterPopup";
import WhyMashar from "../pages/WhyMashar";
import CollapseExpandCard from "../pages/test";

const browserRoutes = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "popup", element: <NewsletterPopup /> },
      { path: "whyMashar", element: <WhyMashar /> },
      { path: "test", element: <CollapseExpandCard /> },
    ],
  },
]);

export default browserRoutes;
