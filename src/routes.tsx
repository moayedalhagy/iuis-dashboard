import Home from "./pages/Home";
import LoginPage from "./pages/Login";

type RoutesType = {
  path: string;
  element: React.ReactNode;
};

type RoutesPages = {
  home: RoutesType;
  x: RoutesType;
  login: RoutesType;
};
export const routes: RoutesPages = {
  home: { path: "/", element: <Home /> },
  x: { path: "/x", element: <p> x </p> },
  login: { path: "/login", element: <LoginPage /> },
};
