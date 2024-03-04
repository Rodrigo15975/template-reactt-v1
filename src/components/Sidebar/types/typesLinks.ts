import React from "react";
import { CSSObject } from "react-pro-sidebar";

// PropsSidebar
export type PropsSidebar = {
  menu: SidebarLinks[];
  rootStyles?: CSSObject | undefined;
};

// Links- with- sub-menu
type SidebarLinksSubMenu = {
  path: string;
  label: string;
  labelSubMenu?: string;
  icon: React.JSX.Element;
};

// Links- not with- sub-menu
type SidebarLinks = {
  path: string;
  label: string;
  icon: React.JSX.Element;
  subMenu?: SidebarLinksSubMenu[];
};
