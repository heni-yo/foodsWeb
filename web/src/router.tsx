import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LoginForm from "./views/LoginForm";
import RegisterForm from "./views/RegisterForm";
import Home from "./views/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement:<h1>lost ?</h1>,
    children: [
      {
        path: "/",
        element: <Home/>,
      },
      {
        path: "/login",
        element: <LoginForm/>,
      },
      {
        path: "/register",
        element: <RegisterForm />,
      },
    ],
  },
]);

export default router;
