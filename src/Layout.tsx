import { Outlet } from "react-router-dom";

import DrawerSection from "./sections/DrawerSection";

export default function Layout() {
  return (
    <div className="flex">
      <DrawerSection />

      <main className="flex-1 h-screen  px-1 mr-drawer bg-tw-body  ">
        <Outlet />
      </main>
    </div>
  );
}
