import { createBrowserRouter, Navigate, useNavigate } from "react-router-dom";
import Layout from "./Layout";
import React, { PropsWithChildren } from "react";
import { PagePath } from "./PagePath";
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
const PagesManger = React.lazy(() => import("./pages/settings/PagesManger"));

export const routes = [
  {
    path: PagePath.home,
    element: <Home />,
  },
  {
    path: PagePath.news,
    element: <News />,
  },
  {
    path: PagePath.visuals,
    element: <Visuals />,
  },
  {
    path: PagePath.categoryProgram,
    element: <CategoryProgram />,
  },
  {
    path: PagePath.categoryNews,
    element: <CategoryNews />,
  },
  {
    path: PagePath.categoryDecisions,
    element: <CategoryDecisions />,
  },
  {
    path: PagePath.academicProgram,
    element: <AcademicProgram />,
  },
  {
    path: PagePath.decisions,
    element: <Decisions />,
  },
  {
    path: PagePath.settings.pagesManger,
    element: <PagesManger />,
  },
];

function checkApiTokenLocalStorage() {
  const navigate = useNavigate();
  return useQuery({
    queryKey: ["check-api-key"],
    queryFn: () => {
      if (!!localStorage.getItem(API_TOKEN_KEY) == false) {
        navigate(PagePath.login);
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
    <Navigate to={PagePath.login} replace />
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
    path: PagePath.login,
    element: <LoginPage />,
    errorElement: <p>no page</p>,
  },
]);
