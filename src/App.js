// import logo from "./logo.svg";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes";
import { ContactMePage, LandingPage, NotFoundPage } from "./Pages/";

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
    path: "*",
    element: <NotFoundPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
