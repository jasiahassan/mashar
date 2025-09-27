import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import NewsletterPopup from "../pages/NewsletterPopup";
import WhyMashar from "../pages/WhyMashar";
import CollapseExpandCard from "../pages/test";
import OurSignature from "../pages/OurSignature";

const browserRoutes = createBrowserRouter([
  {
    path: "/",
    children: [
      { index: true, element: <Home /> },
      { path: "popup", element: <NewsletterPopup /> },
      { path: "whyMashar", element: <WhyMashar /> },
      { path: "test", element: <CollapseExpandCard /> },
      { path: "ourSignature", element: <OurSignature /> },
    ],
  },
]);

export default browserRoutes;
