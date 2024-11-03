import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Suspense } from "react";
import Loading from "./components/Loading";

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;

// https://remixicon.com/
// https://github.com/Remix-Design/RemixIcon
