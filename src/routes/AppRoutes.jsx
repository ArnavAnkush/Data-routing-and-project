import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router";

import Home from "../Pages/Home";
import About from "../Pages/About";
import Services from "../Pages/Services";
import MainLayout from "../layout/MainLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <h1>Home Page</h1>,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "",
        element: <Home />,
      },
    ],
  },
]);

const AppRoutes = () => {
  return <RouterProvider router={router} />;
};

export default AppRoutes;
