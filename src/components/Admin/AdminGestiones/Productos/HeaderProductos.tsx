import { Container, Header } from "@/components/Common";
import { FaClipboardList } from "react-icons/fa6";
import AppAdminProfile from "../../AdminProfile/AppAdminProfile";

const Productos = () => {
  return (
    <Container>
      <Header
        title="Gestión de Productos"
        iconTitle={<FaClipboardList className="text-primary" />}
      >
        <AppAdminProfile />
      </Header>
    </Container>
  );
};

export default Productos;
