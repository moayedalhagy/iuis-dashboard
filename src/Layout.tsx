import { Outlet } from "react-router-dom";
import FixedSidebar from "./components/FixedSidebar";
import { MantineProvider, DirectionProvider } from "@mantine/core";

export default function Layout() {
  return (
    <DirectionProvider>
      <MantineProvider>
        <div className="flex">
          <FixedSidebar className=" " />
          <main className="flex-1 mr-[280px]  px-2  bg-red-300 h-screen">
            <Outlet />
          </main>
        </div>
      </MantineProvider>
    </DirectionProvider>
  );
}
