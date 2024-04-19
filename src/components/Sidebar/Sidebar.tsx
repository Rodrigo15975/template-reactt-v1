import { FC, useEffect } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { NavLink } from "react-router-dom";
import { PropsSidebar } from "./types/typesLinks";

import storeSidebarMobile from "@/store/storeSidebarMobile/storeSidebarMobile";

const SidebarMenu: FC<PropsSidebar> = ({ menu, rootStyles }) => {
  const {
    setToggle,
    setCollapse,
    setScreenMobile,
    screenMobile,
    toggle,
    collapse,
  } = storeSidebarMobile();
  // Verifica si la pantalla es 926px y esconde el sidebar
  useEffect(() => {
    const handleResize = () => {
      setScreenMobile();
      setScreenMobile();
      setCollapse();
      setCollapse();
    };
    // Verificar si el ancho de la ventana es menor o igual a 926px

    // Llamar a handleResize cuando se carga la página y cuando se cambia el tamaño de la ventana
    handleResize();
    window.addEventListener("resize", handleResize);

    // Limpiar el event listener en la limpieza del efecto para evitar fugas de memoria
    return () => window.removeEventListener("resize", handleResize);
  }, [setCollapse, setScreenMobile]);

  return (
    <>
      <div className="bg-bg_default min-h-screen ">
        <Sidebar
          style={{
            background: "linear-gradient(190deg, #ffffff 100%#ffffffea 100%)",
            height: "100%",
          }}
          collapsed={collapse}
          backgroundColor={screenMobile ? "white" : ""}
          toggled={toggle}
          onBackdropClick={() => setToggle()}
          rootStyles={{ ...rootStyles }}
          className="min-h-screen bg-bg_default flex flex-col justify-between shadow-xl border"
          // 992px
          breakPoint="xl"
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <Menu>
                {menu.map((link) => (
                  <div key={`${link.path}-menu`}>
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
            </div>
          </div>
        </Sidebar>
      </div>
    </>
  );
};

export default SidebarMenu;
