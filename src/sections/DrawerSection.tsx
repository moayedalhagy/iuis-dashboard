import { Drawer } from "@mantine/core";
// import {
//   IconHome,
//   Icon12Hours,
//   IconNewSection,
//   IconNews,
// } from "@tabler/icons-react";
// import NavbarLinkCircle from "../components/NavbarLinkCircle";
import NavbarItem from "../components/NavbarItem";
import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { PagePathEnum } from "../enums/PagePathEnum";

export default function DrawerSection({ className }: any) {
  const location = useLocation();

  const [isActiveState, setIsActiveState] = useState(location.pathname);

  useEffect(() => {
    setIsActiveState(location.pathname);
  }, [location.pathname]);

  return (
    <div className={className}>
      <Drawer.Root opened onClose={() => {}} radius={"xs"}>
        <Drawer.Content>
          <Drawer.Body className="bg-main-color h-screen text-white">
            {/* logo section  */}
            <div className=" py-2">
              <img src="/images/logo.svg" className="mx-auto" />
            </div>

            {/* links section  */}
            {links(isActiveState)}

            {/* ss  */}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}

function links(isActiveState: string) {
  return (
    <div className="pt-3 mt-5 space-y-2">
      {/* Home  */}
      <Link to={PagePathEnum.home}>
        <NavbarItem
          label="الرئيسية"
          // leftSectionIcon={<IconHome />}
          isActive={isActiveState == PagePathEnum.home}
        />
      </Link>
      {/* Home  */}
      <Link to={PagePathEnum.login}>
        <NavbarItem
          label="تسجيل الدخول"
          // leftSectionIcon={<IconHome />}
          isActive={isActiveState == PagePathEnum.login}
        />
      </Link>

      {/* News  */}
      <NavbarItem
        label="إدارة الأخبار"
        // leftSectionIcon={<IconNews />}
        single={false}
      >
        <Link to={"/x"}>
          <NavbarItem
            label="إدارة الخبر"
            // leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == "/x"}
          />
        </Link>
        <Link to={"/x"}>
          <NavbarItem
            label="إدارة المرئيات"
            // leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == "/x"}
          />
        </Link>
      </NavbarItem>
    </div>
  );
}
