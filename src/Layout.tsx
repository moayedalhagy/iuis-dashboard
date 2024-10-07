import { Outlet } from "react-router-dom";

import { MantineProvider, DirectionProvider } from "@mantine/core";
import DrawerSection from "./sections/DrawerSection";
import { Notifications } from "@mantine/notifications";
import "@mantine/notifications/styles.css";
export default function Layout() {
  return (
    <DirectionProvider detectDirection>
      <MantineProvider>
        <Notifications />
        <div className="flex">
          <DrawerSection />

          <main className="flex-1  px-1 mr-drawer bg-tw-body h-screen">
            <Outlet />
          </main>
        </div>
      </MantineProvider>
    </DirectionProvider>
  );
}
