// import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import LandingPage from "./Pages/LandingPage";
import ContactMePage from "./Pages/ContactMePage";

const router = createBrowserRouter([
  {
    path: routes.Home,
    element: <LandingPage />,
  },
  {
    path: routes.Contact,
    element: <ContactMePage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
