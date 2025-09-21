import { RouterProvider } from "react-router-dom";
import browserRoutes from "./utils/router";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <RouterProvider router={browserRoutes} />
      <Footer />
    </>
  );
}

export default App;
