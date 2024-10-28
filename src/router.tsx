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
const Visuals = React.lazy(() => import("./pages/Visuals"));
const CategoryProgram = React.lazy(() => import("./pages/CategoryProgram"));
const CategoryNews = React.lazy(() => import("./pages/CategoryNews"));
const CategoryDecisions = React.lazy(() => import("./pages/CategoryDecisions"));
const AcademicProgram = React.lazy(() => import("./pages/AcademicProgram"));
const Decisions = React.lazy(() => import("./pages/Decisions"));

export const routes = [
  {
    path: PagePathEnum.home,
    element: <Home />,
  },
  {
    path: PagePathEnum.news,
    element: <News />,
  },
  {
    path: PagePathEnum.visuals,
    element: <Visuals />,
  },
  {
    path: PagePathEnum.categoryProgram,
    element: <CategoryProgram />,
  },
  {
    path: PagePathEnum.categoryNews,
    element: <CategoryNews />,
  },
  {
    path: PagePathEnum.categoryDecisions,
    element: <CategoryDecisions />,
  },
  {
    path: PagePathEnum.academicProgram,
    element: <AcademicProgram />,
  },
  {
    path: PagePathEnum.decisions,
    element: <Decisions />,
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
