import { createBrowserRouter } from "react-router-dom";
import Register from "./Register";
import Login from "./Login";
import App from "../App";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

export default appRouter;