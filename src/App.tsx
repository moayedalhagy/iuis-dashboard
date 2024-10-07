import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<p className="text-red-900">loading....</p>}>
      <RouterProvider router={router} />
    </Suspense>
  );
}

export default App;
