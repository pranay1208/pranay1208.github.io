// import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import {
  AboutMePage,
  ContactMePage,
  LandingPage,
  NotFoundPage,
} from "./Pages/";

const router = createBrowserRouter([
  {
    path: routes.Home,
    element: <LandingPage />,
  },
  {
    path: routes.Contact,
    element: <ContactMePage />,
  },
  {
    path: routes.About,
    element: <AboutMePage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
