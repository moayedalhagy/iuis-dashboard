import Home from "./pages/Home";

type RoutesType = {
  path: string;
  element: React.ReactNode;
};

type RoutesPages = {
  home: RoutesType;
  x: RoutesType;
};
export const routes: RoutesPages = {
  home: { path: "/", element: <Home /> },
  x: { path: "/x", element: <p> x </p> },
};
