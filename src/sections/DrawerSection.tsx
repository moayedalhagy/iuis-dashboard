import { Drawer } from "@mantine/core";

import NavbarLinkCircle from "../components/NavbarLinkCircle";
import NavbarItem from "../components/NavbarItem";
import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { PagePathEnum } from "../enums/PagePathEnum";
import { RiHome4Line, RiNewsLine } from "@remixicon/react";

export default function DrawerSection({ className }: any) {
  const location = useLocation();

  const [isActiveState, setIsActiveState] = useState(location.pathname);

  useEffect(() => {
    setIsActiveState(location.pathname);
  }, [location.pathname]);

  return (
    <div className={className}>
      <Drawer.Root opened onClose={() => {}} radius={"xs"} lockScroll={false}>
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
          leftSectionIcon={<RiHome4Line />}
          isActive={isActiveState == PagePathEnum.home}
        />
      </Link>
      {/* Home  */}
      <Link to={PagePathEnum.login}>
        <NavbarItem
          label="تسجيل الدخول"
          leftSectionIcon={<RiHome4Line />}
          isActive={isActiveState == PagePathEnum.login}
        />
      </Link>

      {/* News  */}
      <NavbarItem
        label="إدارة الأخبار"
        leftSectionIcon={<RiNewsLine />}
        single={false}
        // opened={isActiveState}
      >
        <Link to={PagePathEnum.news}>
          <NavbarItem
            label="إدارة الخبر"
            leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == PagePathEnum.news}
          />
        </Link>
        <Link to={PagePathEnum.visuals}>
          <NavbarItem
            label="إدارة المرئيات"
            leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == PagePathEnum.visuals}
          />
        </Link>
      </NavbarItem>
    </div>
  );
}
