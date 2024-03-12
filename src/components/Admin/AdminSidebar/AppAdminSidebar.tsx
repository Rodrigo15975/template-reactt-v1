import SidebarMenu from "@/components/Sidebar/Sidebar";
import adminSidebarLinks from "./AdminLinksSidebar";

const AppAdminSidebar = () => {
  return (
    <>
      <SidebarMenu
        menu={adminSidebarLinks.menu}
        rootStyles={{
          fontWeight: 600,
          color:"#424548"
        }}
      />
    </>
  );
};

export default AppAdminSidebar;
