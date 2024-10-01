import { NavLink } from "@mantine/core";
import NavbarItemChevron from "./NavbarItemChevron";
import { Link } from "react-router-dom";

export default function NavbarItem({
  label,
  leftSectionIcon,
  single = true,
  children,
  isActive = false,
}: {
  label: string;
  leftSectionIcon?: React.ReactNode;
  single?: boolean;
  children?: React.ReactNode;
  isActive?: boolean;
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
    >
      {children}
    </NavLink>
  );
}
