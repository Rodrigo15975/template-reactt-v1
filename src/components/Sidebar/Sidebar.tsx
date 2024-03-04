import { FC, useEffect, useState } from "react";
import { Menu, MenuItem, Sidebar, SubMenu } from "react-pro-sidebar";
import { PropsSidebar } from "./types/typesLinks";
import { NavLink } from "react-router-dom";

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
        background:
          "linear-gradient(190deg, rgba(255,255,255,1) 0%, #e8deff 100%)",
      }}
      backgroundColor={screenMobile ? "white" : ""}
      toggled={toggled}
      onBackdropClick={() => setToggled(false)}
      rootStyles={{ ...rootStyles }}
      className="min-h-screen"
      // 992px
      breakPoint="lg"
    >
      <Menu
        menuItemStyles={{
          // Quita el hover
          button: {
            ":hover": {},
          },
        }}
      >
        {menu.map((link) => (
          <div key={link.path}>
            <MenuItem
              icon={link.icon}
              component={<NavLink to={link.path}></NavLink>}
            >
              {link.label}
            </MenuItem>
            {link.subMenu?.map((subMenu) => (
              <SubMenu
                icon={subMenu.icon}
                key={subMenu.path}
                label={subMenu.labelSubMenu}
              >
                <MenuItem component={<NavLink to={subMenu.path}></NavLink>}>
                  {subMenu.label}
                </MenuItem>
              </SubMenu>
            ))}
          </div>
        ))}
      </Menu>
    </Sidebar>
  );
};

export default SidebarMenu;
