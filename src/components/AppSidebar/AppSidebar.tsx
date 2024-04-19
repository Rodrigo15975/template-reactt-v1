import SidebarMenu from "../Sidebar/Sidebar";
import menu from "./LinksSidebar";

const AppSidebar = () => {
  return (
    <>
      <SidebarMenu
        menu={menu.menu}
        rootStyles={{
          color: "#1816167f",
          fontFamily: '"Roboto Slab", "serif"',
          fontWeight: 500,
          border: "none",
        }}
      />
    </>
  );
};

export default AppSidebar;
