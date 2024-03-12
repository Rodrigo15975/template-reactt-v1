import { Container, Header } from "@/components/Common";
import { CiCircleList } from "react-icons/ci";
import AppAdminProfile from "../../AdminProfile/AppAdminProfile";

const Categorias = () => {
  return (
    <Container>
      <Header
        title="Gestión de Categorías"
        iconTitle={<CiCircleList className="text-primary" />}
      >
        <AppAdminProfile />
      </Header>
    </Container>
  );
};

export default Categorias;
