import { Drawer, Space } from "@mantine/core";

import NavbarLinkCircle from "../components/NavbarLinkCircle";
import NavbarItem from "../components/NavbarItem";
import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { PagePath } from "../PagePath";
import {
  RiBookShelfLine,
  RiEqualizerLine,
  RiGraduationCapLine,
  RiHome4Line,
  RiNewsLine,
  RiNewspaperLine,
} from "@remixicon/react";

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
          <Drawer.Body className="bg-main-color  min-h-screen text-white">
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
      <Link to={PagePath.home}>
        <NavbarItem
          label="الرئيسية"
          leftSectionIcon={<RiHome4Line />}
          isActive={isActiveState == PagePath.home}
        />
      </Link>
      {/* Home  */}
      <Link to={PagePath.login}>
        <NavbarItem
          label="تسجيل الدخول"
          leftSectionIcon={<RiHome4Line />}
          isActive={isActiveState == PagePath.login}
        />
      </Link>

      {/* News  */}
      <NavbarItem
        label="إدارة الأخبار"
        leftSectionIcon={<RiNewsLine />}
        single={false}
        // opened={isActiveState}
      >
        <Link to={PagePath.news}>
          <NavbarItem
            label="إدارة الخبر"
            leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == PagePath.news}
          />
        </Link>
        <Link to={PagePath.visuals}>
          <NavbarItem
            label="إدارة المرئيات"
            leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == PagePath.visuals}
          />
        </Link>
      </NavbarItem>

      {/* Categories  */}
      <NavbarItem
        label="إدارة التصنيفات"
        leftSectionIcon={<RiBookShelfLine />}
        single={false}
        // opened={isActiveState}
      >
        <Link to={PagePath.categoryProgram}>
          <NavbarItem
            label="البرامج الاكاديمية"
            leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == PagePath.categoryProgram}
          />
        </Link>
        <Link to={PagePath.categoryNews}>
          <NavbarItem
            label="الأخبار"
            leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == PagePath.categoryNews}
          />
        </Link>
        <Link to={PagePath.categoryDecisions}>
          <NavbarItem
            label="الأنظمة والقرارات"
            leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == PagePath.categoryDecisions}
          />
        </Link>
      </NavbarItem>

      <Space mt="1" />

      <Link to={PagePath.academicProgram}>
        <NavbarItem
          label="البرامج الأكاديمية"
          leftSectionIcon={<RiGraduationCapLine />}
          isActive={isActiveState == PagePath.academicProgram}
        />
      </Link>
      <Link to={PagePath.decisions}>
        <NavbarItem
          label="الأنظمة والقرارات"
          leftSectionIcon={<RiNewspaperLine />}
          isActive={isActiveState == PagePath.decisions}
        />
      </Link>

      <NavbarItem
        label="الاعدادت العامة"
        leftSectionIcon={<RiEqualizerLine />}
        single={false}
        // opened={isActiveState}
      >
        {/* teachers   */}
        <Link to={PagePath.settings.pagesManger}>
          <NavbarItem
            label="إدارة الصفحات"
            leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == PagePath.settings.pagesManger}
          />
        </Link>

        <Link to={PagePath.settings.faqs}>
          <NavbarItem
            label="الأسئلة الشائعة"
            leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == PagePath.settings.faqs}
          />
        </Link>

        <Link to={PagePath.settings.socialMedia}>
          <NavbarItem
            label="منصات التواصل"
            leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == PagePath.settings.socialMedia}
          />
        </Link>

        <Link to={PagePath.settings.testimonials}>
          <NavbarItem
            label="قالوا عن الجامعة"
            leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == PagePath.settings.testimonials}
          />
        </Link>

        <Link to={PagePath.settings.onlinePortal}>
          <NavbarItem
            label="البوابة الإلكترونية"
            leftSectionIcon={<NavbarLinkCircle />}
            isActive={isActiveState == PagePath.settings.onlinePortal}
          />
        </Link>
      </NavbarItem>
    </div>
  );
}
