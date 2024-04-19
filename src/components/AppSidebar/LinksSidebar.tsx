import { PathsProtected } from "@/router/enum/routerPaths";
import { LabelSidebar } from "./labelPathSidebar";
import { RxDashboard } from "react-icons/rx";
import { PropsSidebar } from "../Sidebar/types/typesLinks";

const menu: PropsSidebar = {
  menu: [
    {
      icon: <RxDashboard />,
      label: LabelSidebar.DASHBOARD,
      path: PathsProtected.DASHBOARD,
    },
  ],
};

export default menu;
