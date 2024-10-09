import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { MantineProvider, DirectionProvider } from "@mantine/core";

import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      {/* <div dir="ltr">
        <ReactQueryDevtools initialIsOpen={false} />
      </div> */}
      <DirectionProvider detectDirection>
        <MantineProvider>
          <Notifications />

          <App />
        </MantineProvider>
      </DirectionProvider>
    </QueryClientProvider>
  </StrictMode>
);

{
}
