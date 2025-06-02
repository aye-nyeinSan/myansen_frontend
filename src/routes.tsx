import { createBrowserRouter } from "react-router-dom";
import App from "./App";

import HomePage from "@/pages/home/homepage";
import TestMLOpsPage from "@/pages/testMLOps/testMLOpsPage";
import NotFoundPage from "@/pages/ErrorPage/NotFoundPage";
import Login from "@/pages/auth/login";
import Register from "@/pages/auth/register";
import ApiServicesPage from "@/pages/apiservices/ApiServicesPage";

export const router = createBrowserRouter([
  {
    element: <App />,
    errorElement: <NotFoundPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/dashboard",
      },
      {
        path: "/apiservices",
        element: <ApiServicesPage />,
      },
      {
        path: "/testmlops",
        element: <TestMLOpsPage />,
      },
      {
        path: "*",
        element: <NotFoundPage />,

      }
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
]);
