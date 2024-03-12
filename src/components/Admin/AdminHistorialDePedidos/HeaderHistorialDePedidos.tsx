import { Container, Header } from "@/components/Common";
import { MdOutlineLibraryBooks } from "react-icons/md";
import AppAdminProfile from "../AdminProfile/AppAdminProfile";

const HistorialDePedidos = () => {
  return (
    <Container>
      <Header
        title="Historial de pedidos"
        iconTitle={<MdOutlineLibraryBooks className="text-primary" />}
      >
        <AppAdminProfile />
      </Header>
    </Container>
  );
};

export default HistorialDePedidos;
