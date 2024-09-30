import { Drawer, NavLink } from "@mantine/core";

import { IconHome, IconChevronLeft } from "@tabler/icons-react";
import NavbarLinkCircle from "../components/NavbarLinkCircle";
export default function DrawerSection({ className }: any) {
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
            <div className="pt-3 mt-5">
              <NavLink
                label="الرئيسية"
                variant="light"
                color="#ffffff"
                className="rounded-sm hover:bg-main-color-light drawer-links"
                leftSection={<IconHome size="1.8rem" stroke={1.5} />}
                rightSection={
                  <IconChevronLeft
                    size="0.8rem"
                    stroke={1.5}
                    className="mantine-rotate-ltr"
                  />
                }
              >
                <NavLink
                  label="الرئيسية"
                  variant="light"
                  color="#ffffff"
                  className="rounded-sm hover:bg-main-color-light drawer-links"
                  leftSection={<NavbarLinkCircle />}
                />
                <NavLink
                  label="الرئيسية"
                  variant="light"
                  color="#ffffff"
                  className="rounded-sm hover:bg-main-color-light drawer-links"
                  leftSection={<NavbarLinkCircle />}
                />
                <NavLink
                  label="الرئيسية"
                  variant="light"
                  color="#ffffff"
                  className="rounded-sm hover:bg-main-color-light drawer-links"
                  leftSection={<NavbarLinkCircle />}
                />
              </NavLink>
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}
