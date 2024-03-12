import Header from "@/components/Common/Header/Header";

import { MdSpaceDashboard } from "react-icons/md";
import AppAdminProfile from "../AdminProfile/AppAdminProfile";
const DashboardHeader = () => {
  // TERMINAR CON LAS PROTIPADOS O AVANZAR HASTA DON DSE PEUDA Y 
  //  TERMINAR EL DIAGRAMA MAÑANA
  // EMPEZAR A CREAR EL BACKEND MINIMO PARA EL ADMINISTRADOR
  // INTEGRAR UN LOADING PARA LA AUTH, A LA HORA DE REDIRECCIONAMIENTO
  return (
    <>
      <Header
        title="Dashboard"
        iconTitle={<MdSpaceDashboard className="text-primary" />}
      >
        <AppAdminProfile />
      </Header>
    </>
  );
};

export default DashboardHeader;
