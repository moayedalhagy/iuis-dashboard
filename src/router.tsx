import { createBrowserRouter, Navigate } from "react-router-dom";
import Layout from "./Layout";
import React, { PropsWithChildren } from "react";
import { PagePathEnum } from "./enums/PagePathEnum";
// import LoginPage from "./pages/Login";

const LoginPage = React.lazy(() => import("./pages/Login"));
const Home = React.lazy(() => import("./pages/Home"));

export const routes = [
  {
    path: PagePathEnum.home,
    element: <Home />,
  },
];

function AuthRoute({ children }: PropsWithChildren) {
  if (false) {
    <Navigate to={PagePathEnum.login} replace />;
  }

  return <> {children} </>;
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <p>not found page</p>,
    children: routes,
  },

  {
    path: PagePathEnum.login,
    element: <LoginPage />,
    errorElement: <p>no page</p>,
  },
]);
