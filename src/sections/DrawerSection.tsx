import { Drawer } from "@mantine/core";

import { IconHome, Icon12Hours } from "@tabler/icons-react";
import NavbarLinkCircle from "../components/NavbarLinkCircle";
import NavbarItem from "../components/NavbarItem";

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
            <div className="pt-3 mt-5 space-y-2">
              <NavbarItem label="الرئيسية  " leftSectionIcon={<IconHome />} />

              <NavbarItem
                label="قائمة"
                leftSectionIcon={<Icon12Hours />}
                single={false}
              >
                <NavbarItem
                  label="الرئيسية"
                  leftSectionIcon={<NavbarLinkCircle />}
                />
                <NavbarItem
                  label="الرئيسية"
                  leftSectionIcon={<NavbarLinkCircle />}
                />
                <NavbarItem
                  label="الرئيسية"
                  leftSectionIcon={<NavbarLinkCircle />}
                />
              </NavbarItem>
            </div>
          </Drawer.Body>
        </Drawer.Content>
      </Drawer.Root>
    </div>
  );
}
