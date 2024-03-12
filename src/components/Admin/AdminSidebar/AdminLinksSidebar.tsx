import { PropsSidebar } from "@/components/Sidebar/types/typesLinks";
import { PathsAdminProtected } from "@/router";
import { AdminPathMenu, AdminPathSubMenu } from "./adminPathMenuLinksSidebar";

import { FaListCheck } from "react-icons/fa6";
import {
  MdCategory,
  MdOutlineLibraryBooks,
  MdProductionQuantityLimits,
} from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { TbReportSearch } from "react-icons/tb";
import { CiViewList } from "react-icons/ci";
import { MdOutlineAdminPanelSettings } from "react-icons/md";

const adminSidebarLinks: PropsSidebar = {
  menu: [
    {
      icon: <RxDashboard />,
      label: AdminPathMenu.DASHBOARD,
      path: PathsAdminProtected.DASHBOARD,
      subMenu: [
        {
          labelSubMenu: AdminPathSubMenu.GESTIONES,
          icon: <MdCategory />,
          iconSubMenu: <FaListCheck />,
          label: AdminPathSubMenu.CATEGORIES,
          path: PathsAdminProtected.CATEGORIES,
        },
        {
          icon: <MdProductionQuantityLimits />,
          label: AdminPathSubMenu.PRODUCTS,
          path: PathsAdminProtected.PRODUCTS,
        },
        {
          icon: <MdOutlineAdminPanelSettings />,
          label: AdminPathSubMenu.ADMINISTRATOR,
          path: PathsAdminProtected.ADMINISTRATOR,
        },
      ],
    },
    {
      label: AdminPathMenu.HISTORY_ORDER,
      path: PathsAdminProtected.HISTORY_ORDER,
      icon: <MdOutlineLibraryBooks />,
    },
    {
      label: AdminPathMenu.REPORTS,
      path: PathsAdminProtected.REPORTS,
      icon: <TbReportSearch />,
    },
    {
      label: AdminPathMenu.LIST_ORDER,
      path: PathsAdminProtected.LIST_ORDER,
      icon: <CiViewList />,
    },
  ],
};
export default adminSidebarLinks;
