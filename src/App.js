// import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import LandingPage from "./Pages/LandingPage";

const router = createBrowserRouter([
  {
    path: routes.Home,
    element: <LandingPage />,
  },
  {
    path: routes.Contact,
    element: <div>ContactMe</div>,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
