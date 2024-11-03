import { NavLink } from "@mantine/core";
import NavbarItemChevron from "./NavbarItemChevron";

export default function NavbarItem({
  label,
  leftSectionIcon,
  single = true,
  children,
  isActive = false,
}: // opened = false,
{
  label: string;
  leftSectionIcon?: React.ReactNode;
  single?: boolean;
  children?: React.ReactNode;
  isActive?: boolean;
  // opened?: boolean;
}) {
  return (
    <NavLink
      label={label}
      variant="light"
      color="#ffffff"
      className="rounded-sm hover:bg-main-color-light drawer-links"
      leftSection={leftSectionIcon}
      rightSection={!single && <NavbarItemChevron />}
      active={isActive}
      component="span"
      // opened={opened}
    >
      {children}
    </NavLink>
  );
}
