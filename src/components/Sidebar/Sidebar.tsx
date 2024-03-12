import { FC, useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { PropsSidebar } from "./types/typesLinks";
import AdminButtonSidebar from "../Admin/AdminSidebar/AdminButtonSidebar";
import AdminLogoSidebar from "../Admin/AdminSidebar/AdminLogoSidebar";

const SidebarMenu: FC<PropsSidebar> = ({ menu, rootStyles }) => {
  // Toggle habre el sidebar en mobile, dale un estado global con zustand
  const [toggled, setToggled] = useState(false);
  // Verifica si la pantalla es 926px y esconde el sidebar
  const [screenMobile, setScreenMobile] = useState(false);
  useEffect(() => {
    const handleResize = () =>
      window.innerWidth <= 992 ? setScreenMobile(true) : setScreenMobile(false);
    // Verificar si el ancho de la ventana es menor o igual a 926px

    // Llamar a handleResize cuando se carga la página y cuando se cambia el tamaño de la ventana
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener en la limpieza del efecto para evitar fugas de memoria
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Sidebar
      style={{
        background: "linear-gradient(190deg, #ffffff 0%, #ffffff 100%)",
      }}
      backgroundColor={screenMobile ? "white" : ""}
      toggled={toggled}
      onBackdropClick={() => setToggled(false)}
      rootStyles={{ ...rootStyles }}
      className="min-h-screen shadow-xl"
      // 992px
      breakPoint="lg"
    >
      <div className="flex flex-col justify-between h-full">
        <Menu>
          <AdminLogoSidebar />
          <p className=" text-secondary/50 my-[1rem] border-b pb-2 px-[2rem]">
            Menu
          </p>
          {menu.map((link) => (
            <div key={link.path}>
              <MenuItem
                icon={link.icon}
                component={<NavLink to={link.path}></NavLink>}
              >
                {link.label}
              </MenuItem>
              {link.subMenu && (
                <SubMenu
                  icon={link.subMenu[0].iconSubMenu}
                  label={link.subMenu[0].labelSubMenu}
                >
                  {link.subMenu?.map((subMenu) => (
                    <MenuItem
                      key={subMenu.path}
                      icon={subMenu.icon}
                      component={<NavLink to={subMenu.path}></NavLink>}
                    >
                      {subMenu.label}
                    </MenuItem>
                  ))}
                </SubMenu>
              )}
            </div>
          ))}
        </Menu>
        <AdminButtonSidebar />
      </div>
    </Sidebar>
  );
};

export default SidebarMenu;
