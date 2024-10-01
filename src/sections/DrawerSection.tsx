import { Drawer } from "@mantine/core";
import { IconHome, Icon12Hours } from "@tabler/icons-react";
import NavbarLinkCircle from "../components/NavbarLinkCircle";
import NavbarItem from "../components/NavbarItem";
import { Link, useLocation } from "react-router-dom";
import { routes } from "../routes";
import { useEffect, useState } from "react";

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
            <div className="pt-3 mt-5 space-y-2">
              <Link to={"/"}>
                <NavbarItem
                  label="الرئيسية"
                  leftSectionIcon={<IconHome />}
                  isActive={isActiveState == routes.home.path}
                />
              </Link>
              <NavbarItem
                label="قائمة"
                leftSectionIcon={<Icon12Hours />}
                single={false}
              >
                <Link to={"/x"}>
                  <NavbarItem
                    label="الرئيسية"
                    leftSectionIcon={<NavbarLinkCircle />}
                    isActive={isActiveState == routes.x.path}
                  />
                </Link>
              </NavbarItem>
            </div>

            {/* ss  */}
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}
