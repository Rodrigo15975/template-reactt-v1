import { Container, Header } from "@/components/Common";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import AppAdminProfile from "../../AdminProfile/AppAdminProfile";

const Administradores = () => {
  return (
    <Container>
      <Header
        title="Gestión de Administradores"
        iconTitle={<MdOutlineAdminPanelSettings className="text-primary" />}
      >
        <AppAdminProfile />
      </Header>
    </Container>
  );
};

export default Administradores;
