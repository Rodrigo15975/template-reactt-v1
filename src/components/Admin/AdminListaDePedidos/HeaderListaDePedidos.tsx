import { Container, Header } from "@/components/Common";
import { CiViewList } from "react-icons/ci";
import AppAdminProfile from "../AdminProfile/AppAdminProfile";

const ListaDePedidos = () => {
  return (
    <Container>
      <Header
        title="Lista de Pedidos"
        iconTitle={<CiViewList className="text-primary" />}
      >
        <AppAdminProfile />
      </Header>
    </Container>
  );
};

export default ListaDePedidos;
