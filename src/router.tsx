import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import React, { PropsWithChildren } from "react";
import { PagePathEnum } from "./enums/PagePathEnum";
import useAuthStore, { API_TOKEN_KEY } from "./store/AuthStore";
import { useQuery } from "@tanstack/react-query";

//pages
const LoginPage = React.lazy(() => import("./pages/Login"));
const Home = React.lazy(() => import("./pages/Home"));
const News = React.lazy(() => import("./pages/News"));

export const routes = [
  {
    path: PagePathEnum.home,
    element: <Home />,
  },
  {
    path: PagePathEnum.news,
    element: <News />,
  },
];

function checkApiTokenLocalStorage() {
  const navigate = useNavigate();
  return useQuery({
    queryKey: ["check-api-key"],
    queryFn: () => {
      if (!!localStorage.getItem(API_TOKEN_KEY) == false) {
        navigate(PagePathEnum.login);
        return null;
      }
      return null;
    },
    refetchInterval: 3000,
  });
}

function AuthRoute({ children }: PropsWithChildren) {
  const authStore = useAuthStore();

  checkApiTokenLocalStorage();

  return authStore.isAuthenticated ? (
    <> {children} </>
  ) : (
    <Navigate to={PagePathEnum.login} replace />
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    errorElement: <p>not found page</p>,
    children: routes,
  },

  {
    path: PagePathEnum.login,
    element: <LoginPage />,
    errorElement: <p>no page</p>,
  },
]);
