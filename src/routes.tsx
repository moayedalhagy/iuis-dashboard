type RoutesType = {
  path: string;
  element: React.ReactNode;
};

type RoutesPages = {
  home: RoutesType;
  x: RoutesType;
};
export const routes: RoutesPages = {
  home: { path: "/", element: <p> home page</p> },
  x: { path: "/x", element: <p> x </p> },
};
