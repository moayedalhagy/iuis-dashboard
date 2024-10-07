import Home from "./pages/Home";

import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import React, { Suspense } from "react";

const LoginPage = React.lazy(() => import("./pages/Login"));

export const routes = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "login",
    element: <LoginPage />,
  },
];

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>not found </p>,
    children: routes,
  },
]);
