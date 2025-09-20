import { RouterProvider } from "react-router-dom";
import browserRoutes from "./utils/router";

function App() {
  return <RouterProvider router={browserRoutes} />;
}

export default App;
